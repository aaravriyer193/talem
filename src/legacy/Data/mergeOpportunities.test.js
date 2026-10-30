import { describe, expect, test } from 'bun:test';
import { appendUniqueOpportunities } from './mergeOpportunities.js';

const simons = { id: 'existing', name: 'Simmons Summer Research Program', link: 'https://stonybrook.edu/simons/' };

describe('October opportunity import duplicate rules', () => {
  test('does not add a renamed or misspelled existing program', () => {
    const incoming = { id: 'new', name: 'Simons Summer Research Program', duplicateNames: ['Simmons Summer Research Program'], link: 'https://www.stonybrook.edu/commcms/simons/' };
    expect(appendUniqueOpportunities([simons], [incoming])).toEqual([simons]);
  });

  test('does not add an existing destination with www or trailing slash differences', () => {
    expect(appendUniqueOpportunities([simons], [{ id: 'new', name: 'Simons Research', link: 'https://www.stonybrook.edu/simons' }])).toEqual([simons]);
  });

  test('deduplicates repeated opportunities within the uploaded additions', () => {
    const incoming = { id: 'new', name: 'New Program', link: 'https://example.edu/new' };
    expect(appendUniqueOpportunities([], [incoming, { ...incoming, id: 'repeat' }])).toEqual([incoming]);
  });

  test('keeps distinct programs at the same university', () => {
    const garcia = { id: 'garcia', name: 'Garcia Summer Scholar Research Program', link: 'https://stonybrook.edu/garcia/' };
    expect(appendUniqueOpportunities([simons], [garcia])).toEqual([simons, garcia]);
  });
});