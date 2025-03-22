import { parseXML } from '../src/util/xmlParser';
import fs from 'fs';
import { describe, expect, jest, test } from '@jest/globals';

jest.mock('fs');
const mockedFs = jest.mocked(fs);

describe('XML Parser', () => {
    test('should parse valid XML file', async () => {
        const mockXML = `
            <?xml version="1.0" encoding="UTF-8"?>
            <rows>
                <row>
                    <OrderID>3001</OrderID>
                    <Type>Table</Type>
                    <Material>Rattan</Material>
                    <Color>Blue</Color>
                    <Size>Extra Large</Size>
                    <Style>Modern</Style>
                    <Price>380</Price>
                    <Quantity>1</Quantity>
                    <AssemblyRequired>No</AssemblyRequired>
                    <Warranty>2 Years</Warranty>
                </row>
                <row>
                    <OrderID>3002</OrderID>
                    <Type>Chair</Type>
                    <Material>Wood</Material>
                    <Color>Brown</Color>
                    <Size>Medium</Size>
                    <Style>Rustic</Style>
                    <Price>120</Price>
                    <Quantity>4</Quantity>
                    <AssemblyRequired>Yes</AssemblyRequired>
                    <Warranty>1 Year</Warranty>
                </row>
            </rows>`;

        mockedFs.existsSync.mockReturnValue(true);
        mockedFs.readFileSync.mockReturnValue(mockXML);

        const result = await parseXML('mock.xml');
        expect(result).toBeTruthy();
        expect(result).toHaveProperty('rows.row');
    });

    test('should handle empty XML file', async () => {
        mockedFs.existsSync.mockReturnValue(true);
        mockedFs.readFileSync.mockReturnValue('');

        const result = await parseXML('empty.xml');
        expect(result).toBeNull();
    });
});