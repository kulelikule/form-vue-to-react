import React, { Component } from 'react';
import List1 from './components/List1'
import List2 from './components/List2'
import InputText from './components/InputText'

class App extends Component {
    constructor() {
        super()
        this.state = {
            list1: [{
                name: 'name1',
                age: '1'
            }, {
                name: 'name2',
                age: '2'
            }],
            list2: [{
                name: 'name3',
                age: '3'
            }, {
                name: 'name4',
                age: '4'
            }],
            text: ''
        }
        this.onInput = this.onInput.bind(this)
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list2: [{
                    name: 'name3',
                    age: '3'
                }, {
                    name: 'name4',
                    age: '4'
                }]
            })
        }, 1000)
    }
    componentDidUpdate() {
        console.log('父组件更新')
    }
    onInput(e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <List1 list={this.state.list1}/>   
                <List2 list={this.state.list2}/>   
                <InputText text={this.state.text} onInput={this.onInput}/>
            </div>
        );
    }
}

export default App;
