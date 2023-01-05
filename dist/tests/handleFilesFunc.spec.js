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
const fs_1 = require("fs");
describe("File exits", () => {
    let server;
    beforeAll(() => {
        server = require("../index");
    });
    afterAll(() => {
        server.close();
    });
    it("Make sure file not exits", () => __awaiter(void 0, void 0, void 0, function* () {
        const fileName = "fjord";
        yield (0, fs_1.unlinkSync)(`./assets/ImagesResize/${fileName}-500-500.jpg`);
        const files = yield (0, fs_1.readdirSync)("./assets/ImagesResize");
        const names = files.map((file) => file.split(".")[0]);
        console.log(names);
        expect(names.includes(`${fileName}-500-500`)).toBe(false);
    }));
    it("Create new file after call api", () => __awaiter(void 0, void 0, void 0, function* () {
        const fileName = "fjord";
        axios_1.default
            .get("http://localhost:3000/api/images?fileName=fjord&width=500&height=500")
            .finally(() => __awaiter(void 0, void 0, void 0, function* () {
            const files = yield (0, fs_1.readdirSync)("./assets/ImagesResize");
            const names = files.map((file) => file.split(".")[0]);
            expect(names.includes(`${fileName}-500-500`)).toBe(true);
        }));
    }));
});
