import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./modules/routes";
import expressWinston from "express-winston";
import logger from "./logger/logger";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//logger
app.use(
    expressWinston.logger({
        winstonInstance: logger,
        meta: true, // Include metadata
        msg: "HTTP {{req.method}} {{req.url}}", // Custom log message
        requestWhitelist: ["body"], // Log the request body
    })
);
//routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "hello world" });
});

export default app;
