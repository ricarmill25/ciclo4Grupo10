<app>
    <router>
        <index/> // Pagina de Inicio, muestra menu que Permite al usuario realizar un registro en la aplicacion o loguearse
            <login>
                <router>
                    <menuUsuario> // Se identifica el rol del usuario para tener acceso a las opciones
                        
                        <gestionUsuarios> // Rol Administrador 
                            <consultaUsuarios/> // Pagina Principal de Gestion de usuarios, muestra el listado de Usuarios
                            <registroUsuarios/> // Formulario Registra un nuevo Usuario
                            <editarUsuarios/> // Formulario edita un usuario
                            <borrarUsuarios/> // Formulario Borra un usuario
                        </gestionUsuarios>
                            
                        <gestionConsorcios> // Rol Administrador - Usuario Interno
                            <crearConsorcio/> // Formulario para crear consorcio
                            <listadoConsorcio> // Opcion para acceder a la informacion de consorcios
                                <editarConsorcio/> // Formulario para editar consorcio
                                <borrarConsorcio/> // Formulario para borrar consorcio
                            </listadoConsorcio>
                        </gestionConsorcios>

                        <gestionPeajes> // Rol Administrador - Usuario Interno
                            <crearPeaje/> // Formulario para crear Peaje
                            <listadoPeaje> // Opcion para acceder a la informacion de Peajes
                                <editarPeaje/> // Formulario para editar Peaje
                                <borrarPeaje/> // Formulario para borrar Peaje
                            </listadoPeaje>
                        </gestionPeajes>

                        <realizarCobros/> // Rol Administrador - Usuario Interno 
                                          // Formulario que permite el recaudo de peajes

                        <realizarRecargas/> // Rol Administrador - Usuario Interno - Usuario Externo
                                            // Formulario que permite realizar recargas de tarjeta RFID de usuarios

                        <reportes/> // Rol Administrador - Usuario Interno - Usuario Externo
                                    // Muestra Dashboard con informacion relevante dependiendo del perfil del usuario

                        <comprarTarjeta/>   // Rol Usuario Externo
                                            // Formulario que permite al usuario externo comprar una tarjeta RFID

                        <registrarTarjeta/> //  Rol Usuario Externo
                                            // Formulario que permite al usuario externo registrar una tarjeta RFID

                    </menuUsuario>
                </router>
            </login>
            <registro/> // Registro de Usuario Externo    
    </router>
</app>