import React, {Component} from 'react';
import Header from "./header";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";
import ItemName from "./item-name";
import PropTypes from 'prop-types';

export class ItemsView extends Component {
    generateListView() {
        const {items} = this.props;
        if ((items || []).length === 0) {
            return null;
        }
        return items.map((item, index) => {
            return (
                <ItemName item={item} onClick={this.remove} key={index}/>
            );
        })
    }

    remove = (idL, idI) => {
        this.props.deleteItem(idI, idL);
    };

    render() {
        return (
            <div className="list">
                <Header header="All Items"/>
                <div className="list-section">
                    <div className="collection-item">
                        {this.generateListView()}
                        <Link title="Add new item" to={"/add/item/" + this.props.id} className="item-grup">
                            <BtnAdd />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

ItemsView.propTypes = {
    id: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};
export default ItemsView;