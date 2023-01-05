import sharp, { Sharp } from "sharp";

export const resize = async (
    fileName: string,
    width: string,
    height: string,
): Promise<Sharp | undefined> => {
    const filePath = `./assets/images/${fileName}.jpg`;
    try {
        const res = await sharp(filePath).resize(
            parseInt(width),
            parseInt(height),
        );
        return res;
    } catch (e) {
        console.error(e);
    }
};
