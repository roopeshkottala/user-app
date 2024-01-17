export async function getInfo() {
  return await fetch(`/api/`, {
    method: 'GET',
    headers: {
      Authorization: 'Basic authHeader',
    },
  })
    .then(async (response) => {
      console.info('oin f', response);
      // success block
    })
    .catch(async (error) => {
      console.info('oin f', error);
      // failure block
    });
}
