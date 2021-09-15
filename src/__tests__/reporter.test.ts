import reporter from '../index';

test('my reporter', async () => {
  const response = await reporter('abc', 'Sandbox');
  expect(response).toBeUndefined();
});
