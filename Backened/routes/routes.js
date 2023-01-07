const express = require("express");
const authControllers = require("../controllers/authControllers");
const transportControllers = require("../controllers/transportControllers");
const middlewares = require("../middlewares");
const router = express.Router();

router.get("/sample", (req, res) => {
  res.send("API hit....!");
});

router.get("/transports", transportControllers.get);
router.post("/transport", middlewares.authMiddleware,transportControllers.post);
router.delete("/transport/:id",middlewares.authMiddleware,transportControllers.delete);
router.put("/transport",middlewares.authMiddleware,transportControllers.update);
router.post("/signup", authControllers.signUp);
router.post("/login", authControllers.login)

module.exports = router;
