import React from "react";

import './FeaturedMovie.css'

export default({item}) =>{

    // Pega a data de lancamento do filme/serie
    let firstDate = new Date(item.first_air_date);
    // Pega os generos de cada um
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    // faz um for para guardar os generos de um filme especifico 
    return (
        // coloca na tela o Nome do filme, sua descricao e seus generos
        <section className="featured" style={{
            backgroudSize: 'cover',
            backgroudPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`  
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <di className="featured--name">{item.original_name}</di>
                        <div className="featured--info">
                            <div className="featured--ponts">{item.vote_average} pontos </div>
                            <div className="featured--year">{firstDate.getFullYear()}</div>
                            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                    <div className="featured--description">{item.overview}</div>

                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="feature--watchbutton">➤ Assista</a>
                        <a href={`/list/add/${item.id}`} className="feature--mylistbutton">+ Sua Playlist</a>
                    </div>

                    <div className="featured--genres"><strong>Generos: </strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}