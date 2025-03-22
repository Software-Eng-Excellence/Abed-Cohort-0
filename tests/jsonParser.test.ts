import { parseJSON } from '../src/util/jsonParser';
import fs from 'fs';
import { describe, expect, jest, test } from '@jest/globals';

// Add type for mocked fs
jest.mock('fs');
const mockedFs = jest.mocked(fs);

describe('JSON Parser', () => {
    test('should parse valid JSON file', () => {
        const mockData = '{"key": "value"}';
        mockedFs.readFileSync.mockReturnValue(mockData);

        const result = parseJSON('mock.json');
        expect(result).toEqual(JSON.parse(mockData));
    });

    test('should handle invalid JSON file', () => {
        mockedFs.readFileSync.mockReturnValue('{invalid JSON}');
        const result = parseJSON('mock.json');
        expect(result).toBeNull();
    });
});
