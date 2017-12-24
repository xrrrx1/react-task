import React, {Component, PureComponent, Fragment} from 'react'
import {render, findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'

class Checkbox extends Component {
    static propTypes = {
        checked: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired
    };

    render() {
        const {checked, onChange} = this.props;

        return (
            <button className={'checkbox icon'} onClick={onChange}>
                <i className={"material-icons"}>{checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        )
    }
}

export default Checkbox