import ItemDto from '@models/ItemDto';

export function getItems(standupId: string): ItemDto[] {
  if (standupId !== '1') {
    return [];
  }

  return [
    {
      itemId: '1',
      standupId: '1',
      category: 'New Faces',
      title: 'Bob',
      author: 'Bill',
      date: '2020-01-10',
      description: 'Please welcome Bob!',
    },
    {
      itemId: '2',
      standupId: '1',
      category: 'Helps',
      title: 'Bob onboarding',
      author: 'Bill again',
      date: '2020-01-11',
      description: 'Please help onboard Bob!',
    },
    {
      itemId: '3',
      standupId: '1',
      category: 'Interestings',
      title: 'Bob is a builder',
      author: 'Bill once more',
      date: '2020-01-12',
      description: 'He can build it',
    },
    {
      itemId: '4',
      standupId: '1',
      category: 'Events',
      title: 'Bob happy hour',
      author: 'Bill once more with feeling',
      date: '2020-01-13',
      description: 'yep',
    },
    {
      itemId: '5',
      standupId: '1',
      category: 'Shoutouts',
      title: 'Bill',
      author: 'Bob',
      date: '2020-01-14',
      description: 'For trying so hard',
    },
  ];
}
