
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

export const options = {
    method: 'GET',
    params: {
        part: 'snippet',
        maxResults: process.env.REACT_API_MAX_RESULTS,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};