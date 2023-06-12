import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyBooksPage from './pages/MyBooksPage'
import BookDetailsPage from './pages/BookDetailsPage'

const App = () =>  {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/" element={<MyBooksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
