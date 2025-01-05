
class List {

    constructor(listName="", listItems=[]) {
        this.listName = listName;
        this.listItems = listItems;
    }

}

const initialState = {
    lists: [],
    loading: false,
    error: '',
}

const ListsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_LIST":
            let newList = new List(listName)
            let newLists = [...state.lists, newList];
            return {
                ...state,
                lists: newLists,
            }
        default:
            return {
                ...state
            }
    }
}

export default ListsReducer