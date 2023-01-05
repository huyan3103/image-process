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
exports.getImage = void 0;
/**
 * Get images with size
 * @route GET api/images
 * @params : fileName, width, height
 */
const inputPath = '/assets/Images';
const outputPath = '/assets/ImagesResize';
const sharp_1 = __importDefault(require("sharp"));
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, width, height } = req.query;
    if (!fileName || !width || !height) {
        res.status(500).json({ messages: 'error' });
    }
    yield (0, sharp_1.default)(`.${inputPath}/${fileName}.jpg`).resize(parseInt(width), parseInt(height)).toFile(`.${outputPath}/${fileName}.jpg`);
    res.status(200).sendFile(process.cwd() + `${outputPath}/${fileName}.jpg`);
});
exports.getImage = getImage;
