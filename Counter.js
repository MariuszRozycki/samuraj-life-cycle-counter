class Counter extends React.Component {

  state = {
    result: 1,
    ratio: 2
  }

  handleMultiply = () => {
    this.setState({
      result: this.state.ratio * this.state.result
    })
    // if (this.state.result > 999) {
    //   this.setState({
    //     ratio: 0.5
    //   })
    // } else if (this.state.result < 1) {
    //   this.setState({
    //     ratio: 2
    //   })
    // }
  }

  componentDidUpdate() {
    if (this.state.result > 1000 && this.state.ratio === 2) {
      this.setState({
        ratio: 0.5
      })
    } else if (this.state.result < 1 && this.state.ratio === 0.5) {
      this.setState({
        ratio: 2
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>Counter multiply *2 if result is lower then 1000. If result is higher then 1000 counter multiply * 0.5 as long as result will be lower then 1. Then again starts to multiply *2.</p>
        <button onClick={this.handleMultiply}>Multiply * {this.state.ratio}</button>
        <h1>Result: {this.state.result}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));