const express = require("express");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening at http://localhost:${port}`);
});
