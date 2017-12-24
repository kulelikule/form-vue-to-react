import React, { Component } from 'react'
import List1 from './List1Container'
import List2 from './List2Container'
import InputText from './InputTextContainer'

class App extends Component {
    componentDidUpdate() {
        console.log('父组件更新')
    }
    render() {
        return (
            <div className="App">
                <List1/>   
                <List2/>   
                <InputText/>
            </div>
        );
    }
}

export default App
