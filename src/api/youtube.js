import axios from 'axios'

const KEY = "AIzaSyDuhjDwQhlv7A6n_PgEotD5DUJ0mPFPbuI"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        maxResults: 5,
        key: KEY,
        part: 'snippet'
    }
})

