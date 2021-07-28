import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import { DOM } from "../../config";
import { JavascriptTokenFactory } from './javascript'

class PHPTokenFactory extends JavascriptTokenFactory {
    create(name: String, className: string): Node | false | null {
        let result = super.create(name, className);
        if (result !== null) {
            return result;
        }
        switch (name) {
            case 'property':
                return DOM.createElement('span', className);
            default:
                return null;
        }
    }
}

export default new PHPTokenFactory();