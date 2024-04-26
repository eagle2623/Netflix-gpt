import React from 'react'
import { POSTER_CDN } from '../utility/constants'

const MovieCard = ({movie}) => {
  return (
		<div className='w-48 p-2'>
			<img src={POSTER_CDN + movie.poster_path} alt="poster" />
		</div>
  );
}

export default MovieCard