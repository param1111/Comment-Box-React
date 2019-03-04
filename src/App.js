import React, { Component } from 'react';

class Comment extends Component {
  constructor(props){
    super(props)
    this.state = {
      comment : [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    this.setState({
      comment.concat(this.state.value)
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2>Comment Widget:</h2>
            <textarea value= {this.state.value} onChange = {this.handleChange} />
          </label>
          <input id="name-handle" type = "submit" value="Submit" />
        </form>
        <h5>Comments {this.state.comment}</h5>
        <ul id = "comment-list" />        
      </div>
    );
  }
}

class CommentList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comments: [],
      username: '',
      comment: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  handleUsername(lowerState){
    this.setState({
      username : lowerState
    });
  }

  handleComment(lowerState){
    this.setState({
      comment : lowerState
    });
  }

  handleClick(){
    if(this.state.comment !== '' ){
      const commentObj = {
        username : this.state.username,
        comment : this.state.comment
      }
      this.setState({
        comments : this.state.comment.concat([commentObj]),
        comment: ''
      })
    }
  }
  handleEnter(event){
    if(event.key === 'Enter'){
      this.handleClick()
    }
  }

  render(){
    const title = 'Leave a comment or reply'
    const commentSection = 'Comments below:'
    const comments = this.state.comments
    return(
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>{title}</div>
          <TextBox placeholder={'Username'} getInput={this.handleUsername} />
          <TextBox placeholder={'Leave a comment'} getInput={this.handleComment} />
          <button onClick={this._onClick}>Submit</button>
        </div> 
        <div>{commentSection}</div>
        {comments.map((comment)=>(<Comment commentObj={comment} />))}
      </div>
    )
  }
}

export default Comment;
