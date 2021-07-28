import 'prismjs/components/prism-http';
import { DOM } from "../../config";

export class HTTPTokenFactory implements TokenFactory {
    create(name: String, className: string): Node | false | null {
        switch (name) {
            case 'string':
            case 'boolean':
            case 'number':
            case 'function':
            case 'comment':
            case 'keyword':
                return DOM.createElement('span', className);
            case 'punctuation':
                return false;
            default:
                return null;
        }
    }
}

export default new HTTPTokenFactory();