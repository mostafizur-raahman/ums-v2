import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
            console.log(`server listen on port ${config.port}`);
        });
    } catch (error) {
        console.log(`Database connection errorr...`, error);
    }
}

main();
