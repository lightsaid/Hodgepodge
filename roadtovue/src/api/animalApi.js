import api from './api'

const URLS = {
  fetchDogUrl: 'breeds/image/random',
  fetchKittyUrl: 'images/search?format=json',
  fetchFoxUrl: 'shibes?count=1',
}

export const fetchDog = () => {
  return api.get(URLS.fetchDogUrl, {
    baseURL: 'https://dog.ceo/api/',
  })
}

export const fetchKitty = () => {
  return api.get(URLS.fetchKittyUrl, {
    baseURL: 'https://api.thecatapi.com/v1/',
  })
}
