import logger from "./util/logger";
import { readCsvFile } from "./util/parser";




async function main() {
    const data = await readCsvFile('src/data/cake orders.csv');
    //for each data row, log the row
    data.forEach((row) => {
        logger.info(row);
    });
}


main();