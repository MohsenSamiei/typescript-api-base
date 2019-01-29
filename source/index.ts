import dotenv from "dotenv";
import app from "./app";

dotenv.config();

try {
    const port = process.env.APP_PORT || 3000;
    app.listen(port, () => {
        console.log(`Application running on http://localhost:${port}`);
    });
} catch (error) {
    console.error("Application run has error:", error.message);
}