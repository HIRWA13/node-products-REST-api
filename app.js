const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./api/routes/productsRoutes')
const orderRoutes = require('./api/routes/ordersRoutes')

const app = express();
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.redirect('/products')
})

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)


app.use((req, res, next) => {
    const error = new Error('We can not find what you are looking for, try again letter')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if(error.status || 500) {
        res.json({
            status: error.status,
            message: error.message,
        })
    }
})


module.exports = app