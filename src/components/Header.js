import React from 'react'

const Header = () => {
  return (
    <main className="w-full">
      <header>
        <div className="py-1 lg:py-4 flex justify-between items-center w-full bg-violet-400">
        <div className="px-2  mx-1 flex items-center gap-1 rounded-lg">
        {/* <span className="inline-block text-white bounce"><ImBooks size={28}/></span> */}
        <p className="px-1 inline-flex text-white cursor-pointer tracking-widest">Logo</p> 
        </div>
      <ul className="hidden md:flex px-2 mx-1 text-white cursor-pointer gap-3">
      <li className="navbar"><a href="#">Home</a></li>
			<li className="navbar"><a href="#">Movies</a></li>
			<li className="navbar"><a href="#">IMDB</a></li>
		</ul> 
        </div>
        </header>
        </main>
  )
}

export default Header