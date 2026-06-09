const express = require('express');
const router = express.Router();
const icecreamController = require('../../../controllers/api/v1/icecream');


router.get("/", icecreamController.getAll);
router.get("/:id", icecreamController.getOne);
router.post("/", icecreamController.create);
router.put("/:id", icecreamController.update);
router.delete("/:id", icecreamController.remove);


module.exports = router;