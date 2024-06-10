import { describe, expect, it } from 'vitest';
import { calculateRenderConfigs } from './utils';
import type { Comic } from '@/data/types';

describe('calculateRenderConfigs', () => {
  it('should return the correct configs', () => {
    const input = {
      latestComicData: {
        num: 10,
      } as Comic,
      currentPage: 1,
      pageSize: 3,
    };

    const expected = {
      totalComics: 10,
      comicsToRender: [10, 9, 8],
    };

    expect(calculateRenderConfigs(input)).toEqual(expected);
  });

  it('should return the correct configs when currentPage is 2', () => {
    const input = {
      latestComicData: {
        num: 10,
      } as Comic,
      currentPage: 2,
      pageSize: 3,
    };

    const expected = {
      totalComics: 10,
      comicsToRender: [7, 6, 5],
    };

    expect(calculateRenderConfigs(input)).toEqual(expected);
  });
});
