
import productFilterFnMatch from './productFilterFnMatch'

const getFilterLabelWithCounter = (filterName, {label, value}, productsList) => {
    const productsCount = productsList.filter(item => productFilterFnMatch(filterName, value, item)).length
    return `${label} (${productsCount})`
}

export default getFilterLabelWithCounter
