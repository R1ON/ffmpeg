import { StreamHandler } from "../../core/handlers/stream.handler";
import { StreamLogger } from "../../core/handlers/stream-logger.type";

export class ConsoleLogger implements StreamLogger {
    private static logger: ConsoleLogger;
    public static getInstance = () => {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }

        return ConsoleLogger.logger;
    };

    log = (...args: any[]) => {
        console.log(...args);
    };

    error = (...args: any[]) => {
        console.error(...args); 
    };

    end = () => {
        console.log('Готово!!!');
    };
};
