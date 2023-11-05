import { ChildProcessWithoutNullStreams } from "child_process";
import { StreamLogger } from "./stream-logger.type";

export class StreamHandler {
    constructor(private logger: StreamLogger) {}

    processOutput = (stream: ChildProcessWithoutNullStreams)  => {
        stream.stdout.on('data', (data) => {
            this.logger.log(data.toString());
        });

        stream.stderr.on('data', (data) => {
            this.logger.error(data.toString());
        });

        stream.on('close', this.logger.end);
    };
};
