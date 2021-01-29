import React from 'react';
import { getDefaultNormalizer, render } from '@testing-library/react';
import ItemCategory from '@components/ItemCategory';

describe('ItemCategory', () => {
  test('should contain the category title', () => {
    // given
    const title = 'Category';
    const items = [
      {
        title: 'Title 1',
        author: 'Author 1',
        date: '2020-10-10',
        description: 'Description 1',
      },
      {
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-10-11',
        description: 'Description 2',
      },
    ];

    // when
    const element = render(<ItemCategory title={title} items={items} />);

    // then
    expect(element.getByText(title)).toBeTruthy();
    items.forEach((item) => {
      expect(element.getByText(item.title, { exact: false })).toBeTruthy();
      expect(element.getByText(item.date, { exact: false })).toBeTruthy();
      expect(element.getByText(`- ${item.author}`, { exact: false })).toBeTruthy();
      expect(element.getByText(item.description, { exact: false, normalizer: getDefaultNormalizer({ collapseWhitespace: true }) })).toBeTruthy();
    });
  });
});
