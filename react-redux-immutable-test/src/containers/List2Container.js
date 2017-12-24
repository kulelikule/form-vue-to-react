import React, { Component } from 'react'
import { connect } from 'react-redux'
import List2 from '../components/List2'
import Test from '../components/Test'
import { changeList2 } from '../actions' 

class Container2 extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.changeList2()
        }, 1000);
    }
    componentDidUpdate() {
        console.log('容器2渲染')
    }
    render() {
        return (
            <div>
                <List2 list={this.props.list} />
                <Test info={this.props.list.get('1')}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        list: state.list2
    }),
    {
        changeList2
    }
)(Container2)