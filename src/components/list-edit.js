import React, {Component} from 'react';
import Header from "./header";
import {Input} from "react-materialize";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";
import PropTypes from 'prop-types';

export class ListEdit extends Component {
    update = e => {
        let list = Object.assign({}, this.props.list);
        list[e.target.name] = e.target.value;
        this.props.setNewList(list);
    };

    saveList = () => {
        let list = this.props.list;
        this.props.updateList(list);
    };

    render() {
        const {list} = this.props;
        return (
            <div className="list-edit">
                <Header header={"Edit list"}/>
                <div className="list-section">
                    <div className="collection-item">
                        <div className="inputs">
                            <Input id="name" name="name" onChange={this.update} label="New name" value={list.name}/>
                            <Input id="description" name="description" onChange={this.update} label="New description"
                                   value={list.description}/>
                        </div>
                        <Link title="Save" to={"/"} className="item-grup">
                            <BtnAdd onSaveClick={this.saveList}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
ListEdit.propTypes = {
    list: PropTypes.object.isRequired,
    updateList: PropTypes.func.isRequired,
    setNewList: PropTypes.func.isRequired
};
export default ListEdit;