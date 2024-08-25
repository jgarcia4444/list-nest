
const removeError = identifier => {
    return {
        type: 'REMOVE_FORM_ERROR',
        identifier,
    }
}

export default removeError;