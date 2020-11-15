const jwt = require('jsonwebtoken');

module.exports = {
    Reader(req, res, next) {

        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = decode;
            next();
        } catch (e) {
            return res.status(401).json({ err: 'Não autorizado', reason: e });
        }
    },
    Writer(req, res, next) {

        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = decode;
            if(decode.level == 'writer'){
                next()
            }else{
                return res.status(401).json({ err: 'Não autorizado', reason: e });
            }
        } catch (e) {
            return res.status(401).json({ err: 'Não autorizado', reason: e });
        }
    },
}