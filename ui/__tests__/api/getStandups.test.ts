import { getStandup, getStandupIds, getStandups } from '@api/getStandups';

describe('API - GetStandups', () => {
  describe('getStandups', () => {
    it('should get the sorted standups', async () => {
      // given
      const expectedSortedStandups = [
        {
          id: 1,
          name: 'Columbus',
        },
        {
          id: 2,
          name: 'Dallas',
        },
        {
          id: 3,
          name: 'Atlanta',
        },
      ];

      // when
      const result = getStandups();

      // then
      expect(result).toEqual(expectedSortedStandups);
    });
  });

  describe('getStandup', () => {
    it('should return the standup for a given id', () => {
      // given
      const standupId = '1';
      const expectedStandup = {
        id: 1,
        name: 'Columbus',
      };

      // when
      const result = getStandup(standupId);

      // then
      expect(result).toEqual(expectedStandup);
    });
  });

  describe('getStandupIds', () => {
    it('should return next.js compatible path params', () => {
      // given
      const expectedStandupPaths = [
        {
          params: {
            id: '1',
          },
        },
        {
          params: {
            id: '2',
          },
        },
        {
          params: {
            id: '3',
          },
        },
      ];

      // when
      const result = getStandupIds();

      // then
      expect(result).toEqual(expectedStandupPaths);
    });
  });
});
