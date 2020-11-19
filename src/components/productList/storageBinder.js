import React from 'react';
import { connect } from 'react-redux'

import {
    ADD_TO_ORDER,
} from "../../reducers/actionTypes";

const mapStateToProps = state => ({
    text: state.text
});

const mapDispatchToProps = dispatch => ({
    addToOrder: item => dispatch({
        type: ADD_TO_ORDER,
        item,
    })
});

export default (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);