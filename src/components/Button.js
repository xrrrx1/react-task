import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'

class Button extends Component {
    static propTypes = {
        icon: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    render() {
        const {icon, className, onClick} = this.props;

        return (
            <button className={className} onClick={onClick}>
                <i className={'material-icons'}>{icon}</i>
            </button>
        )
    }
}

export default Button