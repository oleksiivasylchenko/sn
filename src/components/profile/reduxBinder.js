import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    text: state.text
});

const mapDispatchToProps = dispatch => ({
    updateText: text => dispatch({
        type: 'UPDATE_TEXT',
        text
    }),
});

export default (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
