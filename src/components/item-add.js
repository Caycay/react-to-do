import React, {Component} from 'react';
import BtnAdd from "./btn-add";
import {Input} from "react-materialize";
import Header from "./header";
import Link from "react-router-dom/es/Link";
import PropTypes from 'prop-types';

export class ItemAdd extends Component {
    addValue = e => {
        let item = Object.assign({}, this.props.item);
        item[e.target.name] = e.target.value;
        this.props.setNewItem(item);
    };
    createNew = () => {
        this.props.createNewItem(this.props.item);
    };
    render(){
        const {item} = this.props;

        return(
            <div>
                <div className="list-edit">
                    <Header header={"Add item"}/>
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
                            <Link title="Save" to={"/list/" + item.listId} className="item-grup">

                                <BtnAdd onSaveClick={this.createNew}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
ItemAdd.propTypes = {
    setNewItem: PropTypes.func.isRequired,
    createNewItem: PropTypes.func.isRequired
};
export default ItemAdd;