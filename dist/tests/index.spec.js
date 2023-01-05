"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
describe("Test get Images function", () => {
    it("Success to get image", (done) => {
        axios_1.default
            .get("http://localhost:3000/api/images?fileName=santamonica&width=200&height=500")
            .then((response) => {
            expect(response.status).toBe(200);
        });
        done();
    });
});
