import { render, screen } from '@testing-library/react';
import CreateItem from '.';

test('renders the fields for item title, author, and description', () => {
  // given

  // when
  render(<CreateItem />);

  // then
  const instructionElement = screen.getByText('Create a new post!');
  expect(instructionElement).toBeInTheDocument();
});
