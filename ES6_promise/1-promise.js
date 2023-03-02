export default function getFullResponseFromAPI(success) {
  const mypromise = new promise((resolve, reject) => {
    if (success) {
      resolve(
	{ status: 200, body: 'success' },
      );
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return mypromise;
}
