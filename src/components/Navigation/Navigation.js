import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
const setActive = ({ isActive }) => {
  return {
    color: isActive ? 'red' : '#021118',
  };
};
const Navigation = () => (
  <nav>
    <NavLink to="/" className={styles.link} style={setActive}>
      Home
    </NavLink>
    <NavLink to="/movies" className={styles.link} style={setActive}>
      Movies
    </NavLink>
  </nav>
);
export { Navigation };
