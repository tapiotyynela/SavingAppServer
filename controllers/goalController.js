const { getAllGoals, newGoal } = require('../services/goalService')

const getGoals = async (req, res, next) => {
    try {
        return getAllGoals(req, res, next)
    } catch (e) {
        throw e
    }
}

const createGoal = async (req, res, next) => {
    try {
        return newGoal(req, res, next)
    } catch (e) {
        throw e
    }
}

module.exports = {
    getGoals,
    createGoal
}