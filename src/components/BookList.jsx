import { Component } from 'react'
import SingleBook from './SingleBook'
import SearchBar from './SearchBar'

class BookList extends Component {
  state = { searchTerm: '' }

  handleSearchChange = (searchTerm) => {
    this.setState({ searchTerm })
  }

  render() {
    const { books } = this.props
    const { searchTerm } = this.state

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <div>
        <SearchBar onSearchChange={this.handleSearchChange} />

        <div className="d-flex flex-wrap justify-content-center">
          {filteredBooks.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </div>
      </div>
    )
  }
}

export default BookList
