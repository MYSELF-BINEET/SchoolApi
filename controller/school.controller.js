const { addSchool, listSchools } = require('../models/school.model');

// Add a school
const addSchoolController = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validate input
    if (!name || !address || latitude === undefined || longitude === undefined) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof name !== 'string' || typeof address !== 'string' || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ message: 'Invalid data types' });
    }

    addSchool(name, address, latitude, longitude, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding school', error: err });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    });
};

// List schools
const listSchoolsController = (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate input
    if (!latitude || !longitude) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: 'Latitude and longitude should be numbers' });
    }

    listSchools(parseFloat(latitude), parseFloat(longitude), (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching schools', error: err });
        }
        res.status(200).json({ schools: result });
    });
};

module.exports = { addSchoolController, listSchoolsController };
