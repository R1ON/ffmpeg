require('dotenv').config({ path: process.cwd() });
import { Env, Parser } from './prompt.types';

export class PromptService {
    public input = <T extends Parser>(
        key: keyof Env,
        parser: T,
    ): ReturnType<T> => {
        if (key in process.env) {
            return parser(process.env[key]) as ReturnType<T>;
        }
        
        throw new Error(`PromptService.input -> '${key}' not found `);
    };
}
