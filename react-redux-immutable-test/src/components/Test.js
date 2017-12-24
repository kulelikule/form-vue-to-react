import React, { PureComponent } from 'react'

export default class extends PureComponent {
    componentDidUpdate() {
        console.log('test更新')
    }
    render() {
        return (
            <div>
                {this.props.info.toJS().age}
            </div>
        )
    }
}
