
const removeError = errorInfo => {
    return {
        type: 'REMOVE_FORM_ERROR',
        errorInfo,
    }
}

export default removeError;