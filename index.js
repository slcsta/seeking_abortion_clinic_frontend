// create variables here
// base URL
const port = 'http://localhost:3000';
// make call object to make fetch requests on - and make instance of ClinicApi with argument of port
const clinicCall = new ClinicApi(port);

// taking clinicCall and calling getClinicss on it and then invoking it
clinicCall.getClinics()
