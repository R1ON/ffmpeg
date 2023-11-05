import { CommandExec } from "../../core/executor/command.types";

export type FfmpegInput = {
    width: number;
    height: number;
    path: string;
    name: string;
};

export type CommandExecFfmpeg = CommandExec & {
    output: string;
};
