
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

export const options = {
    method: 'GET',
    params: {
        part: 'snippet',
        maxResults: '5',
    },
    headers: {
        'X-RapidAPI-Key': '29ca1379dbmshb2445b4b448df58p1b8eeejsnef8ce7772788',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};