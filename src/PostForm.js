import React,{Component} from 'react';
import {connect} from 'react-redux';

class PostForm extends Component{
  handlesubmit=(e)=>{
   e.preventDefault();
   const title=this.gettitle.value;
   const Message=this.getmessage.value;
   const data={
       id: new Date(),
       title,
       Message,
       editing:false
   }
this.props.dispatch({
    type:'ADD_POST',data});
    this.gettitle.value='';
    this.getmessage.value='';
    //console.log(data);
  }
   render(){
    return(
     <div className="post-container">
     <h1 className="post_heading">Create Post</h1>
         <form className="form" onSubmit={this.handlesubmit}>
             <input required type='Text' placeholder='Enter Post title' 
             ref={(input)=>this.gettitle=input}></input><br/><br/>
             <textarea required rows="5" cols="28" ref={(input)=> this.getmessage=input} multiple="true" placeholder='Enter post'></textarea><br/><br/>
               <button>Post</button>
         </form>
     </div>
    );
   }

}

export default connect()(PostForm);