
const getFiltersFromProducts = (filterName, productsList) => {
    const filterValues = [...new Set(productsList.map(item => item[filterName]))].sort()
    return filterValues.map((label, index) => {
        return {
            id: `${filterName}_${index}`,
            name: `filter_${filterName}`,
            value: label,
            label
        }
    })
}

export default getFiltersFromProducts
