import { Link } from "react-router-dom";
import "./layout.css";

export default function Header() {
  return (
    <div className="headerWrapper">
      <p className="header">this is Header</p>
      <div className="menuWrapper">
        <Link to="/items">items</Link>
        <Link to="/item">item</Link>
        <Link to="/form">form</Link>
      </div>
    </div>
  );
}
