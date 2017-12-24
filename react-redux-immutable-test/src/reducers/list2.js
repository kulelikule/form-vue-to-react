import Immutable from 'immutable'
let initialState = Immutable.fromJS([{
    name: 'name3',
    age: '3'
}, {
    name: 'name4',
    age: '4'
}])
export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE2':
            return state.setIn(['0', 'age'], '3')
        default: 
            return state
    }
}