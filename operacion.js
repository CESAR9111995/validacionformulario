let nombre = document.querySelector('#nombre');
let iconoValidoNombre = document.querySelector('#icono-valido-nombre');
let iconoErrorNombre = document.querySelector('#icono-error-nombre');
let contErrorNombre = document.querySelector('#cont-error-nombre');
let textoErrorNombre = document.querySelector('#texto-error-nombre');
let iconoTextoErrorNombre = document.querySelector('#iconotexto-error-nombre');

let usuario = document.querySelector('#usuario');
let iconoValidoUsuario = document.querySelector('#icono-valido-usuario');
let iconoErrorUsuario = document.querySelector('#icono-error-usuario');
let contErrorUsuario = document.querySelector('#cont-error-usuario');
let textoErrorUsuario = document.querySelector('#texto-error-usuario');
let iconoTextoErrorUsuario = document.querySelector('#iconotexto-error-usuario');

let correo = document.querySelector('#correo');
let iconoValidoCorreo = document.querySelector('#icono-valido-correo');
let iconoErrorCorreo = document.querySelector('#icono-error-correo');
let contErrorCorreo = document.querySelector('#cont-error-correo');
let textoErrorCorreo = document.querySelector('#texto-error-correo');
let iconoTextoErrorCorreo = document.querySelector('#iconotexto-error-correo');

let password = document.querySelector('#password');
let iconoValidoPassword = document.querySelector('#icono-valido-password');
let iconoErrorPassword = document.querySelector('#icono-error-password');
let contErrorPassword = document.querySelector('#cont-error-password');
let textoErrorPassword = document.querySelector('#texto-error-password');
let iconoTextoErrorPassword = document.querySelector('#iconotexto-error-password');

let botonEnviar = document.querySelector('#btn-registro');

/* evento click */
botonEnviar.addEventListener('click', validar);

/* expresiones regulares */
const regExNomb = /^([a-zA-ZáéíóúÁÉÍÓÚ\s]{3,})+$/i;   //nombre
const regExMail = /^([^@*/]+[@]{1}[a-z]+\.[a-z]+)$/i;   //email
const regExUser = /^([a-z0-9_])+$/i;   //usuario
const regExPass = /^([^@*/]{3,})$/i; ///Contraseña



// verificar si ha escrito algo el usuario

   nombre.addEventListener('input',(e) =>{
       nombre.classList.add('input-borde-valido'); 
       iconoValidoNombre.classList.add('icono-valido-activo');
       nombre.classList.remove('input-borde-error'); 
       iconoErrorNombre.classList.remove('icono-error-activo');
       contErrorNombre.classList.remove('cont-error-activo');
       textoErrorNombre.classList.remove('texto-error-activo');
       iconoTextoErrorNombre.classList.remove('icono-textoerror-activo');
       if(e.target.value === ''){
         nombre.classList.remove('input-borde-valido'); 
         iconoValidoNombre.classList.remove('icono-valido-activo');
         nombre.classList.remove('input-borde-error'); 
         iconoErrorNombre.classList.remove('icono-error-activo');
       } 
   });


   usuario.addEventListener('input',(e) =>{
      usuario.classList.add('input-borde-valido'); 
      iconoValidoUsuario.classList.add('icono-valido-activo');
      contErrorUsuario.classList.remove('cont-error-activo');
      textoErrorUsuario.classList.remove('texto-error-activo');
      iconoTextoErrorUsuario.classList.remove('icono-textoerror-activo');
      usuario.classList.remove('input-borde-error'); 
      iconoErrorUsuario.classList.remove('icono-error-activo');
      if(e.target.value === ''){
        usuario.classList.remove('input-borde-valido'); 
        iconoValidoUsuario.classList.remove('icono-valido-activo');
        usuario.classList.remove('input-borde-error'); 
        iconoErrorUsuario.classList.remove('icono-error-activo');
      }
 });


 correo.addEventListener('input',(e) =>{
   correo.classList.add('input-borde-valido'); 
   iconoValidoCorreo.classList.add('icono-valido-activo');
   contErrorCorreo.classList.remove('cont-error-activo');
   textoErrorCorreo.classList.remove('texto-error-activo');
   iconoTextoErrorCorreo.classList.remove('icono-textoerror-activo');
   correo.classList.remove('input-borde-error'); 
   iconoErrorCorreo.classList.remove('icono-error-activo');
   if(e.target.value === ''){
     correo.classList.remove('input-borde-valido'); 
     iconoValidoCorreo.classList.remove('icono-valido-activo');
     correo.classList.remove('input-borde-error'); 
     iconoErrorCorreo.classList.remove('icono-error-activo');
   } 
});


password.addEventListener('input',(e) =>{
   password.classList.add('input-borde-valido'); 
   iconoValidoPassword.classList.add('icono-valido-activo');
   contErrorPassword.classList.remove('cont-error-activo');
   textoErrorPassword.classList.remove('texto-error-activo');
   iconoTextoErrorPassword.classList.remove('icono-textoerror-activo');
   password.classList.remove('input-borde-error'); 
   iconoErrorPassword.classList.remove('icono-error-activo');
   if(e.target.value === ''){
     password.classList.remove('input-borde-valido'); 
     iconoValidoPassword.classList.remove('icono-valido-activo');
     password.classList.remove('input-borde-error'); 
   iconoErrorPassword.classList.remove('icono-error-activo');
   } 
});
   
/** validar envio de formulario */
   function validarNombre(e){

      if(!regExNomb.test(nombre.value)){
         nombre.classList.add('input-borde-error'); 
         iconoErrorNombre.classList.add('icono-error-activo');
         contErrorNombre.classList.add('cont-error-activo');
         textoErrorNombre.classList.add('texto-error-activo');
         iconoTextoErrorNombre.classList.add('icono-textoerror-activo');
         nombre.classList.remove('input-borde-valido'); 
         iconoValidoNombre.classList.remove('icono-valido-activo');
         e.preventDefault();
      } if(nombre.value === ''){
         nombre.classList.add('input-borde-error'); 
         iconoErrorNombre.classList.add('icono-error-activo'); 
         contErrorNombre.classList.remove('cont-error-activo');
         textoErrorNombre.classList.remove('texto-error-activo');
         iconoTextoErrorNombre.classList.remove('icono-textoerror-activo');
         mensajeError();
         e.preventDefault();
      }

}  function validarUsuario(e){

   if(!regExUser.test(usuario.value)){
      usuario.classList.add('input-borde-error'); 
      iconoErrorUsuario.classList.add('icono-error-activo');
      contErrorUsuario.classList.add('cont-error-activo');
      textoErrorUsuario.classList.add('texto-error-activo');
      iconoTextoErrorUsuario.classList.add('icono-textoerror-activo');
      usuario.classList.remove('input-borde-valido'); 
      iconoValidoUsuario.classList.remove('icono-valido-activo');
      e.preventDefault();
   } if(usuario.value === ''){
      usuario.classList.add('input-borde-error'); 
      iconoErrorUsuario.classList.add('icono-error-activo'); 
      contErrorUsuario.classList.remove('cont-error-activo');
      textoErrorUsuario.classList.remove('texto-error-activo');
      iconoTextoErrorUsuario.classList.remove('icono-textoerror-activo');
      mensajeError();
      e.preventDefault();
   }

}  function validarCorreo(e){

   if(!regExMail.test(correo.value)){
      correo.classList.add('input-borde-error'); 
      iconoErrorCorreo.classList.add('icono-error-activo');
      contErrorCorreo.classList.add('cont-error-activo');
      textoErrorCorreo.classList.add('texto-error-activo');
      iconoTextoErrorCorreo.classList.add('icono-textoerror-activo');
      correo.classList.remove('input-borde-valido'); 
      iconoValidoCorreo.classList.remove('icono-valido-activo');
      e.preventDefault();
   } if(correo.value === ''){
      correo.classList.add('input-borde-error'); 
      iconoErrorCorreo.classList.add('icono-error-activo'); 
      contErrorCorreo.classList.remove('cont-error-activo');
      textoErrorCorreo.classList.remove('texto-error-activo');
      iconoTextoErrorCorreo.classList.remove('icono-textoerror-activo');
      mensajeError();
      e.preventDefault();
   }

}  function validarPassword(e){

   if(!regExPass.test(password.value)){
      password.classList.add('input-borde-error'); 
      iconoErrorPassword.classList.add('icono-error-activo');
      contErrorPassword.classList.add('cont-error-activo');
      textoErrorPassword.classList.add('texto-error-activo');
      iconoTextoErrorPassword.classList.add('icono-textoerror-activo');
      password.classList.remove('input-borde-valido'); 
      iconoValidoPassword.classList.remove('icono-valido-activo');
      e.preventDefault();
   }if(password.value === ''){
      password.classList.add('input-borde-error'); 
      iconoErrorPassword.classList.add('icono-error-activo'); 
      contErrorPassword.classList.remove('cont-error-activo');
      textoErrorPassword.classList.remove('texto-error-activo');
      iconoTextoErrorPassword.classList.remove('icono-textoerror-activo');
      mensajeError();
      e.preventDefault();
   }

}   function validar(e){
   validarNombre(e);
   validarUsuario(e);
   validarCorreo(e);
   validarPassword(e);
}