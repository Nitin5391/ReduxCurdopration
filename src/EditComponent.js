import React,{Component } from 'react';
import {connect} from 'react-redux';


class EditComponent extends Component{

    handleEdit=(e)=>{
        e.preventDefault();
        const newTitle=this.gettitle.value;
        const newMessage=this.getmessage.value;
        const data={
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    render(){
        return(
            <div>
                <form className="form"  onSubmit={this.handleEdit}>
                <input required type='Text' ref={(input)=> this.gettitle=input}
                defaultValue={this.props.post.title} placeholder='Enter Post Title'/><br/><br/>
                <textarea required rows='5' cols='28' ref={(input)=> this.getmessage=input}
                defaultValue={this.props.post.Message} placeholder='Enter Post'></textarea><br/><br/>
                <button>Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);