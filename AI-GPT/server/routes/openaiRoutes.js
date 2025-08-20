const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

// Protect all OpenAI routes
router.use(protect);

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

module.exports = router;
