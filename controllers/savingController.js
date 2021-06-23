const { getAllSavings, newSaving } = require('../services/savingService')

const getSavings = async (req, res, next) => {
    try {
        return getAllSavings(req, res, next)
    } catch (e) {
        throw e
    }
}

const createSaving = async (req, res, next) => {
    try {
        return newSaving(req, res, next)
    } catch (e) {
        throw e
    }
}

module.exports = {
    getSavings,
    createSaving
}