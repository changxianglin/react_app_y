import { useEffect, useState } from 'react'

import MovieCard from './MovieCard'

import './App.css'


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7'


const App = () => {

  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies()
  }, [])
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder=''
          value='Superman'
          onChange={() => {}}
        />
        <img 
          src={'SearchIcon'}
          alt="search"
          onClick={() => {}}
        />
      </div>

    {
      movies.length > 0 ? 
      (
        <div className='container'>
        {
          movies.map((item, index) => (
            <MovieCard movie1={item} key={index} />
          ))
        }
      </div>
      ): (
        <div>
          <h2>No movies found</h2>
        </div>
      )
    }
    </div>
  )
}

export default App