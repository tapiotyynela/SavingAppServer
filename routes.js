const express = require('express')
const router = express.Router()
const { getSavings, createSaving } = require('./controllers/savingController')
const { getGoals, createGoal } = require('./controllers/goalController')


router.get('/allSavings', getSavings)
router.post('/newSaving', createSaving)
router.get('/allGoals', getGoals)
router.post('/newGoal', createGoal)


module.exports = router