import { PromptService } from './core/prompt/prompt.service';

class App {
    run = () => {
        const prompt = new PromptService();

        const res = prompt.input('WIDTH', Number);
        console.log('test', res);
    };
}

const app = new App();
app.run();