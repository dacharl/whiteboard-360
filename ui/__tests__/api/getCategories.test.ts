import { getCategories } from '@api/getCategories';

describe('API - GetCategories', () => {
  it('should get the sorted categories', async () => {
    // given
    const expectedCategories = ['New Faces', 'Helps', 'Interestings', 'Events', 'Shoutouts'];

    // when
    const result = getCategories();

    // then
    expect(result).toEqual(expectedCategories);
  });
});
