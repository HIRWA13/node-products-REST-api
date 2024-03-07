const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'handling GET request at /orders'
    })
})

router.post("/", (req, res) => {
  res.status(200).json({
    message: "handling POST request at /orders",
  });
});

router.get("/:orderId", (req, res) => {
  res.status(200).json({
    message: "handling GET request at /orders/id",
  });
});

module.exports = router;