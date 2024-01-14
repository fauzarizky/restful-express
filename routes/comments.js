const express = require("express");
const router = express.Router();

const commentsController = require("../controller/comments");

// CRUD
router.post("/", commentsController.createComment);
router.patch("/:id", commentsController.updateComment)
router.delete("/:id", commentsController.deleteComment)

// Render Components
router.get("/create", commentsController.renderCreate);
router.get("/:id", commentsController.renderCommentById)
router.get("/:id/edit", commentsController.renderEditCommentById)

module.exports = router;
