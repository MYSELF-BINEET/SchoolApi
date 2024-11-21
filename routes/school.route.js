const express = require('express');
const { addSchoolController, listSchoolsController } = require('../controller/school.controller');

const router = express.Router();

// Add School
router.post('/addSchool', addSchoolController);

// List Schools
router.get('/listSchools', listSchoolsController);

module.exports = router;
