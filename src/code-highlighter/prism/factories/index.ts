import { default as clike } from './clike'
import { default as java } from './java'
import { default as javascript } from './javascript'
import { default as php } from './php'
import { default as go } from './go'
import { default as bash } from './bash'
import { default as python } from './python'
import { default as kotlin } from './kotlin'
import { default as swift } from './swift'
import { default as http } from './http'
import { default as json } from './json'

export const factories = new Map<String, TokenFactory>();
factories.set('clike', clike);
factories.set('java', java);
factories.set('js', javascript);
factories.set('ts', javascript);
factories.set('go', go);
factories.set('php', php);
factories.set('bash', bash);
factories.set('python', python);
factories.set('swift', swift);
factories.set('kotlin', kotlin);
factories.set('http', http);
factories.set('json', json);