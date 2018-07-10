import Header from "./header";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";
import ListName from "./list-name";
import React, {Component} from 'react';

export class ListsView extends Component{
    generateListView() {
        const {lists} = this.props;
        if ((lists || []).length === 0) {
            return null;
        }

        return lists.map((list, index) => {

            return (
                <ListName list={list} key={index} onClick={this.remove}/>
            );
        })
    };
    remove = id => {
        this.props.deleteList(id);
        // wczytywanie listy na nowo ?
    };
    render() {
        return (
            <div className="list">
                <Header header="All List"/>
                <div className="list-section">
                    <div className="collection-item">
                        {this.generateListView()}
                        <Link title="Add new list" to={"/add/list/"} className="item-grup">
                            <BtnAdd/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListsView;