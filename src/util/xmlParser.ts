import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import logger from './logger';

/**
 * Reads and parses an XML file, and optionally writes the parsed data to another file.
 * @param filePath - The path to the XML file to be parsed.
 * @param outputFilePath - The path where to write the parsed data (optional).
 * @returns The parsed XML data, or null if an error occurred.
 */
export async function parseXML(filePath: string, outputFilePath?: string): Promise<any> {
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            logger.error(`File not found: ${filePath}`);
            return null;
        }

        // Read the file synchronously
        const data = fs.readFileSync(filePath, 'utf-8');
        
        // Check for empty file
        if (!data.trim()) {
            logger.error(`Empty XML file: ${filePath}`);
            return null;
        }

        logger.info(`Successfully read XML file: ${filePath}`);

        // Parse the XML data using xml2js with explicit options
        const result = await parseStringPromise(data, {
            explicitArray: true,
            trim: true
        });
        
        logger.info(`Successfully parsed XML file: ${filePath}`);
        logger.info(`Parsed data: ${JSON.stringify(result, null, 2)}`);

        if (outputFilePath) {
            fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), 'utf-8');
            logger.info(`Successfully wrote parsed data to: ${outputFilePath}`);
        }

        return result;
    } catch (error) {
        logger.error(`Error parsing XML file (${filePath}): ${error}`);
        return null;
    }
}