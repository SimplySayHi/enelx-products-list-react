
import PropTypes from 'prop-types'

function Button ({ type, label, disabled, onClick, children }) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className="border-2 border-white px-10 py-3.5 rounded-full text-sm font-bold uppercase leading-none tracking-wider transition ease-in-out hover:bg-white hover:text-black disabled:opacity-40 hover:disabled:bg-inherit hover:disabled:text-inherit"
        >
            { children || label }
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any
}

export default Button
