export const sendForm = async (data) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, config);
    const result = await response.json();
    console.log('Success:', result);
    return 'success';
  } catch (error) {
    console.error('Error:', error);
    return 'error';
  }
};
