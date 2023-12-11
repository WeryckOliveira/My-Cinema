import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Genres from './Genres';
import axios from 'axios';
import { FaArrowRotateLeft, FaRegCirclePlay, FaRankingStar } from "react-icons/fa6";

const MovieBox = ({title}) => {

  const [modal, setModal] = useState(false);
  const [movieState, setMovieState] = useState(false);
  const [baseURL,setBaseURL] = useState(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=pt-BR&api_key=${title}`); /*API goes here*/
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
 
    axios.get(baseURL).then((response) => {

        setPost(response.data);

    }).catch(() => { alert("Nome ou número do pokémon não encontrado") });

}, [baseURL, setBaseURL]);

  if (!post) return null;
  const result = post.results[0];
  const toStr = result.vote_average.toString();
  const rating = toStr.substr(0, toStr.length - 1);
  const genres = result.genre_ids.map((x) => Genres.find(y => y.id == x).name + ',');
  const date = result.release_date.split('-')

  console.log(post)

  
  return (
    <>
      <div onClick={()=> modal === false ? setModal(!modal) : modal} className='movie-bg'>
        <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}></img>
      </div>{/*movie-bg*/}

      <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${result.backdrop_path})`}} className={`movie-modal ${modal ? 'fade': ''}`}>

        <div className={`container-modal ${movieState ? 'd-none' : ''}`}>
          <div className='modal-content'>
          <h2>{result.title} <span>({date[0]})</span></h2>
          <p className='movie-info'><FaRankingStar style={{marginRight:'6px'}}/>{rating} <span style={{marginLeft:'20px'}}>{genres}</span></p>
          <p className='movie-description'>{result.overview}</p>
          
          <p>
            <Link to={`/movieplayer/${title}`}><button onClick={()=> movieState === false ? setMovieState(!movieState) : movieState}><div className='flex'><span>Play </span> <span><FaRegCirclePlay style={iconStyle}/></span></div></button></Link>
            <button onClick={()=> modal ? setModal(!modal) : modal}><div className='flex'><span>Voltar </span> <span><FaArrowRotateLeft style={iconStyle}/></span></div></button>
          </p>
          </div>{/*modal-content*/}
        </div>{/*container-modal*/} 

      </div>{/*movie-modal*/}
    </>
  )

}

const iconStyle = {
  fontSize: 'clamp(0.8rem, 2.5vw, 1.1rem)',
  height: '100%',
  alignItems: 'center'
}

export default MovieBox
