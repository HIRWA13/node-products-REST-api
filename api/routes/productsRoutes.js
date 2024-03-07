const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Handling GET request on /products..."
    })
})

router.post("/", (req, res) => {
  res.status(200).json({
    message: "Handling POST request on /products...",
  });
});

router.get("/:productId", (req, res) => {
  res.status(200).json({
    message: "Handling GET request on /products/id...",
  });
});


module.exports = router;