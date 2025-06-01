import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './pages/Main'
import CreateCharacters from './Pages/CreateCharacters'
function App() {
  return (<>
    <BrowserRouter>	{/* 1. BrowserRouter : 전체 라우팅을 감싸는 컴포넌트 */}
      <Routes>		{/* 2. Routes : 라우트들을 감싸는 컴포넌트 */}
        <Route path="/" element={<Layout />} /> {/* 3. Route : 각 경로에 대한 컴포넌트 매핑 */}
        <Route path="/main" element={<Main />} />
        <Route path="/create" element={<CreateCharacters />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App


