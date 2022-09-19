

import './Header.css'

const Header = (props) => {

    return (
        <header className="header">
            <div className='header__text'>
                {props.headerText}
            </div>
        </header>
    )
}

export default Header