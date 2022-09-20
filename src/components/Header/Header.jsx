

import './Header.css'
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Header = ({headerText}) => {

    return (
        <header className="header">
            <div className='header__text'>
                {headerText}
            </div>
        </header>
    )
}

export default Header

Header.propTypes = {
    headerText: PropTypes.string.isRequired
}