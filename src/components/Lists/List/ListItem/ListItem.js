import React from 'react';

import Checkbox from './Checkbox/Checkbox';

const ListItem = ({itemInfo}) => {

    const {item, complete} = itemInfo;

    return (
        <div className="flex flex-row items-center justify-start">
            <Checkbox complete={complete} />
            <p className="">{item}</p>
        </div>
    )
}

export default ListItem;