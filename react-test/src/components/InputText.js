import React, { Component } from 'react'

export default class extends Component {
    componentDidUpdate() {
        console.log('组件3更新')
    }
    render() {
        return (
            <div>
                <input value={this.props.text} onInput={this.props.onInput}/>
                <span>{this.props.text}</span>
            </div>
        )
    }
}
