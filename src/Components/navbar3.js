import React from 'react'
import './index.css'

function Navbar3() {
    return (
        <div>
            <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900" href="#">First Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Second Link</a>
      <a class="mr-5 hover:text-gray-900" href="#">Third Link</a>
      <a class="hover:text-gray-900" href="#">Fourth Link</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">

      <span class="ml-3 text-xl">Rain UI</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      </button>
    </div>
  </div>
</header>
            
        </div>
    )
}

export default Navbar3
