const db = require('../models/db');

exports.getAllPatients = (req, res) => {
  db.query('SELECT * FROM Patients', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createPatient = (req, res) => {
  const { name, dob, phone } = req.body;
  db.query('INSERT INTO Patients (name, dob, phone) VALUES (?, ?, ?)', [name, dob, phone], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId });
  });
};

exports.updatePatient = (req, res) => {
  const { name, dob, phone } = req.body;
  db.query('UPDATE Patients SET name=?, dob=?, phone=? WHERE patient_id=?', [name, dob, phone, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};

exports.deletePatient = (req, res) => {
  db.query('DELETE FROM Patients WHERE patient_id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};