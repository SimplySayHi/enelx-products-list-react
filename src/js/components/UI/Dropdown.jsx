
import PropTypes from 'prop-types'

function Dropdown ({ id, name, options, label, onChange }) {
    return (
        <div className="relative flex items-center text-complementary">
            {label && <span>{label}</span>}
            <select
                id={id}
                name={name}
                className="relative pr-4 bg-transparent appearance-none z-10"
                onChange={onChange}
            >
                {options.map(item => <option key={item.id} value={item.value}>{item.label}</option>)}
            </select>
            <i className="icon-arrow_bottom text-xs leading-none absolute right-0 z-0"></i>
        </div>
    )
}

Dropdown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf( PropTypes.exact({
        id: PropTypes.string,
        value: PropTypes.string,
        label: PropTypes.string
    }) ).isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func
}

export default Dropdown
