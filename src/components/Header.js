import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({ title, toggleShowTask, showAddTask }) => {
    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'}
                    text={showAddTask ? 'Close' : 'Add'}
                    onClick={toggleShowTask}
            />
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header