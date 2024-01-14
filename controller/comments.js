const { v4: uuidv4 } = require("uuid");

let comments = [
  {
    id: uuidv4(),
    username: "Michael",
    text: `Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way`,
  },
  {
    id: uuidv4(),
    username: "Kelly",
    text: `I talk a lot, so I’ve learned to tune myself out`,
  },
  {
    id: uuidv4(),
    username: "Kevin",
    text: `I JUST WANT TO LIE ON THE BEACH AND EAT HOT DOGS.`,
  },
  {
    id: uuidv4(),
    username: "Dwight",
    text: `IDENTITY THEFT IS NOT A JOKE, JIM! MILLIONS OF FAMILIES SUFFER EVERY YEAR.`,
  },
  {
    id: uuidv4(),
    username: "Ryan",
    text: `I’M SUCH A PERFECTIONIST THAT I'D KINDA RATHER NOT DO IT AT ALL THAN DO A CRAPPY VERSION.`,
  },
  {
    id: uuidv4(),
    username: "Jim",
    text: `EVERYTHING I HAVE I OWE TO THIS JOB… THIS STUPID, WONDERFUL, BORING, AMAZING JOB.`,
  },
];

exports.renderIndex = async (req, res) => {
  res.render("index", { comments, url: req.protocol + "://" + req.headers.host });
};

exports.renderCreate = async (req, res) => {
  res.render("create", { url: req.protocol + "://" + req.headers.host });
};

exports.renderCommentById = async (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("show", { comment, url: req.protocol + "://" + req.headers.host });
};

exports.renderEditCommentById = async (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("edit", { comment, url: req.protocol + "://" + req.headers.host });
};

exports.createComment = async (req, res) => {
  const { username, text } = req.body;
  comments.push({ username, text, id: uuidv4() });
  res.redirect("/");
};

exports.updateComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const comment = comments.find((c) => c.id === id);
  comment.text = text;
  res.redirect("/");
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/");
};
