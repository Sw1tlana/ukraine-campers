import { NavLink } from 'react-router-dom';

const AppBar = () => {
    return (
        <div>
            <header>
                <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/catalog">
                    Catalog
                </NavLink>
                <NavLink to="/favorites">
                    Favorites
                    </NavLink>
                    </nav>
            </header>
        </div>
    )
};

export default AppBar;
