import React from 'react'
import { useParams } from 'react-router-dom'

const MoviePlayer = () => {

  const { id } = useParams()

  return (
    <div>
      {id}
    </div>
  )
}

export default MoviePlayer
