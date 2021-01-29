import React from 'react';
import { render } from '@testing-library/react';
import ItemForm from '@components/ItemForm';

describe('ItemForm', () => {
  test('should contain a header and description', () => {
    // given

    // when
    const element = render(<ItemForm />);

    // then
    expect(element.getByText('New Item')).toBeTruthy();
    expect(element.getByText('Talk about something here.')).toBeTruthy();
  });

  test('should contain inputs for the item title, author, date and description', () => {
    // given

    // when
    const element = render(<ItemForm />);

    // then
    expect(element.getByLabelText('Author')).toBeTruthy();
    expect(element.getByLabelText('Title')).toBeTruthy();
    expect(element.getByLabelText('Date')).toBeTruthy();
    expect(element.getByLabelText('Description')).toBeTruthy();
  });
});
