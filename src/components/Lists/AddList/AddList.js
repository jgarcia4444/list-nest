import React, {useState} from 'react';
import { FiList, FiMinus } from "react-icons/fi";
import { connect } from 'react-redux';

import AddListButton from './AddListButton/AddListButton';

import addList from '../../../redux/actions/listsActions/addList';

const AddList = ({addList}) => {

    const [showAddList, setShowAddList] = useState(false);
    const [listName, setListName] = useState("");

    const handleAddListClick = () => {
        if (listName !== "") {
            addList(listName);
        }
    }

    const addButton = (
        <div onClick={handleAddListClick} className="bg-primary-green rounded w-16 text-white text-center transition-all duration-300 hover:cursor-pointer hover:shadow-lg shadow-black">
            Add
        </div>
    )

    const AddListForm = (
        <div className={`transition-all duration-300 flex flex-col`}>
            
            <div className="flex flex-row justify-between items-center">
                <h6 className="">
                    New List
                </h6>
                <div onClick={() => setShowAddList(false)} className="w-6 h-6 rounded-full border-2 border-primary-green hover:cursor-pointer">
                    <FiMinus size={20} color={"#89dbab"} />
                </div>
            </div>
            <div className="">
                <div className="bg-primary-green rounded flex flex-row items-center gap-2 px-2 py-1">
                    <FiList size={20} color={"#fff"} />
                    <input type="text" className='bg-transparent text-white placeholder-white' placeholder="Name" value={listName} onChange={(e) => setListName(e.target.value) } />
                </div>
            </div>
            <div className="mt-1 flex flex-row justify-end">
                {addButton}
            </div>
        </div>
    )

    const handleClick = () => {
        setShowAddList(!showAddList);
    }

    return (
        <div className="overflow-x-hidden">
            {showAddList === true ?
            (
                AddListForm
            )
            :
                <AddListButton handleClick={handleClick} />
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addList: (listName) => dispatch(addList(listName)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddList);