const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    console.log(action)
    switch (action.type) {
        case 'change_input_value':
            newState.inputValue = action.value;
            break;
        case 'change_list_add':
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            break;
        case 'change_list_delete':
            newState.list.splice(action.index, 1);
            break;
        default:
            
            break;
    }
    return newState;
}