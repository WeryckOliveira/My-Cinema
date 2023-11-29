import './App.css';
import Header from './components/Header';
import MovieBox from './components/MovieBox';
import { Outlet } from 'react-router-dom';

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
          <MovieBox title={"pandora"}/>
          <MovieBox/>
          <MovieBox/>
          <MovieBox/>
          <MovieBox/>
          <MovieBox/>

        </div>{/*container*/}  
      </section>{/*movie-list*/}
      
    </div>
  );
}

export default App;
