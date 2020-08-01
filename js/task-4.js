class StringBuilder {
    constructor (str){
        this.__value = str;
    }     
    get value() {
        return this.__value;
    }
    append(str) {
        this.__value = this.__value + str
    }
    prepend(str) {
        this.__value = str + this.__value
    }
    pad(str) {
        this.__value = str + this.__value + str
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
