import React,{useEffect, useState} from 'react';
import MovieRow from './components/MovieRow';
import './App.css';
import tmdb from './tmdb';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default () =>{
  // Pegando a lista de filmes 
  const [movieList, setMovieList] = useState([]);
  // Pegando as informacaoes de cada filme
  const [featureData, setFeaturedData] = useState(null);
  // Topo da pagina como preto
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(()=>{
    // carrega todos os dados da API
    const loadAll = async() =>{
      // Pegando todos os dados
      let list = await tmdb.getHomeList();
      setMovieList(list);
      //Filtrando os originais do prime video
      let originals = list.filter(i=>i.slug === 'originals');
      // seleciona um randomico como a capa principal
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  },[]);


  useEffect(()=>{
    // a partir de um certo movimento de descida ele o topo fica preto
    const scrollListener = () =>{
        if(window.screenY > 10){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
    }
    window.addEventListener('scroll',scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []) ;
  
  //criando os componentes na tela
  // cria a capa do site 
  // depois a lista de filmes 
  // e o rodape 
  return (
    <div className='page'>
      <Header black={blackHeader}/>
      
      {
        featureData && 
        <FeaturedMovie item={featureData}></FeaturedMovie>
      }
      <section className='lists'>
        {movieList.map((item,key) =>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Creditos a Api usada moviedb.org e a https://www.youtube.com/@bonieky

      </footer>
    </div>
  )
}
