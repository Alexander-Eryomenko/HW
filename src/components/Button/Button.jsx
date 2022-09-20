import PropTypes from 'prop-types'

import './Button.css'

const Button = ({onClick, className, title}) => {
    return (
        <button onClick={onClick} className={className}>{title}</button>
    )
}

export default Button

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}