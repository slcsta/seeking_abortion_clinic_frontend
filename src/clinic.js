// start out here by building a class for a clinic
// we can use destructuring here to pass through the available attributes
class Clinic {
    constructor(name, address, city, zip_code, state_id, phone_number, state){
        this.name = name 
        this.address = address 
        this.city = city
        this.zip_code = zip_code
        this.state_id = state_id
        this.phone_number = phone_number
        this.state = state 
    }

}