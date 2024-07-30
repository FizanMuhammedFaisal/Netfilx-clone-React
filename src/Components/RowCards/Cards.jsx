import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
function Cards(prop) {
  const [movies, setMovies] = useState([])
  const [link, setLink] = useState()
  const [focused, setFocused] = useState(null)
  useEffect(() => {
    axios
      .get(prop.URL)
      .then(res => {
        console.log(res.data)
        setMovies(res.data.results)
      })
      .catch(er => {
        console.log(er)
      })
  }, [prop.URL])
  const opts = {
    height: '180',
    width: '320',
    playerVars: {
      autoplay: 1
    }
  }
  const optsbig = { ...opts, height: 216, width: 384 }

  const handleMovie = id => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then(data => {
        console.log('data for processing' + data)
        if (data.data.results.length !== 0) {
          setLink(data.data.results[0].key)
          setFocused(id)
        } else {
          console.log('NO Trailers')
        }
      })
  }

  return (
    <div className='ml-5  text-zinc-300 font-light  '>
      <h2 className='font-semibold font-sans text-slate-100 text-xl ml-2 '>
        {prop.title}
      </h2>

      <div className='flex p-5 overflow-x-scroll overflow-y-hidden scrollbar-hide posters '>
        {movies.map((obj, i) => (
          <div
            key={i}
            className={
              prop.main ? 'flex-none w-96 mr-5' : 'flex-none w-80 mr-4'
            }
          >
            {focused === obj.id ? (
              <div className='hover:scale-110 transition-transform duration-900 ease-in-out cursor-pointer '>
                <YouTube videoId={link} opts={prop.main ? optsbig : opts} />
                <div className='flex justify-between pt-1 mr-2 ml-1'>
                  <p className='ml-1 font-semibold'>
                    {obj.title ? obj.title : obj.name}
                  </p>
                  <p className='ml-1 text-right text-slate-300 font-thin'>
                    {obj.title ? obj.release_date : obj.first_air_date}
                  </p>
                </div>
              </div>
            ) : (
              <div className='hover:scale-110 transition-transform duration-900 ease-in-out cursor-pointer'>
                <img
                  key={i}
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt=''
                  onClick={() => handleMovie(obj.id)}
                />
                <div className='flex justify-between pt-1 mr-2 ml-1'>
                  <p className='ml-1 font-semibold'>
                    {obj.title ? obj.title : obj.name}
                  </p>
                  <p className='ml-1 text-right text-slate-300 font-thin'>
                    {obj.title ? obj.release_date : obj.first_air_date}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
