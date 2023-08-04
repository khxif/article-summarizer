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
          'X-RapidAPI-Key': '4265b4cc8dmshfceb8453c7c70eap113f64jsnf2c36fdc4cce',
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response
    } catch (error) {
        console.error(error);
    }
}