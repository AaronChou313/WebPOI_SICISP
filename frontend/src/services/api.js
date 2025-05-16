import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getPoiByName = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/poi/search/name/${name}`)
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    return { code: 500, message: 'Service unavailable' }
  }
}

export const getPoiByProvince = async (province) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/poi/search/province/${province}`)
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    return { code: 500, message: 'Service unavailable' }
  }
}

export const getPoiByCoords = async (bounds) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/poi/search/coords?bounds=${JSON.stringify(bounds)}`)
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    return { code: 500, message: 'Service unavailable' }
  }
}

export const getPoiByRadius = async (center, radius) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/poi/search/radius?center=${JSON.stringify(center)}&radius=${radius}`)
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    return { code: 500, message: 'Service unavailable' }
  }
}