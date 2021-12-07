//import { logRoles } from "@testing-library/react";
import React, { useState } from "react";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import Cookies from 'universal-cookie';


const ValidarFormLogin = () => {
  React.useEffect(() => {
    fetch("http://localhost:3004/ListUsers")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  const [UserList, setUserList] = React.useState([]);
  const [User, setUser] = React.useState("");
  const [Password, setPassword] = React.useState("");
  // const [Error, setError] = useState("");
  // const [Perfil, setPerfil] = useState("");

  const onChangeHandler = (e) => {
    console.log(e.target.value);

    setUser(e.target.value);
  };
  const onChangeHandlerPass = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("El usuario es: " + User + " Y su contraseña es: " + Password);
    const cookies = new Cookies();
    //cookies.set('perfil','',{ path: '' });

    // Validaciones de Usuario en el Array
    let i, pass,rol;

    for (i = 0; i < UserList.length; i++) {
      console.log("evaluo - ", i);
      if (User == UserList[i].usuario && Password == UserList[i].password) {
        pass = 1;
        rol = UserList[i].rol;
        break;
      } else {
        pass = 0;
      }
    }

    console.log("Valor final pass - ", pass);
    if (pass == 1) {
      cookies.set('perfil', rol, { path: '/MenuInicio' });

      window.open("MenuInicio", "_self");
      // Swal.fire(
      //   "Bienvenido a EasyPass!",
      //   User + " su rol es " + rol,
      //   "success"
      // );
    } else {
      Swal.fire({
        title: "Estás seguro de los datos ingresados?",
        text: "Puede que tengas algún error, revisa tus datos!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
    }
  };
  return (
    <div>
      <div ClassName="container" align="center">
        <div ClassName="row justify-content-center pt-5 mt-5 mr-1">
          <div>
            <form className="row g-4 formulario" onSubmit={onSubmitHandler}>
              {/* <div ClassName="form-group justify-content-center" > */}
              {/* <img ClassName="Logo" src="" alt=""> */}
              {/* </div> */}
              <div ClassName="form-group text-center p-4">
                <h1 ClassName="text-login">INICIAR SESIÓN</h1>
              </div>
              <div ClassName="form-group mx-sm-4 pt-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={User}
                  placeholder="Ingrese su usuario"
                  required
                />
              </div>

              <div ClassName="form-group mx-sm-4 ">
                <input
                  type="password"
                  className="form-control"
                  onChange={onChangeHandlerPass}
                  value={Password}
                  placeholder="Password ***"
                />
              </div>

              <div ClassName="form-group d-md-flex justify-content-md-center">
                <button type="submit" className="btn btn-warning">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidarFormLogin;
