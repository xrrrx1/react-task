import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {

        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}

export default Header