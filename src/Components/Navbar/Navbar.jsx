import { useEffect, useState } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(null)
  const handlescroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handlescroll)

    return () => {
      window.removeEventListener('scroll', handlescroll)
    }
  }, [])

  return (
    <div
      className={`navbar h-16 flex items-center justify-between px-6 fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? ' bg-black bg-opacity-60 backdrop-blur-lg  '
          : 'bg-transparent'
      } `}
    >
      <img
        className='logo  lg:h-9 sm:h-7 h-6'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Logo'
      />
      <ul className='flex space-x-6 text-white'>
        {['Home', 'Tv Shows', 'Movies', 'My List'].map((item, index) => (
          <li key={index} className='hover:text-red-500 cursor-pointer'>
            {item}
          </li>
        ))}
      </ul>
      <img
        className='avatar h-8'
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Avatar'
      />
    </div>
  )
}

export default Navbar
