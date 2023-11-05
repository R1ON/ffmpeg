import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { CommandExecutor } from "../../core/executor/command.executor";
import { StreamLogger } from "../../core/handlers/stream-logger.type";
import { FfmpegInput, CommandExecFfmpeg } from "./ffmpeg.types";
import { FileService } from "../../core/files/file.service";
import { PromptService } from "../../core/prompt/prompt.service";
import { FfmpegBuilder } from "./ffmpeg.builder";
import { StreamHandler } from "../../core/handlers/stream.handler";

export class FfmpegExecutor extends CommandExecutor<FfmpegInput> {
    private fileService = new FileService();
    private promptService = new PromptService();

    constructor(logger: StreamLogger) {
        super(logger);
    }

    protected prompt = (): FfmpegInput => {
        const width = this.promptService.input('WIDTH', Number);
        const height = this.promptService.input('HEIGHT', Number);
        const name = this.promptService.input('FINAL_NAME', String);
        const pathToSource = this.promptService.input('PATH_TO_SOURCE', String);

        return { width, height, name, path: pathToSource };
    };

    protected build = ({ path, name, width, height }: FfmpegInput): CommandExecFfmpeg => {
        const output = this.fileService.getFilePath(path, name, 'mp4');

        const args = (new FfmpegBuilder())
            .input(path)
            .setVideoSize(width, height)
            .output(output);

        return { command: 'ffmpeg', args, output };
    };

    protected spawn = ({
        output,
        command,
        args,
    }: CommandExecFfmpeg): ChildProcessWithoutNullStreams => {
        this.fileService.deleteFileIfExists(output);

        return spawn(command, args);
    };

    protected processStream = (
        stream: ChildProcessWithoutNullStreams,
        logger: StreamLogger
    ): void => {
        const handler = new StreamHandler(logger);
        handler.processOutput(stream); 
    };
};
