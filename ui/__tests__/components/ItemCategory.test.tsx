import { getDefaultNormalizer, render } from '@testing-library/react';
import ItemCategory from '@components/ItemCategory';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('ItemCategory', () => {
  it('should contain the category title and expected items', () => {
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

  it('should have an add item button', () => {
    // given
    const title = 'Category';
    const items = [];

    // when
    const element = render(<ItemCategory title={title} items={items} />);

    // then
    expect(element.getByRole('button', { name: 'add item' })).toBeTruthy();
  });

  it('should open the add item dialog when the add item button is clicked', () => {
    // given
    const title = 'Category';
    const items = [];
    const element = render(<ItemCategory title={title} items={items} />);
    const addItemButton = element.getByRole('button', { name: 'add item' });

    // when
    userEvent.click(addItemButton);

    // then
    expect(element.getByText(`New Item for ${title}`)).toBeTruthy();
  });

  it('should add a new item to be displayed when a new item is added', () => {
    const title = 'Category';
    const items = [];
    const element = render(<ItemCategory title={title} items={items} />);
    const addItemButton = element.getByRole('button', { name: 'add item' });

    // when
    userEvent.click(addItemButton);
    userEvent.type(element.getByLabelText('Title'), 'test title');
    userEvent.type(element.getByLabelText('Author'), 'some author');
    userEvent.click(element.getByRole('button', { name: 'Submit' }));

    // then
    expect(element.getByText('test title', { exact: false })).toBeTruthy();
  });
});
