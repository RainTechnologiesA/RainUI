import React from 'react'
import './index.css'

function Navbar1() {
    return (
        <div>
            <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <span class="ml-3 text-xl">RainUI</span>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-gray-900" href="#">First Link</a>
                <a class="mr-5 hover:text-gray-900" href="#">Second Link</a>
                <a class="mr-5 hover:text-gray-900" href="#">Third Link</a>
                <a class="mr-5 hover:text-gray-900" href="#">Fourth Link</a>
    </nav>
  </div>
</header>        
        </div>
    )
}

export default Navbar1
