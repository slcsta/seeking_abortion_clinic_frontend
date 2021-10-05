
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
        .then(data => {
            for(const clinic of data["data"]){
                debugger
                let c = new Clinic(clinic)  // want to show this on the page
                // make some method to put it on my DOM
            } 
        })
        //add a catch in case things get rejected to send a msg. to a user
        .catch()
    }
}