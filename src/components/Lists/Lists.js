import React from 'react';

import List from './List/List';
import PageTitle from '../../shared/text/PageTitle';

const Lists = () => {

    const exampleListItems = [{item: "Lorem Ipsum", complete: false}, {item: "Lorem Ipsum", complete: true}, {item: "Lorem Ipsum", complete: false}];

    const lists = [{title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}, {title: "Lorem1", listItems: exampleListItems}];

    const renderLists = () => {
        return lists.map(listInfo => <List listInfo={listInfo} />)
    }

    return (
        <div className="">
            <div className="">
                <PageTitle title="Lists" />
            </div>
            <div className="w-full overflow-x-auto flex flex-row gap-8 shrink-0 mt-4 pb-4">
                {renderLists()}
            </div>
        </div>
    )
}

export default Lists;