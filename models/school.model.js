const db = require('../config/db');

// Add a school
const addSchool = (name, address, latitude, longitude, callback) => {
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], callback);
};

// List all schools sorted by proximity
const listSchools = (latitude, longitude, callback) => {
    const query = `
        SELECT *, (
            6371 * acos(
                cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) +
                sin(radians(?)) * sin(radians(latitude))
            )
        ) AS distance
        FROM schools
        ORDER BY distance ASC
    `;
    db.query(query, [latitude, longitude, latitude], callback);
};

module.exports = { addSchool, listSchools };
