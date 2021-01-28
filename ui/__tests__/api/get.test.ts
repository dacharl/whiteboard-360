import get from '@api/get';

interface MockPayload {
  data: string;
}

describe('API - Get', () => {
  beforeEach(() => {
    fetchMock.doMock();
  });

  test('should get something', async () => {
    // given
    const mockPayload = { data: 'hi' };
    fetchMock.mockResponseOnce(JSON.stringify(mockPayload));

    // when
    const result = await get<MockPayload>('https://test-api.io/api/v1/info').then((res) => res);

    // then
    expect(result).toEqual(mockPayload);
  });
});
