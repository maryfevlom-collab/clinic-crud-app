const db = require('./db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM Patients', callback);
};

exports.create = (data, callback) => {
  const { name, dob, phone } = data;
  db.query('INSERT INTO Patients (name, dob, phone) VALUES (?, ?, ?)', [name, dob, phone], callback);
};

exports.update = (id, data, callback) => {
  const { name, dob, phone } = data;
  db.query('UPDATE Patients SET name=?, dob=?, phone=? WHERE patient_id=?', [name, dob, phone, id], callback);
};

exports.delete = (id, callback) => {
  db.query('DELETE FROM Patients WHERE patient_id=?', [id], callback);
};