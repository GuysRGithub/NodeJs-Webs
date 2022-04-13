const requestNotFound = (req, res, next) => {
    const error = new Error(`Not Found REQUEST: ${req.originalUrl}`)
    res.status(404)
    next(error)
}
// eslint-disable-next-line no-unused-vars
const handleError = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        messasge: error.messasge,
        stack: error.stack
    })
}

module.exports = {
    requestNotFound,
    handleError
}