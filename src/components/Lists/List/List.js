import React from 'react';

import ListTitle from '../../../shared/text/ListTitle';
import ListItem from './ListItem/ListItem';

const List = ({listInfo}) => {

    console.log("List Info from List component", listInfo);

    const {listName, listItems} = listInfo

    const renderListItems = () => {
        return listItems.map(listItem => <ListItem itemInfo={listItem} />)
    }

    return (
        <div className="w-72 shrink-0">
            <div className="w-full flex flex-row items-start">
                <ListTitle title={listName} />
            </div>
            <div className="w-full h-60 overflow-y-auto flex flex-col shrink-0 gap-4 bg-primary-green bg-opacity-70 p-2 rounded border-2 border-primary-green shadow shadow-primary-green">
                {renderListItems()}
            </div>
        </div>
    )
}

export default List;