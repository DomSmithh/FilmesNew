import axios from "axios";
/*
Base da URL da API
https://api.themoviedb.org/3

/movie/now_playing?api_key=8090e5ce894011bc532fd0e49a9fa889
*/

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;