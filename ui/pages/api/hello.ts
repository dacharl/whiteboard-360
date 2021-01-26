const hello = (req, res) => {
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default hello;
