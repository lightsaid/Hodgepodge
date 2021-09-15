import api from './api'

export const fetchRandomQuote = (config = {}) => {
  return api.get('random', {
    baseURL: 'https://api.quotable.io/',
    ...config,
  })
}
