
import PropTypes from 'prop-types'

import FilterBlock from './FilterBlock'
import ProductItem from './ProductItem'

import productFilterFnMatch from '../utils/productFilterFnMatch'

const getFilterLabelWithCounter = (filterName, {label, value}, productsList) => {
    const productsCount = productsList.filter(item => productFilterFnMatch(filterName, value, item)).length
    return `${label} (${productsCount})`
}

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

function FiltersList ({ filters, productsList, onFilterChange }) {
    return (
        <form>
            <FilterBlock title="CATEGORIE">
                <ul>
                    <li className="mt-2.5">
                        <a href="#" className="text-base text-complementary">Riscaldamento</a>
                        <ul className="ml-5">
                            <li className="mt-2.5">
                                <a href="#">Casa e Acqua</a>
                            </li>
                            <li className="mt-2.5">
                                <a href="#">Casa</a>
                            </li>
                            <li className="mt-2.5">
                                <a href="#">Acqua</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className="border-0 border-b border-gray-opacity-2 mt-7.5" />
            </FilterBlock>
            {filters.map(filter => {
                const filterObj = {...filter}
                const filterName = filterObj.id;

                if( typeof filterObj.filters === 'undefined' ){
                    filterObj.filters = getFiltersFromProducts(filterName, productsList)
                }
                
                filterObj.filters = filterObj.filters.map(singleFilter => ({
                    ...singleFilter,
                    label: getFilterLabelWithCounter(filterName, singleFilter, productsList)
                }))
                
                return <FilterBlock key={filterName} {...filterObj} onFilterChange={onFilterChange} />
            })}
        </form>
    )
}

FiltersList.propTypes = {
    filters: PropTypes.arrayOf( PropTypes.object ),
    productsList: PropTypes.arrayOf( ProductItem ),
    onFilterChange: PropTypes.func
}

export default FiltersList
