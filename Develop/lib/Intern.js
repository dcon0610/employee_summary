// TODONE: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const employee = require("./Employee");


class Intern extends employee {
    constructor( name, id, email, school) {
        super(name, id, email)
        this.role="Intern"
        this.school= school
    }

get School () {
return this.school
}

get Role (){
return this.role
}


}

module.exports = Intern