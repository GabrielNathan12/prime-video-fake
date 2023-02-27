const API_KEY = '0b9f2c3166447c18ce4b4a7d7af30d4c';
const API_BASE = 'https://api.themoviedb.org/3';
/*
- originaus do prime-video
- recomendados
- em alta (trendid)
- em alta (top rated)
- acao
- comedia
- terror
- romance
- documentario

*/ 
const basicFetch = async(endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList : async() =>{
        return [{
            slug: 'originals',
            title: 'Originais do Prime Video',
            items: await basicFetch(`/discover/tv?with_network=343611&language=pt-BR&api_key=${API_KEY}`)
               
        },{
            slug:'treending',
            title: 'Recomendados para Voce',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },{
           slug:'toprated',
           title: 'Em alta',
           items:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'action',
            title: 'Acao',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug:'comedy',
            title: 'Comedia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) 
         },
         {
            slug:'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug:'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug:'documentary',
            title: 'Documentario',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
         }
        ]
    },
    getMovieInfo: async(movieId, type) =>{
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}