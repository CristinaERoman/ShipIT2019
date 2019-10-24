import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
    response.send("Hello world");
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}!`);
});
