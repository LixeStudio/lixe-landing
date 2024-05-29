const url = 'https://my-json-server.typicode.com/LixeStudio/lixe-landing';

export const sendForm = async (data) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(url, config);
    if (response.ok) {
      console.log('Sent');
      return response;
    } else {
      console.log('Not sent');
    }
  } catch (error) {
    console.log(error);
  }
};
