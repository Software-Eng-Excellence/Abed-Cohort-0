import logger from "./util/logger";
import { readCsvFile } from "./util/parser";
import { parseJSON } from "./util/jsonParser";
import { parseXML } from "./util/xmlParser";
import fs from "fs";
import path from "path";

async function main() {
    try {
        // Parse CSV files
        const csvFiles = ["src/data/cake orders.csv", "src/data/clothing orders.csv"];
        for (const filePath of csvFiles) {
            if (fs.existsSync(filePath)) {
                logger.info(`Parsing CSV file: ${filePath}`);
                const data = await readCsvFile(filePath);
                data.forEach((row) => {
                    logger.info(row);
                });
            } else {
                logger.error(`CSV file not found: ${filePath}`);
            }
        }

        // Parse JSON and XML files
        const otherFiles = [
            "src/data/book orders.json",
            "src/data/pet orders.json",
            "src/data/furniture orders.xml",
            "src/data/toy orders.xml",
        ];

        for (const filePath of otherFiles) {
            if (!fs.existsSync(filePath)) {
                logger.error(`File not found: ${filePath}`);
                continue;
            }

            const ext = path.extname(filePath).toLowerCase();
            switch (ext) {
                case ".json":
                    logger.info(`Parsing JSON file: ${filePath}`);
                    console.log(parseJSON(filePath)); // Output parsed data
                    break;

                case ".xml":
                    logger.info(`Parsing XML file: ${filePath}`);
                    console.log(await parseXML(filePath)); // Output parsed data
                    break;

                default:
                    logger.warn(`Unsupported file format: ${filePath}`);
                    break;
            }
        }
    } catch (error) {
        logger.error(`An error occurred in main(): ${error}`);
    }
}

main();
