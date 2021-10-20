import React from 'react'
import './index.css'

function Navbar4() {
    return (
        <div>
            <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

      <span class="ml-3 text-xl">RainUi</span>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900" href="#">First Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Second Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Third Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
    </button>
  </div>
</header>
            
        </div>
    )
}

export default Navbar4
