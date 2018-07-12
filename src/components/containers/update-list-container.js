import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListEdit from '../list-edit'
import {setNewList, setSingleList, updateList} from "../../actions/lists-actions";

export class UpdateListContainer extends Component {

    componentWillMount() {
        const id = this.props.match.params.id;
        this.setSingleList(id);
    };
    setSingleList = (id) => {
        this.props.setSingleList(id);

    };

    render() {
        return (
            <ListEdit
                list={this.props.list}
                updateList={this.props.updateList}
                setNewList={this.props.setNewList}
            />
        );
    }
}
UpdateListContainer.propTypes = {
    list: PropTypes.object.isRequired,
    setSingleList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired,
    setNewList: PropTypes.func.isRequired
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({setSingleList, updateList, setNewList}, dispatch);

}
function mapStateToProps(state) {
    return {
        list: state.lists.list
    };

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateListContainer);