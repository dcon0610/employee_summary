const employee = require("./Employee");

class manager extends employee {


    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber=officeNumber
        this.role="Manager"
    }

    get OfficeNumber () {
        return this.officeNumber
    }

    get Role () {
        return this.role
    }
}


module.exports=manager




// TODONE: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
