import { Link } from 'react-router-dom'
import './Heading.css'
const Heading = () => {
    return (
        <header className="header">
            <Link className="header__title" to='/'>
                <h1 >Task List</h1>
            </Link>
            <div className="header__right">
                <Link to='/add'>
                    <button className="header__button btn btn__success">
                        Add
                    </button>
                </Link>

            </div>
        </header>
    )
}
export default Heading