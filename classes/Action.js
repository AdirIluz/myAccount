export default class Action {
    constructor(type, description, amount) {
        this.id = Math.floor(Math.random() * 1000);
        this.type = type;
        this.description = description;
        this.amount = type == "expense" ? -amount : amount
    }
    get(propName) {
        return this[propName]
    }
    set(propName, value) {
        return this[propName] = value;
    }
};
