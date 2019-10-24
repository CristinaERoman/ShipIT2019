import express from "express";
import bodyParser from "body-parser";
import { post } from "request-promise";
import cors from "cors";

const app = express();
const port = 4300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cors({
        origin: `*`,
        methods: `GET, POST`,
        allowedHeaders: `Origin`,
        optionsSuccessStatus: 204,
        preflightContinue: false,
    }),
);

app.get("/", (request, response) => {
    response.send("Hello world");
});

app.get("/sagemakerCall/:string", async (request, response) => {
    let options = {
        body: {
            data: request.params.string.replace(/-/gi, ",").replace(/_/gi, "."),
        },
        json: true,
    };
    let sageResp = await post(
        "https://ciifrpsyw5.execute-api.us-east-2.amazonaws.com/final/heartlifexgboostapi",
        options,
    );
    response.send(sageResp);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}!`);
});
