import 'prismjs/components/prism-java';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-bash';

export const LANGUAGES = ['json', 'php', 'go', 'python', 'java', 'kotlin', 'swift', 'js', 'ts', 'http', 'bash'];
export const DEFAULT_LANGUAGE = 'json';
export const DEFAULT_THEME = 'idea';
export class DOM {
    public static createElement(tagName: string, className: string): HTMLElement {
        const result = document.createElement(tagName);
        result.className = className;
        return result;
    }
    public static create(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }
};
