const Patient = require('../models/patientModel');

exports.getAllPatients = (req, res) => {
  Patient.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createPatient = (req, res) => {
  Patient.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId });
  });
};

exports.updatePatient = (req, res) => {
  Patient.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(200);
  });
};

exports.deletePatient = (req, res) => {
  Patient.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(200);
  });
};