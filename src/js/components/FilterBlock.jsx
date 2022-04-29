
import PropTypes from 'prop-types'

import Checkbox from './UI/Checkbox'

function FilterBlock ({ title, filters, defaultColor, onFilterChange, children }) {
    const printFilters = () => {
        return (
            filters && 
            <ul className="pt-0.5">
                {filters.map(filter => (
                    <div key={filter.id} className="mt-2.5">
                        <Checkbox {...filter} defaultColor={defaultColor} onChange={(event) => {
                            onFilterChange(filter, event.target.checked)
                        }} />
                    </div>
                ))} 
            </ul>
        )
    }
    return (
        <div className="mb-7.5">
            <h4 className="text-sm font-bold uppercase leading-5 tracking-wider">{title}</h4>
            { children  || printFilters() }
        </div>
    )
}

FilterBlock.propTypes = {
    title: PropTypes.string,
    filters: PropTypes.arrayOf( PropTypes.object ),
    defaultColor: PropTypes.string,
    onFilterChange: PropTypes.func,
    children: PropTypes.any
}

export default FilterBlock
