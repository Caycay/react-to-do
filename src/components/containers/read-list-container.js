import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ListsView from '../lists-view';
import {connect} from 'react-redux';

export class ListsContainer extends Component {
    componentDidMount(){
        this.getLists();
    }
    render() {
        return (
            <ListsView
                lists={this.props.lists}

            />
        );
    };

    getLists() {
        this.props.actions.setAllLists();
    };
}

ListsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
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
