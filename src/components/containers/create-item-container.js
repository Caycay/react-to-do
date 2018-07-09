import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemAdd from "../item-add";
import {createNewItem, setNewItem} from "../../actions/lists-actions";

class CreateItemContainer extends Component {
    componentDidMount() {
        let item = this.props.item;
        item['listId'] = this.props.match.params.id;
        this.props.setNewItem(item);
    };


    render() {
        const {item} = this.props;
        return (
            <ItemAdd item={item}
                     setNewItem={this.props.setNewItem}
                     createNewItem={this.props.createNewItem}
            />
        );
    }
}

CreateItemContainer.propTypes = {
    setNewItem: PropTypes.func.isRequired,
    createNewItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setNewItem, createNewItem}, dispatch);
}

function mapStateToProps(state) {
    return {
        item: state.lists.item
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateItemContainer);