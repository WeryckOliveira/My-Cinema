import './App.css';
import Header from './components/Header';
import MovieBox from './components/MovieBox';
import { Outlet } from 'react-router-dom';
import MovieData from './components/MovieData';


function App() {
  return (
    <div className="App">
      <Header/>

      <section className='main-call'>
        <div className='container'>

          <div className='main-bg'></div>

        </div>{/*container*/}  
      </section>{/*main-call*/}

      <section className='movie-list'>
        <h2>Filmes</h2>

        <div className='container'> 
          
          <MovieBox title={"drive"}/>
          <MovieBox title={"vingadores era de ultron"}/>
          <MovieBox title={"vingadores ultimato"}/>
          <MovieBox title={"gran turismo"}/>
          <MovieBox title={"scarface"}/>
          <MovieBox title={"Five nights at freddys"}/>
          <MovieBox title={"max payne"}/>
          <MovieBox title={"prince of persia"}/>
          <MovieBox title={"assasins"}/>
          <MovieBox title={"Assassin's Creed"}/>
          <MovieBox title={"uncharted"}/>
          <MovieBox title={"barbie"}/>
          <MovieBox title={"sonic 2"}/>
          <MovieBox title={"mario"}/>
          <MovieBox title={"need for speed"}/>
          <MovieBox title={"fast and furious"}/>
          <MovieBox title={"homem aranha 1"}/>
          <MovieBox title={"john wick"}/>
          

        </div>{/*container*/}  
      </section>{/*movie-list*/}
      
    </div>
  );
}

export default App;
