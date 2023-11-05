import { promises } from "fs";
import { dirname, isAbsolute, join } from "path";

export class FileService {
    private isExists = async (path: string) => {
        try {
            await promises.stat(path);
            return true;
        }
        catch {
            return false;
        }
    };

    public getFilePath = (path: string, name: string, ext: string) => {
        let correctPath = path;

        if (isAbsolute(path)) {
            correctPath = join(`${__dirname}/${path}`);
        }

        return join(`${dirname(correctPath)}/${name}.${ext}`);
    };

    public deleteFileIfExists = async (path: string) => {
        if (await this.isExists(path)) {
            promises.unlink(path);
        }
    };
};
