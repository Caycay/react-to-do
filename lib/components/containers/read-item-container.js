import React, { Component } from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ItemsView from '../items-view';
import { connect } from 'react-redux';
import ItemName from "../item-name";
import { apiServer } from "../../constant/const";
import ApiService from "../../api/services/api-http-service";

class ItemsContainer extends Component {

    constructor(props) {
        super(props);

        this.remove = (idL, idI) => {
            ApiService.apiDeleteItem(apiServer.method.itemWithListId, idI, idL).then(x => {
                this.getItem();
            });
        };

        this.state = {
            items: []
        };
        this.getItem();
    }
    render() {
        return React.createElement(ItemsView, {
            items: this.generateListView(),
            id: this.props.match.params.id
        });
    }

    getItem() {
        const id = this.props.match.params.id;
        ApiService.apiGetItem(apiServer.method.listItemWithId, id).then(x => {
            this.props.actions.setAllItems(x);
        });
    }

    generateListView() {
        const { items } = this.props;
        if ((items || []).length === 0) {
            return null;
        }
        return items.map((item, index) => {
            return React.createElement(ItemName, { item: item, onClick: this.remove, key: index });
        });
    }
}
ItemsContainer.propTypes = {
    actions: PropTypes.object.isRequired
    //lists: PropTypes.array.isRequired
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
function mapStateToProps(state) {
    return {
        items: state.lists.items
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);