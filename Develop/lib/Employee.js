// TODONE: Write code to define and export the Employee class
class employee {
    constructor(name, id, email){
        this.name=name
        this.id=id
        this.email=email
        this.role="employee"
    }
    

    get Name() {
        return this.name

    }
    get ID() {
        return this.id

    }

    get Email() {
        return this.email

    }

    get Role() {
        return this.role

    }

}


module.exports = employee 

