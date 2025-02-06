import React from 'react'
import { useParams } from 'react-router-dom'
import { FaCircleXmark } from "react-icons/fa6";

const src = '../mp4/dmc.mp4'

const MoviePlayer = () => {

  const { id } = useParams()
  
12
  return (
    <div>
      <div className={'movie-player'}>
          <div className='exit'><a href='../'><FaCircleXmark /></a></div>
          
          <video controls>
            <source src={`../mp4/${id}.mp4`} type="video/mp4"></source>
            <source src={`../mp4/${id}.mkv`} type="video/mp4"></source>
          </video>

        </div>
    </div>
  )
}

export default MoviePlayer
