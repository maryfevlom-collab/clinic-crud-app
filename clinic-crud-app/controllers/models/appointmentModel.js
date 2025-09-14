const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM Appointments', callback);
};

exports.create = (data, callback) => {
  const { patient_id, doctor_id, appointment_date, notes } = data;
  db.query(
    'INSERT INTO Appointments (patient_id, doctor_id, appointment_date, notes) VALUES (?, ?, ?, ?)',
    [patient_id, doctor_id, appointment_date, notes],
    callback
  );
};

exports.update = (id, data, callback) => {
  const { patient_id, doctor_id, appointment_date, notes } = data;
  db.query(
    'UPDATE Appointments SET patient_id=?, doctor_id=?, appointment_date=?, notes=? WHERE appointment_id=?',
    [patient_id, doctor_id, appointment_date, notes, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.query('DELETE FROM Appointments WHERE appointment_id=?', [id], callback);
};