"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 4300;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/", (request, response) => {
    response.send("Hello world");
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}!`);
});
//# sourceMappingURL=index.js.map