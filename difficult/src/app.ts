import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './out/console-logger/console-logger';

class App {
    run = () => {
        new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
    };
}

const app = new App();
app.run();