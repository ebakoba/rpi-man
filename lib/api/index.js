const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.send({
        successful: true,
        description: "This is an echo service for test purpose.",
        usage: "/api/test?num=1&str=abc",
        time: new Date().toString(),
        timestamp: new Date() * 1,
        query: req.query
    });
});

/**
 * Routers
 */
router.use("/sys", require("./sys"));
router.use("/service", require("./service"));

/**
 * Sockets
 */
require("./terminal");


module.exports = router;
