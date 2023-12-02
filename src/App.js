import React from 'react'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchResults from './components/SearchResults'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/search/:searchterm' element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}
