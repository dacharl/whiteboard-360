import { getDefaultNormalizer, render } from '@testing-library/react';
import { ListStandupItem } from '@components/ListStandupItem';
import userEvent from '@testing-library/user-event';

describe('ListStandupItem', () => {
  it('should display the items date, title, author, and description', () => {
    // given
    const title = 'Category';
    const currentItem = {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-10-10',
      description: 'Description 1',
    };

    // when
    const { getByText } = render(<ListStandupItem item={currentItem} title={title} setDisplayedItems={null} displayedItems={null} />);

    // then
    expect(getByText(currentItem.date, { exact: false })).toBeTruthy();
    expect(getByText(currentItem.title, { exact: false })).toBeTruthy();
    expect(getByText(`(${currentItem.author})`, { exact: false })).toBeTruthy();
    expect(getByText(currentItem.description, { exact: false, normalizer: getDefaultNormalizer({ collapseWhitespace: true }) })).toBeTruthy();
  });

  it('should open the edit modal when edit is clicked', () => {
    // given
    const title = 'Category';
    const currentItem = {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-10-10',
      description: 'Description 1',
    };

    // when
    const { getByLabelText } = render(<ListStandupItem item={currentItem} title={title} setDisplayedItems={null} displayedItems={null} />);
    userEvent.click(getByLabelText('edit item'));

    //then
    expect(getByLabelText('Author')).toBeTruthy();
    expect(getByLabelText('Title')).toBeTruthy();
    expect(getByLabelText('Date')).toBeTruthy();
    expect(getByLabelText('Description')).toBeTruthy();
  });

  it('should call mockSetDisplayedItems when delete icon is pressed', () => {
    // given
    const title = 'Category';
    const currentItem = {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-10-10',
      description: 'Description 1',
    };
    const items = [
      currentItem,
      {
        itemId: '2',
        standupId: '1',
        category: 'Category 1',
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-10-11',
        description: 'Description 2',
      },
    ];

    const mockSetDisplayedItems = jest.fn();

    // when
    const { getByLabelText } = render(<ListStandupItem item={currentItem} title={title} setDisplayedItems={mockSetDisplayedItems} displayedItems={items} />);
    userEvent.click(getByLabelText('delete item'));

    //then
    expect(mockSetDisplayedItems).toHaveBeenCalledWith([
      {
        itemId: '2',
        standupId: '1',
        category: 'Category 1',
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-10-11',
        description: 'Description 2',
      },
    ]);
  });

  it('should call mockSetDisplayedItems when edit icon is pressed and an edit is made and submitted', () => {
    // given
    const title = 'Category';
    const currentItem = {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-10-10',
      description: 'Description 1',
    };
    const items = [
      currentItem,
      {
        itemId: '2',
        standupId: '1',
        category: 'Category 1',
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-10-11',
        description: 'Description 2',
      },
    ];

    const mockSetDisplayedItems = jest.fn();

    // when
    const { getByLabelText, getByRole } = render(
      <ListStandupItem item={currentItem} title={title} setDisplayedItems={mockSetDisplayedItems} displayedItems={items} />
    );
    userEvent.click(getByLabelText('edit item'));
    userEvent.type(getByLabelText('Title'), ' edited');
    userEvent.click(getByRole('button', { name: 'Submit' }));

    //then
    expect(mockSetDisplayedItems).toHaveBeenCalledWith([
      { ...currentItem, title: 'Title 1 edited' },
      {
        itemId: '2',
        standupId: '1',
        category: 'Category 1',
        title: 'Title 2',
        author: 'Author 2',
        date: '2020-10-11',
        description: 'Description 2',
      },
    ]);
  });
});
