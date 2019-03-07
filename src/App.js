import React from 'react';
import TextBox from './TextBox.js';

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.toggleReply = this.toggleReply.bind(this);    
  }

  toggleReply() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    //console.log(this.props);
    return (
      <div style={{border: '2px black solid'}}>
        {`${this.props.commentObj.username}: ${this.props.commentObj.comment}`}
        <button onClick={this.toggleReply}>Reply</button>
        <div>
          { this.state.open? <CommentList /> : ''}
        </div>
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
      comment: '',
    }
    console.log(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.onEnter = this.onEnter.bind(this);
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
        comment : this.state.comment,
      }
      this.setState({
        comments : [...this.state.comments,commentObj],
        comment: '',
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
          <button onClick={this.handleClick}>Submit</button>
        </div> 
        <div>{commentSection}</div>
        {comments.map((comment)=>(<Comment commentObj={comment} />))}
      </div>
    )
  }
}



export default CommentList;
