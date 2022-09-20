
import PropTypes from "prop-types";
import './Wrapper.css'

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper

// Wrapper.propTypes = {
//     props.children: PropTypes.element
// }