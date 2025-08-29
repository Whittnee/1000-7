export const checkResponse = async <T>(res: Response): Promise<T> => {
  const response = await res.json();
  
  if(!res.ok) {
    throw new Error(response?.message || 'Ошибка запроса')
  }
  return response
}