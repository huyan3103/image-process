import express from "express";
import routes from "./Routes/api";

const app = express();

const port = process.env.PORT || 3000;
app.use("/api", routes);

export const myFunc = (num: number): number => {
    return num * num;
};

/**
 * App routes
 */

export default app;

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
