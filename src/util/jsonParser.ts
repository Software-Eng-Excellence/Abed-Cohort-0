import fs from 'fs';
import logger from './logger';

/**
 * Reads and parses a JSON file, and optionally writes the parsed data to another file.
 * @param filePath - The path to the JSON file to be parsed.
 * @param outputFilePath - The path where to write the parsed data (optional).
 * @returns The parsed JSON data, or null if an error occurred.
 */
export function parseJSON(filePath: string, outputFilePath?: string): any {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filePath, 'utf-8');
        logger.debug(`Successfully read JSON file: ${filePath}`);
        
        // Parse the JSON data
        const parsedData = JSON.parse(data);

        // Log the parsed data
        logger.debug(`Parsed data: ${JSON.stringify(parsedData, null, 2)}`);

        // If an output file path is provided, write the parsed data to the file
        if (outputFilePath) {
            // Log before writing
            logger.debug(`Attempting to write parsed data to: ${outputFilePath}`);
            
            // Write the parsed data to the output file
            fs.writeFileSync(outputFilePath, JSON.stringify(parsedData, null, 2), 'utf-8');
            
            // Log after writing
            logger.debug(`Successfully wrote parsed data to: ${outputFilePath}`);
        }

        return parsedData;
    } catch (error) {
        logger.error(`Error parsing JSON file (${filePath}): ${error}`);
        return null;
    }
}
