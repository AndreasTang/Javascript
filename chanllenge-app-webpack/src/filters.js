const inputData = {
    inputName: '',
    hideSunks: false,
    hideDetails: false,
    filteredArrays: [],
    sortBy: 'byEdited'
}

const getInputData = () => inputData

const changeInputData = ({ inputName, hideSunks, hideDetails, filteredArrays, sortBy }) => {

    if (inputName) {
        inputData.inputName = inputName
    } else if (inputName === '') {
        inputData.inputName = ''
    }

    if (hideSunks) {
        inputData.hideSunks = hideSunks
    } else if (hideSunks === false) {
        inputData.hideSunks = false
    }

    if (hideDetails) {
        inputData.hideDetails = hideDetails
    } else if (hideDetails === false) {
        inputData.hideDetails = false
    }

    if (filteredArrays) {
        inputData.filteredArrays = filteredArrays
    }

    if (sortBy) {
        inputData.sortBy = sortBy
    }
}

export {getInputData, changeInputData}