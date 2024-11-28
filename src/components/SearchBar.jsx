import { Component } from 'react'

class SearchBar extends Component {
  handleInputChange = (e) => {
    this.props.onSearchChange(e.target.value)
  }

  render() {
    return (
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca un libro..."
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default SearchBar
