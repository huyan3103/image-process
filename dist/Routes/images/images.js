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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get images with size
 * @route GET api/images
 * @params : fileName, width, height
 */
const outputPath = "/assets/ImagesResize";
const express_1 = require("express");
const handleFiles_1 = require("../../utils/handleFiles");
const imageRoute = (0, express_1.Router)();
imageRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, width, height } = req.query;
    const validateInputRequired = !fileName || !width || !height;
    if (validateInputRequired) {
        return res
            .status(500)
            .send("FileName, Width and Height is required");
    }
    const validateInputType = isNaN(Number(width)) || isNaN(Number(height));
    if (validateInputType) {
        return res.status(500).send("Wrong format input");
    }
    try {
        const file = yield (0, handleFiles_1.resize)(fileName, width, height);
        const resImagesPath = `${outputPath}/${fileName}-${width}-${height}.jpg`;
        file === null || file === void 0 ? void 0 : file.toFile(`.${resImagesPath}`).finally(() => {
            res.sendFile(process.cwd() + resImagesPath);
        });
    }
    catch (error) {
        res.send("Something error. Need to check");
    }
}));
exports.default = imageRoute;
