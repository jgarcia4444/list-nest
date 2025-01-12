
const addList = (listName) => {
    return {
        type: "ADDED_LIST",
        listName,
    }
}

export default addList;