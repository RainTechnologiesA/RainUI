import React from 'react'
import './index.css'

function Navbar2() {
    return (
        <div>
            <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

      <span class="ml-3 text-xl">RainUI</span>

    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" href="#">First Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Second Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Third Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
            
        </div>
    )
}

export default Navbar2
