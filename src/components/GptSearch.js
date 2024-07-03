import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../utills/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
        className='md:w-screen h-screen object-cover'
          src={BG_URL}
          alt="logo"
        />
      </div>
    <div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>
    </div>
    </>
  )
}

export default GptSearch
