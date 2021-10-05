
class ClinicApi {
    // making my API objects here - just need 1 object and one object will make all of our api requests
    // pass in 
    constructor(port){
        this.port = port
    }
    // make an instance function - need 1 instance to call these methods on it
    getClinics(){
        fetch(this.port + `/clinics`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}