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
        return join(`${path}/${name}.${ext}`);
    };

    public deleteFileIfExists = async (path: string) => {
        if (await this.isExists(path)) {
            promises.unlink(path);
        }
    };

    public getSourceFolder = () => {
        return join(process.cwd(), 'sources');
    };

    public getFilePathFromSourcesFolder = async (): Promise<string> => {
        const sourceFolder = this.getSourceFolder();

        const files = await promises.readdir(sourceFolder);

        const filteredFiles = files.filter((name) => (
            name !== 'README.md'
        ));

        const file = join(sourceFolder, filteredFiles[0]);
        
        if (!file) {
            console.error('В папке sources нет подходящего .mp4 файла');
            process.exit();
        }

        return file;
    }
};
