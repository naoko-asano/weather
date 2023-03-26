const API_BASE_URL = "https://api.open-meteo.com/v1/forecast";
const params = (latitude: string, longitude: string) => {
  return `?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
};

export const createApiUrl = (latitude: string, longitude: string) =>
  `${API_BASE_URL}${params(latitude, longitude)}`;
