const express = require("express");
const router = express.Router();
const horsesController = require("../controllers/horses-controller");

// GET /horses
router.get("/horses", horsesController.getAllHorses);

// GET /horses/:id
router.get("/horses/:id", horsesController.getHorseById);

// POST /horses
router.post("/horses", horsesController.createHorse);

// PATCH /horses/:id
router.patch("/horses/:id", horsesController.updateHorse);

// DELETE /horses/:id
router.delete("/horses/:id", horsesController.deleteHorse);

module.exports = router;
