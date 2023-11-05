import { ChildProcessWithoutNullStreams } from "child_process";
import { StreamLogger } from "./stream-logger.type";

export class StreamHandler {
    constructor(private logger: StreamLogger) {}

    processOutput = (stream: ChildProcessWithoutNullStreams)  => {
        stream.stdout.on('data', this.logger.log);
        stream.stderr.on('data', this.logger.error);
        stream.on('close', this.logger.end);
    };
};
