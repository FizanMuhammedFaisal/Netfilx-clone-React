import React, { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'
import axios from 'axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState('')
  const fullUrl = `${imageUrl}${movie.backdrop_path}`
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  useEffect(() => {
    const num = getRandom(0, 20)
    console.log(num)
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then(res => {
        console.log(res.data.results)
        setMovie(res.data.results[num])
      })
  }, [])

  return (
    <div
      className=' text-white bg-cover bg-center h-screen flex items-center justify-start'
      style={{ backgroundImage: `url(${fullUrl})` }}
    >
      <div className='pt-36 pl-10 max-w-xl  '>
        <h1 className='text-5xl mb-4 font-bold '>
          {movie ? (movie.title ? movie.title : movie.name) : ''}
        </h1>
        <div className='banner_buttons'>
          <Button className='inline-flex px-6 items-center gap-2 rounded-md bg-gray-600 bg-opacity-45 backdrop-blur-sm py-1.5 transition-all text-sm/6 font-semibold text-white mr-2 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
            Play
          </Button>

          <Button className='inline-flex items-center gap-2 rounded-md backdrop-blur-sm  bg-gray-600 bg-opacity-45 transition-all py-1.5 px-3 text-sm/6 font-semibold text-white mr-2 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
            My list
          </Button>
        </div>
        <h1 className=' text-base text-left text-slate-200 mt-2'>
          {movie ? movie.overview : ''}
        </h1>
      </div>
      <div className='bg-gradient-to-t from-slate-900 to-transparent h-6 w-full absolute bottom-0 left-0'></div>
    </div>
  )
}

export default Banner
