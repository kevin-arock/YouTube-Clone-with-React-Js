const API = process.env.REACT_APP_API_KEY;
export const VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API}`;
export const SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?key=${API}`;

