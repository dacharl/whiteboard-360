import ItemForm from '@components/ItemForm';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ItemForm', () => {
  it('should contain a header and description', () => {
    // given
    const category = 'Category';

    // when
    const element = render(<ItemForm category={category} open={true} handleCancel={null} handleSubmit={null} />);

    // then
    expect(element.getByText(`New Item for ${category}`)).toBeTruthy();
    expect(element.getByText('Talk about something here.')).toBeTruthy();
  });

  it('should contain inputs for the item title, author, date and description', () => {
    // given

    // when
    const element = render(<ItemForm category={null} open={true} handleCancel={null} handleSubmit={null} />);

    // then
    expect(element.getByLabelText('Author')).toBeTruthy();
    expect(element.getByLabelText('Title')).toBeTruthy();
    expect(element.getByLabelText('Date')).toBeTruthy();
    expect(element.getByLabelText('Description')).toBeTruthy();
  });

  it('should contain PREFILLED inputs for the item title, author, date and description when an incoming item is passed in', () => {
    // given
    const incomingItem = {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-10-10',
      description: 'Description 1',
    };

    // when
    const element = render(<ItemForm category={null} open={true} handleCancel={null} handleSubmit={null} incomingItem={incomingItem} />);

    // then
    expect(element.getByDisplayValue(incomingItem.author)).toBeTruthy();
    expect(element.getByDisplayValue(incomingItem.title)).toBeTruthy();
    expect(element.getByDisplayValue(incomingItem.date)).toBeTruthy();
    expect(element.getByDisplayValue(incomingItem.description)).toBeTruthy();
  });

  it('should use the handleCancel callback when the cancel button is clicked', () => {
    // given
    const mockHandleCancel = jest.fn();
    const element = render(<ItemForm category={null} open={true} handleCancel={mockHandleCancel} handleSubmit={null} />);

    // when
    userEvent.click(element.getByRole('button', { name: 'Cancel' }));

    // then
    expect(mockHandleCancel).toHaveBeenCalledTimes(1);
  });

  it('should use the handleSubmit callback with the submitted item when the submit button is clicked', () => {
    // given
    const mockHandleSubmit = jest.fn();
    const element = render(<ItemForm category={null} open={true} handleCancel={null} handleSubmit={mockHandleSubmit} />);

    // when
    userEvent.type(element.getByLabelText('Title'), 'test title');
    userEvent.type(element.getByLabelText('Author'), 'some author');
    userEvent.click(element.getByRole('button', { name: 'Submit' }));

    // then
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith({
      itemId: '',
      standupId: '',
      category: '',
      title: 'test title',
      author: 'some author',
      date: '',
      description: '',
    });
  });

  it('should call the handleSubmit callback with the incoming item and submitted item when the submit button is clicked and an incoming item is passed in', () => {
    // given
    const mockHandleSubmit = jest.fn();
    const incomingItem = {
      itemId: '1',
      standupId: '1',
      category: 'Category 1',
      title: 'Title 1',
      author: 'Author 1',
      date: '2020-10-10',
      description: 'Description 1',
    };
    const element = render(<ItemForm category={null} open={true} handleCancel={null} handleSubmit={mockHandleSubmit} incomingItem={incomingItem} />);

    // when
    userEvent.type(element.getByLabelText('Title'), ' edited');
    userEvent.type(element.getByLabelText('Author'), ' edited');
    userEvent.click(element.getByRole('button', { name: 'Submit' }));

    // then
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith(
      {
        ...incomingItem,
        title: 'Title 1 edited',
        author: 'Author 1 edited',
      },
      incomingItem
    );
  });
});
