import { mapItemsToCategories } from '@lib/itemMapper';

describe('ItemMapper', () => {
  it('should group items by category', () => {
    // given
    const items = [
      {
        itemId: '1',
        standupId: '1',
        category: 'Category A',
        title: 'Title 1',
        author: 'Author 1',
        date: '2020-01-01',
      },
      {
        itemId: '2',
        standupId: '1',
        category: 'Category B',
        title: 'Title 1',
        author: 'Author 1',
        date: '2020-01-01',
      },
      {
        itemId: '3',
        standupId: '1',
        category: 'Category B',
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-01-01',
      },
    ];

    // when
    const result = mapItemsToCategories(items);

    // then
    expect(result).toEqual(
      new Map([
        [
          'Category A',
          [
            {
              itemId: '1',
              standupId: '1',
              category: 'Category A',
              title: 'Title 1',
              author: 'Author 1',
              date: '2020-01-01',
            },
          ],
        ],
        [
          'Category B',
          [
            {
              itemId: '2',
              standupId: '1',
              category: 'Category B',
              title: 'Title 1',
              author: 'Author 1',
              date: '2020-01-01',
            },
            {
              itemId: '3',
              standupId: '1',
              category: 'Category B',
              title: 'Title 2',
              author: 'Author 2',
              date: '2020-01-01',
            },
          ],
        ],
      ])
    );
  });
});
