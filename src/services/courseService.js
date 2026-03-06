const API_URL = "http://localhost:3001/courses";

export const getCourses = async () => {
  const response = await fetch(API_URL);
  return response.json();
};