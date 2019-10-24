"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const request_promise_1 = require("request-promise");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 4300;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({
    origin: `*`,
    methods: `GET, POST`,
    allowedHeaders: `Origin`,
    optionsSuccessStatus: 204,
    preflightContinue: false,
}));
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
    let sageResp = await request_promise_1.post("https://ciifrpsyw5.execute-api.us-east-2.amazonaws.com/final/heartlifexgboostapi", options);
    response.send(sageResp);
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}!`);
});
//# sourceMappingURL=index.js.map