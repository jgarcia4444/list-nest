import React, {useState} from 'react';


import Checkbox from './Checkbox/Checkbox';

const ListItem = ({itemInfo}) => {

    const {item, complete} = itemInfo;

    return (
        <div className="flex flex-row items-end justify-start gap-2">
            <Checkbox complete={complete} />
            <p className="text-white font-bold">{item}</p>
        </div>
    )
}

export default ListItem;