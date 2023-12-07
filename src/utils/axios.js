
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

export const options = {
    method: 'GET',
    params: {
        part: 'snippet',
        maxResults: '5',
    },
    headers: {
        'X-RapidAPI-Key': 'c3fd702181msh7f7ad1deb924020p181aa1jsn9311ef803734',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};