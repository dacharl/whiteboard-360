import { render, screen } from '@testing-library/react';
import Item from '.';

test('renders the item title and author', () => {
  // given
  const content = {
    title: 'An item title',
    author: 'Charles',
    description: 'A cool description',
  };

  // when
  render(<Item content={content} />);

  // then
  const titleElement = screen.getByText(
    content.title + ' (' + content.author + ')'
  );
  expect(titleElement).toBeInTheDocument();
});

test('renders the item title with no author', () => {
  // given
  const content = {
    title: 'An item title',
  };

  // when
  render(<Item content={content} />);

  // then
  const titleElement = screen.getByText(content.title);
  expect(titleElement).toBeInTheDocument();
});
