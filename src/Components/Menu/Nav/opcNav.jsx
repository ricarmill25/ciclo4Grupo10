import { Link } from "react-router-dom";
const opcNav = props => {
  return (
    <li className="nav-item">
       <a className="nav-link" aria-current="page"  href={props.pagina}>{props.titulo}</a>
   </li>   
  );
};
export default opcNav;