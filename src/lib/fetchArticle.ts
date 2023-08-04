import axios from "axios";

export async function getArticle(url: string) {
    const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: url,
          length: '3'
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}