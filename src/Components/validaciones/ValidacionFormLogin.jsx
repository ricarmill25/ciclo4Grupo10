import React, { useState } from 'react';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



const ValidarFormLogin = () => {

    const ListUsers=[
      {Nicname: "Jmserge", password: 1234, rol: "Administrador"},
      {Nicname: "Master", password: 1234, rol: "Administrador"},
      {Nicname: "Camila", password: 1234, rol: "Usuario Interno"},
      {Nicname: "Rmillan", password: 1234, rol: "Usuario Externo"},
      {Nicname: "Cristian", password: 1234, rol: "Usuario Interno"},
    ]
    const [UserList, setUserList] = useState(ListUsers);
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const [Error, setError] = useState('');
    const [Perfil, setPerfil] = useState('');

    const onChangeHandler = (e) => {
    console.log(e.target.value);
    setUser(e.target.value)

  }
  const onChangeHandlerPass = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value)

  }
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    console.log("El usuario es: "+User+" Y su contraseña es: " + Password)

    // Validaciones de Usuario en el Array
    if (User == ListUsers[0].Nicname){
      if(Password ==ListUsers[0].password){
        Swal.fire(
          'Bienvenido a EasyPass!',
          User + " su rol es " + ListUsers[0].rol,
          'success'
        )

      } else if (Password !== ListUsers[0].password){
        Swal.fire({
          title: 'Estás seguro de los datos ingresados?',
          text: "Puede que tengas algún error, revisa tus datos!",
          icon: 'warning',
          confirmButtonColor: '#3085d6',
        })
      }
    } else if (User == ListUsers[1].Nicname) {
        if(Password ==ListUsers[1].password){
          Swal.fire(
            'Bienvenido a EasyPass!',
            User + " su rol es " + ListUsers[1].rol,
            'success'
          )      
        } else if (Password !== ListUsers[1].password){
          Swal.fire({
            title: 'Estás seguro de los datos ingresados?',
            text: "Puede que tengas algún error, revisa tus datos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
          })
        }
    } else if (User == ListUsers[2].Nicname) {
        if(Password ==ListUsers[2].password){
          Swal.fire(
            'Bienvenido a EasyPass!',
            User + " su rol es " + ListUsers[2].rol,
            'success'
          )      
        } else if (Password !== ListUsers[2].password){
          Swal.fire({
            title: 'Estás seguro de los datos ingresados?',
            text: "Puede que tengas algún error, revisa tus datos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
          })
        }
    } else if (User == ListUsers[3].Nicname) {
        if(Password ==ListUsers[3].password){
          Swal.fire(
            'Bienvenido a EasyPass!',
            User + " su rol es " + ListUsers[3].rol,
            'success'
          )      
        } else if (Password !== ListUsers[3].password){
          Swal.fire({
            title: 'Estás seguro de los datos ingresados?',
            text: "Puede que tengas algún error, revisa tus datos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
          })
        }
    } else if (User == ListUsers[4].Nicname){
        if (Password ==ListUsers[4].password){
          Swal.fire(
            'Bienvenido a EasyPass!',
            User + " su rol es " + ListUsers[4].rol,
            'success'
          )      
        } else if (Password !== ListUsers[4].password){
          Swal.fire({
            title: 'Estás seguro de los datos ingresados?',
            text: "Puede que tengas algún error, revisa tus datos!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
          })
        }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Encontramos un error',
        text: 'Parece ser que el usuario ingresado no se encuentra registrado.',
        footer: '<a href="/Registro">¿Deseas Registrarte?</a>'
      })
    }
    // Encontrar una solucion para esta manera de aplicar el Login en un vector
    // console.log("Comienzo con la evalución de Login: ")
    //   ListUsers.map((Mapeo) => {
    //     console.log(Mapeo.Nicname)
    //   // if (Prueba.Nicname == User){
    //   //   return true;
    //   // } else {
    //   //   console.log("No está el Usuario")
    //   // }
    // })
  }
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
                  <input type="text" className="form-control" onChange={onChangeHandler} value={User} placeholder="Ingrese su usuario" required/>
                </div>

                <div ClassName="form-group mx-sm-4 ">
                  <input type="password" className="form-control" onChange={onChangeHandlerPass} value={Password} placeholder="Password ***"/>

                </div>

                <div ClassName="form-group d-md-flex justify-content-md-center">
                  <button type="submit" className="btn btn-warning">Ingresar</button>

                </div>
              </form>
              
            </div>
          </div>
        </div>
        </div>
    );
}

export default ValidarFormLogin;