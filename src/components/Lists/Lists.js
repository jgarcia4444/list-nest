import React, {useState} from 'react';
import { connect } from 'react-redux';

import List from './List/List';
import PageTitle from '../../shared/text/PageTitle';
import AddList from './AddList/AddList';

const Lists = ({lists}) => {

    const [listAdd, setListAdd] = useState(false);

    // const exampleListItems = [{item: "Lorem Ipsum", complete: false}, {item: "Lorem Ipsum", complete: true}, {item: "Lorem Ipsum", complete: false}];

    // const lists = [{title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}];

    const renderLists = () => {
        return lists.map(listInfo => <List listInfo={listInfo} />)
    }

    return (
        <div className="">
            <div className="flex flex-row items-center justify-between">
                <PageTitle title="Lists" />
                <AddList />
                
            </div>
            <div className="w-full overflow-x-auto flex flex-row gap-8 shrink-0 mt-4 pb-4">
                {renderLists()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lists: state.Lists.lists,
    }
}

export default connect(
    mapStateToProps,
    null
)(Lists);