const { pool } = require('../db')

const getAllGoals = (req, res, next) => {
    pool.query('SELECT * FROM goal ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const newGoal = (req, res, next) => {
    const { name, adInfo, moneyGoal } = req.body
    pool.query(`INSERT INTO goal (name, adInfo, moneyGoal, created_at) values ('${name}', '${adInfo}', ${moneyGoal}, now())`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getAllGoals,
    newGoal
}