import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ProfilePage } from './pages/ProfilePage'
import { BlogPage } from './pages/BlogPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <footer className="border-t border-zinc-800 py-6 text-center text-zinc-600 text-sm">
          © 2025 강동윤 · 반반운동센터
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
