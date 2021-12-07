import Cookies from "universal-cookie";

const BtnCerrarSesion = () => {
  const cookies = new Cookies();
  function handleRemoveCookie() {
    cookies.remove("perfil");
  }
  return (
    <>
      <div class="nav-link"> {cookies.get("perfil")}</div>
      <div>
        {" "}
        <a
          className="btn btn-warning"
          aria-current="page"
          href="/"
          onClick={handleRemoveCookie}
        >
          Cerrar Sesión
        </a>
      </div>
    </>
  );
};
export default BtnCerrarSesion;
