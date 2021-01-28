const getFetcher = async <T>(req: RequestInfo): Promise<T> => {
  const res = await fetch(req);
  return await res.json();
};

export default getFetcher;
