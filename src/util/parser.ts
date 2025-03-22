import { promises as fs } from 'fs';
import { parse as csvParse } from 'csv-parse/sync';
import { stringify as csvStringify } from 'csv-stringify';

/**
 * Reads a CSV file and returns its contents as a 2D array of strings
 * @param filePath - Path to the CSV file
 * @param includeHeader - Whether to include the header row in the output
 * @returns Promise<string[][]> - 2D array of strings representing the CSV content
 */
export async function readCsvFile(filePath: string, includeHeader: boolean = false): Promise<string[][]> {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const records = csvParse(fileContent, {
            trim: true,
            skip_empty_lines: true
        });
        if (!fileContent) return [];
        if (!includeHeader) records.shift();
        return fileContent.trim().split('\n').map((line: string) => line.split(','));
    } catch (error) {
        throw new Error(`Error reading CSV file: ${error}`);
    }
}

/**
 * Writes a 2D array of strings to a CSV file
 * @param filePath - Path where to save the CSV file
 * @param data - 2D array of strings to write to the CSV file
 * @returns Promise<void>
 */
export async function writeCsvFile(filePath: string, data: string[][]): Promise<void> {
    try {
        const csvContent = await new Promise<string>((resolve, reject) => {
            csvStringify(data, (err, output) => {
                if (err) reject(err);
                resolve(output);
            });
        });
        await fs.writeFile(filePath, csvContent, 'utf-8');
    } catch (error) {
        throw new Error(`Error writing CSV file: ${error}`);
    }
}