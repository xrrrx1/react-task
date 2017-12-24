import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'

class Button extends Component {
    static propTypes = {
        icon: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.node
    };

    render() {
        const {icon, className, onClick, children} = this.props;

        return (
            <button className={className} onClick={onClick} {...this.props}>
                {
                    icon ? <i className={'material-icons'}>{icon}</i> :
                        children
                }
            </button>
        )
    }
}

export default Button