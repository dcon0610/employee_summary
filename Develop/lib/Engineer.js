// TODONE: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const employee = require("./Employee");

class Engineer extends employee {


    constructor( name, id, email, github) {
        super(name, id, email)
        this.github=github
        this.role="Engineer"

    }

    get Github () {
        return this.github
    }

    get Role () {
        return this.role
    }
}

module.exports =Engineer



