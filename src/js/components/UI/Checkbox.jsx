
import PropTypes from 'prop-types'

function Checkbox ({ id, name, value, label, isChecked, onChange, hasReverseLayout, hasBoldLabel, defaultColor, children }) {
    return (
        <div className={`flex items-center ${hasReverseLayout && 'flex-row-reverse'}`}>
            <input 
                id={`checkbox-${id}`} 
                type="checkbox" 
                name={name}
                value={value}
                defaultChecked={isChecked}
                onChange={onChange}
                className="w-5 h-5 bg-gray-100 appearance-none border-2 border-gray-opacity-2 focus:ring-0 checked:bg-complementary peer" 
            />
            <label 
                htmlFor={`checkbox-${id}`} 
                className={`${defaultColor || 'text-gray-opacity-4'} peer-checked:text-complementary ${hasReverseLayout ? 'pr-2.5' : 'pl-2.5'} ${hasBoldLabel ? 'text-sm font-bold tracking-wider' : 'text-base'}`}
                dangerouslySetInnerHTML={{__html: (children || label)}}
            ></label>
        </div>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange:  PropTypes.func,
    hasReverseLayout: PropTypes.bool,
    hasBoldLabel: PropTypes.bool,
    defaultColor: PropTypes.string,
    children: PropTypes.any
}

export default Checkbox
