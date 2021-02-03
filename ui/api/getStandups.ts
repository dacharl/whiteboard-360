import PathParam from '@models/next/PathParam';
import StandupDto from '@models/StandupDto';

export function getStandups(): StandupDto[] {
  const standups = [
    {
      id: 3,
      name: 'Atlanta',
    },
    {
      id: 1,
      name: 'Columbus',
    },
    {
      id: 2,
      name: 'Dallas',
    },
  ];

  // Sort posts by id
  return standups.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getStandup(id: string): StandupDto {
  const standups = getStandups();

  return standups.find((standup) => standup.id == parseInt(id, 10));
}

export function getStandupIds(): PathParam[] {
  const standups = getStandups();

  return standups.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });
}
