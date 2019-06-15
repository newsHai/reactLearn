import React, { Component } from 'react';

class ListItem extends Component {
    
    render() { 
        return ( 
            <div onClick={this.handleDeleteItem.bind(this)}>{this.props.content}</div>
        );
    }
    handleDeleteItem(){
        this.props.deleteItem(this.props.index)
    }
}
 
export default ListItem;