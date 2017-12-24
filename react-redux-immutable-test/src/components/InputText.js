import React, { Component } from 'react'

export default class extends Component {
    componentDidUpdate() {
        console.log('组件3更新')
    }
    render() {
        return (
            <div>
                <input value={this.props.text} onInput={(e) => { this.props.onInput(e.target.value) }}/>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
