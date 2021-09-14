import reporter from '../index';

test('my reporter', async () => {
  const response = await reporter();
  expect(response).toBeTruthy();
});
