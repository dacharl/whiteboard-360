import '@testing-library/jest-dom/extend-expect';
import { getDefaultNormalizer, render } from '@testing-library/react';
import Item from '@components/Item';
import React from 'react';

describe('Item', () => {
  test('should render a title, author, date and description', () => {
    // given
    const mockItemData = {
      title: 'A nifty post',
      author: 'Charles',
      date: '2021-01-01',
      description: 'Check it out at: https://news.site.com/20210101/nifty-article',
    };

    // when
    const { getByText } = render(<Item item={mockItemData} />);

    // then
    expect(getByText(mockItemData.title, { exact: false })).toBeTruthy();
    expect(getByText(`- ${mockItemData.author}`, { exact: false })).toBeTruthy();
    expect(getByText(mockItemData.date, { exact: false })).toBeTruthy();
    expect(getByText(mockItemData.description, { exact: false, normalizer: getDefaultNormalizer({ collapseWhitespace: true }) })).toBeTruthy();
  });

  test('should not render the author if the item is anonymous', () => {
    // given
    const mockItemData = {
      title: 'A nifty post',
      date: '2021-01-01',
      description: 'Check it out at: https://news.site.com/20210101/nifty-article',
    };

    // when
    const { getByText, queryByText } = render(<Item item={mockItemData} />);

    // then
    expect(getByText(mockItemData.title, { exact: false })).toBeTruthy();
    expect(queryByText('- ', { exact: false })).toBeFalsy();
    expect(getByText(mockItemData.date, { exact: false })).toBeTruthy();
    expect(getByText(mockItemData.description, { exact: false, normalizer: getDefaultNormalizer({ collapseWhitespace: true }) })).toBeTruthy();
  });
});
