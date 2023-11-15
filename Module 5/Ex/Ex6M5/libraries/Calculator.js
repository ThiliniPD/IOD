const Logger = require("./logger")

class Calculator {
    constructor() {
        //this.id = Date.now()
        let id = Math.floor(Math.random() * 10000)
        this.logger = new Logger(id)
    }

    add(num1, num2) {
        const value = num1 + num2
        this.logger.log(value)
        return value;
    }

    sub(num1, num2) {
        const value = num1 - num2
        this.logger.log(value)
        return value;
    }

    mul(num1, num2) {
        const value = num1 * num2
        this.logger.log(value)
        return value;
    }

    div(num1, num2) {
        const value = num1 / num2
        this.logger.log(value)
        return value;
    }
   }
   
module.exports = Calculator