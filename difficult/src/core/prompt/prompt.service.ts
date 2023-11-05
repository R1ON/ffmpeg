require('dotenv').config();
import { Env, Parser } from './prompt.types';

export class PromptService {
    public input = (key: keyof Env, parser: Parser) => {
        if (key in process.env) {
            return parser(process.env[key]);
        }
        
        throw new Error(`PromptService.input -> '${key}' not found `);
    };
}
