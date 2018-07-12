import ListAdd from '../list-add'
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setNewList, createNewList} from "../../actions/lists-actions";

class CreateListContainer extends Component {
    render() {
        return (
            <ListAdd
                list={this.props.list}
                setNewList={this.props.setNewList}
                createNewList={this.props.createNewList}
            />
        );
    }
}

CreateListContainer.propTypes = {
    list: PropTypes.object.isRequired,
    setNewList: PropTypes.func.isRequired,
    createNewList: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setNewList, createNewList}, dispatch);
}

function mapStateToProps(state) {
    return {
        list: state.lists.list
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateListContainer);