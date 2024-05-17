const express = require("express");
const router = express.Router();
const dataController = require("../controller/controllerData");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/data", dataController.findAll);
router.post("/data", authMiddleware, dataController.create);
router.get("/data/:id", authMiddleware, dataController.findById);
router.put("/data/:id", authMiddleware, dataController.update);
router.delete("/data/:id", authMiddleware, dataController.delete);

module.exports = router;
