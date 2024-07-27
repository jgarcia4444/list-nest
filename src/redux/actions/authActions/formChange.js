
const formChange = (newInfo) => {
    console.log("New Info from form change action", newInfo);
    return {
        type: "FORM_CHANGE",
        newInfo
    }
}

export default formChange;