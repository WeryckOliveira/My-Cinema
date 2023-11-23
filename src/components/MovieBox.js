import React from 'react'

const MovieBox = ({title, year, image, description, match}) => {
  return (
    <>
      <div className='movie-bg'>
        <img src={image}></img>
      </div>
    </>
  )
}

export default MovieBox
