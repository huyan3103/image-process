import axios from "axios";
import { readdirSync, unlinkSync } from "fs";

describe("File exits", () => {
    it("Make sure file not exits", async () => {
        const fileName = "fjord";
        await unlinkSync(`./assets/ImagesResize/${fileName}-500-500.jpg`);
        const files = await readdirSync("./assets/ImagesResize");
        const names = files.map((file) => file.split(".")[0]);
        expect(names.includes(`${fileName}-500-500`)).toBe(false);
    });
    it("Create new file after call api", async () => {
        const fileName = "fjord";
        axios
            .get(
                "http://localhost:3000/api/images?fileName=fjord&width=500&height=500",
            )
            .finally(async () => {
                const files = await readdirSync("./assets/ImagesResize");
                const names = files.map((file) => file.split(".")[0]);
                expect(names.includes(`${fileName}-500-500`)).toBe(true);
            });
    });
});
