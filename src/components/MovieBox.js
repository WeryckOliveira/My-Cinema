import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieBox = ({title, year, image, description, match}) => {

  const [modal, setModal] = useState(false);
  const [movieState, setMovieState] = useState(false);

  console.log(modal)
  return (
    <>
      <div onClick={()=> modal === false ? setModal(!modal) : modal} className='movie-bg'>
        <img src={image}></img>
      </div>{/*movie-bg*/}

      <div className={`movie-modal ${modal ? 'fade': ''}`}>
        <Header/>

        <div className={`container ${movieState ? 'd-none' : ''}`}>
          <h2>Título do filme</h2>
          <p>Infos do Filme</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque vitae arcu et malesuada. Mauris turpis odio, ullamcorper eget urna vel, facilisis rhoncus nisi. Praesent facilisis augue a odio efficitur, nec pretium lorem faucibus. Nunc id lacus eget enim vulputate interdum. Maecenas posuere eget neque quis tincidunt. Maecenas eros turpis, congue eget accumsan nec, dignissim sed mi. Phasellus at ante ac tortor laoreet condimentum nec ac dolor.</p>
          
          <p>
            <Link to={`/movieplayer/${title}`}><button onClick={()=> movieState === false ? setMovieState(!movieState) : movieState}>Play</button></Link>
            <button onClick={()=> modal ? setModal(!modal) : modal}>Voltar</button>
          </p>
        </div>{/*container*/} 

        <div className={`movie-player ${movieState ? 'd-block' : ''}`}>
          <div onClick={()=> movieState ? setMovieState(!movieState) : movieState} className='exit'>X</div>
          <video controls></video>  
        </div>

      </div>{/*movie-modal*/}
    </>
  )

}

export default MovieBox
