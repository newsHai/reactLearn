import React, { Component, Fragment } from 'react';
import ListItem from './listItem'

class UseList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:[111, 222, 333]
        }
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickChange = this.handleClickChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="labelery">请输入内容：</label>
                    <input type="text" value={this.state.inputValue} onChange={this.handleClickChange}/>
                    <button onClick={this.handleClickAdd}>添加</button>
                </div>
                <div>
                    {this.state.list.map((item, index) => {
                        return (<ListItem key={item + index} deleteItem={this.handleClickDelete} content={item} index={index} list={this.state.list}/>)
                    })}
                </div>
            </Fragment>
        )
    }
    handleClickChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleClickAdd(){
        let {list, inputValue} = this.state;
        this.setState({
            list:[...list, inputValue],
            inputValue:''
        })
    }
    handleClickDelete(index){
       let list = this.state.list;
       list.splice(index, 1);
       this.setState({
           list:list
       })
    }
}

export default UseList