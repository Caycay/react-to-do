import React, {Component} from 'react';
import BtnAdd from "./btn-add";
import {Input} from "react-materialize";
import Header from "./header";
import Link from "react-router-dom/es/Link";
import PropTypes from 'prop-types';


export class ListAdd extends Component {
    addValue = e => {
        let list = Object.assign({}, this.props.list);
        list[e.target.name] = e.target.value;
        this.props.setNewList(list);
    };

    createNew = () => {
        this.props.createNewList(this.props.list);
    };

    render() {
        const {list} = this.props;
        return (
            <div>
                <div className="list-edit">
                    <Header header={"Add list"}/>
                    <div className="list-section">
                        <div className="collection-item">
                            <div className="inputs">
                                <Input id="name" name="name" onChange={this.addValue} label="New name"
                                       value={list.name}/>
                                <Input id="description" name="description" onChange={this.addValue}
                                       label="New description"
                                       value={list.description}/>
                            </div>
                            <Link title="Save" to={"/"} className="item-grup" refresh="true">

                                <BtnAdd onSaveClick={this.createNew}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ListAdd.propTypes = {
    list: PropTypes.object.isRequired,
    setNewList: PropTypes.func.isRequired,
    createNewList: PropTypes.func.isRequired
};
export default ListAdd;