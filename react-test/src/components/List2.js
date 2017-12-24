import React, { Component } from 'react'

export default class extends Component {
    componentDidUpdate() {
        console.log('组件2更新')
    }
    render() {
        let list = this.props.list.map(item => {
            return (
                <div key={item.name}>
                    <span>姓名：{item.name}</span>
                    <span>年纪：{item.age}</span>
                </div> 
            )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}
