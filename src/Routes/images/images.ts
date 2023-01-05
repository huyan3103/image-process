/**
 * Get images with size
 * @route GET api/images
 * @params : fileName, width, height
 */
const outputPath = "/assets/ImagesResize";
import { Request, Response, Router } from "express";
import { resize } from "../../utils/handleFiles";
const imageRoute = Router();
export interface imagesReq {
    filename: string;
    width: string;
    height: string;
}
imageRoute.get(
    "/",
    async (req: Request, res: Response): Promise<Response | undefined> => {
        const { filename, width, height } = req.query as unknown as imagesReq;
        const validateInputRequired = !filename || !width || !height;
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
            const file = await resize(filename, width, height);
            const resImagesPath = `${outputPath}/${filename}-${width}-${height}.jpg`;
            file?.toFile(`.${resImagesPath}`).finally(() => {
                res.sendFile(process.cwd() + resImagesPath);
            });
        } catch (error) {
            res.send("Something error. Need to check");
        }
    },
);

export default imageRoute;
