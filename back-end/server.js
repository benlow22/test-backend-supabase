const express = require("express");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

const workoutsModule = require("./routes/workouts");
const workoutsRouter = workoutsModule.router;
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/workouts", workoutsRouter);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening at http://localhost:${port}`);
});
