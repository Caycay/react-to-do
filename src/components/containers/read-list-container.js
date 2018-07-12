import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ListsView from '../lists-view';
import {connect} from 'react-redux';
import {setAllLists} from "../../actions/lists-actions";
import {deleteList} from "../../actions/lists-actions";

export class ListsContainer extends Component {
    componentDidMount(){
        this.getLists();
    }
    render() {
        return (
            <ListsView
                lists={this.props.lists}
                deleteList={this.props.deleteList}
            />
        );
    };

    getLists() {
        this.props.setAllLists();
    };
}

ListsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired,
    setAllLists: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setAllLists, deleteList}, dispatch);
}

function mapStateToProps(state) {
    return {
        lists: state.lists.lists
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListsContainer);
