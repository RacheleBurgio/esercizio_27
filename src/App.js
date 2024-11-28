import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from './components/Alert'
import horror from './data/horror.json'
import BookList from './components/BookList'

const books = [...horror]

function App() {
  return (
    <div className="App">
      <header>
        <MyNav subtitle="Bookstore" isFluid={true} />
      </header>
      <div>
        <MyAlert />
      </div>
      <div className="container">
        <BookList books={books} />
      </div>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
