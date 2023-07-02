class Person {
    constructor(name) {
       this.name = name;
    }
    sayMyName (){
        return `Hello, My names is ${this.name}!`;
    }
}

module.exports = {
    Person,
};