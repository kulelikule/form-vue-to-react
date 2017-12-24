import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import InputText from '../components/InputText'
import { onInput } from '../actions'

class Container3 extends PureComponent {
    componentDidUpdate() {
        console.log('容器3渲染')
    }
    render() {
        return (
            <InputText text={this.props.text} onInput={this.props.onInput}/>
        )
    }
}
export default connect(state => ({
        text: state.inputText
    }), {
        onInput
    }
)(Container3)