const Stock = require('../models/stock')

module.exports.list = (req, res) => {
    Stock.find()
        .then(stock => {
            res.send(stock)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const stock = new Stock(body)
    stock.save()
        .then(stock => {
            res.send(stock)
        })
        .catch(err => {
            res.send(err)
        })
}