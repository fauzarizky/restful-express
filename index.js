require("dotenv").config();
const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

const commentsRouter = require("./routes/comments");
const commentController = require("./controller/comments")

app.use("/comments", commentsRouter);
app.get("/", commentController.renderIndex);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
