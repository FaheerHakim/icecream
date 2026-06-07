const express = require('express');
const router = express.Router();
const icecreamController = require('../../../controllers/api/v1/icecream');


router.get("/", todosController.getAll);
router.get("/", todosController.getOne);
router.post("/", todosController.create);
router.put("/:id", todosController.update);
router.delete("/:id", todosController.remove);


module.exports = router;