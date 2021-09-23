import PresentationItemCategory from '@components/PresentationItemCategory';
import { getDefaultNormalizer, render } from '@testing-library/react';
import React from 'react';

describe('PresentationItemCategory', () => {
  it('should display the presentation category title, items and exit button', () => {
    // given
    const title = 'Category';
    const items = [
      {
        itemId: '1',
        standupId: '1',
        category: 'Category A',
        title: 'Title 1',
        author: 'Author 1',
        date: '2020-10-10',
        description: 'Description 1',
      },
      {
        itemId: '2',
        standupId: '1',
        category: 'Category A',
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-10-11',
        description: 'Description 2',
      },
    ];

    // when
    const element = render(<PresentationItemCategory title={title} items={items} />);

    // then
    expect(element.getByText(title)).toBeTruthy();
    items.forEach((item) => {
      expect(element.getByText(item.title, { exact: false })).toBeTruthy();
      expect(element.getByText(item.date, { exact: false })).toBeTruthy();
      expect(element.getByText(`- ${item.author}`, { exact: false })).toBeTruthy();
      expect(element.getByText(item.description, { exact: false, normalizer: getDefaultNormalizer({ collapseWhitespace: true }) })).toBeTruthy();
    });
  });

  it('should display the presentation category title, and no items when none are passed in', () => {
    // given
    const title = 'Category';
    const items = null

    // when
    const element = render(<PresentationItemCategory title={title} items={items} />);

    // then
    expect(element.getByText(title)).toBeTruthy();
  });
});
