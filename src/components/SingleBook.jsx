import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Comment from '../components/Comment'

// const SingleBook = ({ book }) => {
//   return (
//     <Card className="h-100" style={{ width: '18rem', margin: '10px' }}>
//       <Card.Img variant="top" src={book.img} alt={book.title} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//       </Card.Body>
//     </Card>
//   )
// }

// export default SingleBook

class SingleBook extends Component {
  state = { selected: false }

  handleSelectToggle = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }))
  }

  render() {
    const { book } = this.props
    const { selected } = this.state

    return (
      <>
        <Card
          className={`h-100 ${selected ? 'border border-danger' : ''}`}
          style={{ width: '18rem', margin: '10px' }}
          onClick={this.handleSelectToggle}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            style={{ cursor: 'pointer' }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            {selected && <Comment id={book.asin} />}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
