import React, {Component} from 'react';
import Header from "./header";
import {Input} from "react-materialize";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";
import PropTypes from 'prop-types';

export class ItemEdit extends Component {


    saveItem = () => {
        let item = this.props.item;
        this.props.updateItem(item);
    };

    addValue = e => {
        let item = Object.assign({}, this.props.item);
        item[e.target.name] = e.target.value;
        this.props.setNewItem(item);
    };

    render() {
        const {item} = this.props;
        return (
            <div className="list-edit">
                <Header header={"Edit item"}/>
                <div className="list-section">
                    <div className="collection-item">
                        <div className="inputs">
                            <Input id="propertyString" name="propertyString" onChange={this.addValue} label="first"
                                   value={item.propertyString}/>
                            <Input id="propertyString2" name="propertyString2" onChange={this.addValue} label="second"
                                   value={item.propertyString2}/>
                            <Input id="propertyNumber" name="propertyNumber" onChange={this.addValue} label="third"
                                   value={item.propertyNumber}/>
                        </div>
                    </div>
                    <Link title="Save" to={"/list/" + item.listId} className="item-grup">

                        <BtnAdd onSaveClick={this.saveItem}/>
                    </Link>
                </div>
            </div>
        );
    }
}
ItemEdit.propTypes = {
    item: PropTypes.object.isRequired,
    setNewItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired
};
export default ItemEdit;