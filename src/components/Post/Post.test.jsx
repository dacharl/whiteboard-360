import { render, screen } from '@testing-library/react';
import Post from '.';

test('renders the item title and author', () => {
  // given
  const items = [
    {
      title: 'An item title',
      author: 'Charles',
      description: 'A cool description',
    },
    {
      title: 'Another item title',
      author: 'Charles',
      description: 'Another cool description',
    },
  ];

  // when
  render(<Post items={items} />);

  // then
  items.forEach((item) => {
    const titleElement = screen.getByText(
      item.title + ' (' + item.author + ')'
    );
    expect(titleElement).toBeInTheDocument();
  });
});
