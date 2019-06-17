import React, { Component, Fragment } from 'react';
import ListItem from './listItem'
import store from './store/index'

class UseList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="labelery">请输入内容：</label>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChangeValue}/>
                    <button onClick={this.handleClickAdd}>添加</button>
                </div>
                <div>
                    {this.state.list.map((item, index) => {
                        return (
                            <div key={item+index} onClick={this.handleItemDelete}>{item}</div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleChangeValue(e){
        let value = e.target.value;
        let action = {
            type:'change_input_value',
            value
        }
        store.dispatch(action)
    }
    handleClickAdd(){
        let action = {
            type:'change_list_add'
        }
        store.dispatch(action)
    }
    handleItemDelete(index){
        let action = {
            type:'change_list_delete',
            index
        }
        store.dispatch(action)
    }
}

export default UseList