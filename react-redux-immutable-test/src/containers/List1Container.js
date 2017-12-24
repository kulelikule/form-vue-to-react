import React, { Component } from 'react'
import { connect } from 'react-redux'
import List1 from '../components/List1'

class Container1 extends Component {
    componentDidUpdate() {
        console.log('容器1渲染')
    }
    render() {
        return (
            <List1 list={this.props.list} />
        )
    }
}

export default connect(
    state => ({
        list: state.list1
    })
)(Container1)