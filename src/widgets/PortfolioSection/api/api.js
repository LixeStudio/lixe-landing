export const getProjects = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/portfolio`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
