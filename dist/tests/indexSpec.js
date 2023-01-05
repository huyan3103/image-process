"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
describe("Test get Images function", () => {
    it("Success to get image", (done) => {
        axios_1.default
            .get("http://localhost:3000/api/images?fileName=fjord&width=200&height=500")
            .then((response) => {
            expect(response.status).toBe(200);
        });
        done();
    });
    it("Fail with wrong params", () => __awaiter(void 0, void 0, void 0, function* () {
        axios_1.default
            .get("http://localhost:3000/api/images?fileName=fjord&width=&height=500")
            .then((response) => {
            expect(response.status).toBe(500);
        });
    }));
});
