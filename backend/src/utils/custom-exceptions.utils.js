export class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class PageNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};