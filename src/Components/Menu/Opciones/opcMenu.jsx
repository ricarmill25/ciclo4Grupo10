import { Link } from "react-router-dom";
const opcMenu = props => {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
          <Link to={props.pagina} className="skip-link">
            <div className="card">
              <img
                width="100%"
                height="200"
                src={props.foto}
              />
              <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text text-dark">
                  {props.leyenda}
                </p>
              </div>
            </div>
          </Link>
        </div>
  );
};
export default opcMenu;