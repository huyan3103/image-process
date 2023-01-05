import { Request, Response, Router } from "express";
import imageRoute from "../images/images";

const routes = Router();
routes.get("/", (req: Request, res: Response) => {
    res.send("/api");
});
// App routes
routes.use("/images", imageRoute);

export default routes;
