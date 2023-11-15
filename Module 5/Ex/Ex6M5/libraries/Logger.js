class Logger {
    constructor(id) {
        this.id = id 
    }

    log = (value) => {
        console.log(`[Calculator :${this.id}]:${value}`)
    }
}

module.exports = Logger