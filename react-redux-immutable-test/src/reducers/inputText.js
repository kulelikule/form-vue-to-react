export default (state = '', action) => {
    switch(action.type) {
        case 'INPUT': 
            return action.payload
        default: 
            return state
    }
}