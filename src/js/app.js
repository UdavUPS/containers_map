// TODO: write your code here
/* import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(key, err) {
        this.errors.set(key, err)
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        } else {
            return 'Unknown error';
        }
    }
}
