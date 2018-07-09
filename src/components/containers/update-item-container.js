import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemEdit from "../item-edit";
import {setNewItem, setSingleItem, updateItem} from "../../actions/lists-actions";

export class UpdateItemContainer extends Component {

    componentWillMount() {
        const params = this.props.match.params;
        this.setSingleItem(params.idItem, params.idList);
    };

    setSingleItem = (idItem, idList) => {
        this.props.setSingleItem(idList, idItem);


    };
    render() {
        return (
            <ItemEdit
                item={this.props.item}
                setNewItem={this.props.setNewItem}
                updateItem={this.props.updateItem}
            />
        );
    }
}

UpdateItemContainer.propTypes = {
    item: PropTypes.object.isRequired,
    setNewItem: PropTypes.func.isRequired,
    setSingleItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setNewItem, setSingleItem, updateItem}, dispatch);
}

function mapStateToProps(state) {
    return {
        item: state.lists.item
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateItemContainer);