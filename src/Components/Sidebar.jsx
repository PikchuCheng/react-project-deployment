import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faList, faCog, faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({ close }) {
  return (
    <div className="sidebar" onClick={close}>
      <div className="sidebar-links">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          Home
        </Link>
        <Link to="/Recipes">
          <FontAwesomeIcon icon={faList} /> Recipes
        </Link>
        <Link to="/Setting">
          <FontAwesomeIcon icon={faCog} />
          Settings
        </Link>
        <Link to="/Contact">
          <FontAwesomeIcon icon={faEnvelope} />
          Contact
        </Link>
      </div>
    </div>
  );
}
