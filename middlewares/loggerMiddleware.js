const loggerMiddleware = (req, res, next) => {
    console.log(` ${req.method} Request: ${req.url}`);
    next()
    
}

module.exports = loggerMiddleware;