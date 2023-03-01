class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (
        <span style={{ color: 'hotpink' }}>
          <b>You liked this.</b>
        </span>
      )
    }

    return (
    <button onClick={() => this.setState({ liked: true })}>
      Like
    </button>
    )
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);