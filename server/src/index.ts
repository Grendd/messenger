import express from "express";
import cors from "cors";
import config from "config";
import router from "./routes/root.js";

import mongoose from "mongoose";

const PORT = config.get("port") || 5000;

const app = express();
 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.get('/api', router);

async function startApp() {
	try {
		await mongoose.connect(config.get('mongoUrl'));
		app.listen(PORT, () => console.log("Server started on port: " + PORT));
	} catch (e) {
		console.log(e);
		process.exit(1);
	}
}
startApp();