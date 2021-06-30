const { pool } = require('../db')

const getAllSavings = (req, res, next) => {
    pool.query('SELECT * FROM saving ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const newSaving = (req, res, next) => {
    const { amount, adinfo, goalid } = req.body
    pool.query(`INSERT INTO saving (amount, adinfo, created_at, goalid) values (${amount}, '${adinfo}', now(), ${goalid})`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
module.exports = {
    getAllSavings,
    newSaving
}