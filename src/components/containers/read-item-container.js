import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ItemsView from '../items-view';
import {connect} from 'react-redux';
import {deleteItem, setAllItems} from "../../actions/lists-actions";

class ItemsContainer extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.setAllItems(id);
    }
    render() {
        return (
            <ItemsView
                items={this.props.items}
                id={this.props.match.params.id}
                deleteItem={this.props.deleteItem}
            />
        );
    }
}
ItemsContainer.propTypes = {
    setAllItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setAllItems, deleteItem}, dispatch)

}
function mapStateToProps(state) {
    return {
        items: state.lists.items
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsContainer);
