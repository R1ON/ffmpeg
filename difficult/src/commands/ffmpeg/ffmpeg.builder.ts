export class FfmpegBuilder {
    private inputPath: string;
    private options = new Map<string, string>();

    constructor() {
        this.options.set('-c:v', 'libx265');
    }

    input = (path: string): this => {
        this.inputPath = path;
        return this;
    };

    setVideoSize = (width: number, height: number): this => {
        this.options.set('-s', `${width}x${height}`);
        return this;
    };

    output = (path: string): string[] => {
        if (!this.inputPath) {
            throw new Error('FfmpegBuilder -> Не задан параметр input');
        }

        const args: string[] = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            args.push(key, value);
        });

        args.push(path);

        return args;
    };
};
