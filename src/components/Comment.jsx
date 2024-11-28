import { Component } from 'react'

const API =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4N2QwMjA2ZmM4YzAwMTU2Yjg3MjMiLCJpYXQiOjE3MzI4MDM4NDIsImV4cCI6MTczNDAxMzQ0Mn0.ZCRIxrp_5MIoCMJTfj38dW3jv9GRrXxu6laRfiVqFFY'

class CommentArea extends Component {
  state = {
    valutation: [],
  }
  getValutation = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization: `Bearer ${API}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((data) => {
        this.setState({ valutation: data })
      })
      .catch((error) => {
        console.error('Errore:', error)
      })
  }

  componentDidMount() {
    this.getValutation()
  }
  render() {
    const { valutation } = this.state

    return (
      <div>
        <h5>Commenti</h5>
        <ul>
          {valutation.length > 0 ? (
            valutation.map((comment) => (
              <li key={comment._id}>
                {comment.comment || 'Nessun testo disponibile'}
              </li>
            ))
          ) : (
            <p>Nessun commento disponibile.</p>
          )}
        </ul>
      </div>
    )
  }
}

export default CommentArea
