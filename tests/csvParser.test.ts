import { readCsvFile } from '../src/util/parser';
import fs from 'fs';
import { describe, expect, jest, test } from '@jest/globals';
import path from 'path';

// Mocking fs.promises.readFile and writeFile
jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn(),
        writeFile: jest.fn()
    }
}));

const mockedFs = fs.promises as jest.Mocked<typeof fs.promises>;

describe('CSV Parser', () => {
    test('should parse valid CSV file', async () => {
        // Define mock CSV data to be returned by fs.readFile
        const mockData = '2001,Cake,Chocolate,Vanilla,Medium,2,Buttercream,Vanilla,Flowers,Red,Happy Birthday,Round,None,Gluten-Free,Box,15,3\n2002,Cake,Vanilla,Chocolate,Large,3,Whipped Cream,Strawberry,Stars,Gold,Happy Anniversary,Heart,None,None,Wrap,20,2';
        
        // Mock fs.readFile to return the mock data
        mockedFs.readFile.mockResolvedValue(mockData);

        const result = await readCsvFile('mockCSV.csv', false);
        const expected = [
            ['2001', 'Cake', 'Chocolate', 'Vanilla', 'Medium', '2', 'Buttercream', 'Vanilla', 'Flowers', 'Red', 'Happy Birthday', 'Round', 'None', 'Gluten-Free', 'Box', '15', '3'],
            ['2002', 'Cake', 'Vanilla', 'Chocolate', 'Large', '3', 'Whipped Cream', 'Strawberry', 'Stars', 'Gold', 'Happy Anniversary', 'Heart', 'None', 'None', 'Wrap', '20', '2']
        ];
        expect(result).toEqual(expected);
    });

    test('should handle empty CSV file', async () => {
        const mockData = '';
        mockedFs.readFile.mockResolvedValue(mockData);

        const result = await readCsvFile('mockCSV.csv', false);
        expect(result).toEqual([]);
    });
});
