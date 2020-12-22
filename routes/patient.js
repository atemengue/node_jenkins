/** @format */

var PatientController = require('../controllers/patientController');
var upload = require('../config/multerConfig');

module.exports = (app) => {
  app.post(
    '/api/patient',
    upload.single('file'),
    PatientController.create_patient
  );

  app.post('/api/patient/message', PatientController.send_message);
  app.get('/api/patient/position', PatientController.get_status_patient);
  app.get('/api/patient', PatientController.read_patients);
  app.get('/api/patient/:idPatient', PatientController.read_patient);
  app.put('/api/patient/:idPatient', PatientController.update_patient);
  app.delete('/api/patient/:idPatient', PatientController.delete_patient);
};
