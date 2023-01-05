import axios from "axios";

describe("Test get Images function", () => {
    it("Success to get image", (done) => {
        axios
            .get(
                "http://localhost:3000/api/images?fileName=santamonica&width=200&height=500",
            )
            .then((response) => {
                expect(response.status).toBe(200);
            });
        done();
    });
});
