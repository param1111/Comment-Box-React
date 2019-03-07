import React from 'react'


class TextBox extends React.Component {
    constructor(props){
      super(props)
       this.state = {
         text: ''
       }
       this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
      this.setState({text: event.target.value})
      this.props.getInput(event.target.value)
    }
  
    render() {
      console.log(this.props)
      return (
        <div>
          <input
            type='text'
            placeholder={this.props.placeholder}
            value={this.state.text}
            onChange={this.onChange}
          />
        </div>
      )
    }
  }

  export default TextBox;