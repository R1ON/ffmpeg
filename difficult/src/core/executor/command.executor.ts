import { ChildProcessWithoutNullStreams } from "child_process";
import { StreamLogger } from "../handlers/stream-logger.type";
import { CommandExec } from "./command.types";

export abstract class CommandExecutor<Input> {
    constructor(private logger: StreamLogger) {}

    public execute = async () => {
        const input = this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    };

    protected abstract prompt(): Input;
    protected abstract build(input: Input): CommandExec;
    protected abstract spawn(command: CommandExec): ChildProcessWithoutNullStreams;
    protected abstract processStream(
        stream: ChildProcessWithoutNullStreams,
        logger: StreamLogger,
    ): void;
};

