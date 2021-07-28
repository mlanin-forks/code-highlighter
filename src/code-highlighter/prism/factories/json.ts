import 'prismjs/components/prism-json';
import { DOM } from "../../config";

export class JSONTokenFactory implements TokenFactory {
    create(name: String, className: string): Node | false | null {
        switch (name) {
            case 'string':
            case 'boolean':
            case 'number':
            case 'function':
            case 'comment':
            case 'keyword':
            case 'property':
                return DOM.createElement('span', className);
            case 'operator':
            case 'punctuation':
                return false;
            default:
                return null;
        }
    }
}

export default new JSONTokenFactory();