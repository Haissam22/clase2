import {getClientes,new_client,delect} from "./API.js";

document.addEventListener('DOMContentLoaded',()=>{
    cargarClientes();
})

async function cargarClientes ()
{
    const data= await getClientes();
    const tablaCliente=document.querySelector('#datosClientes');
    console.log(data);
    data.forEach(element => {
        const {email_contacto,id_constructora,nit_constructora,nombre_constructora,nombre_representante,telefono_contacto}=element;
        tablaCliente.innerHTML+=`
        <tr>
            <th scope="row">${id_constructora}</th>
            <td>${nombre_constructora}</td>
            <td>${nit_constructora}</td>
            <td>${nombre_representante}</td>
            <td>${email_contacto}</td>
            <td>${telefono_contacto}</td>
            <td><button class="btn btn-danger delete" id="${id_constructora}">ELIMINAR</button></td>
        </tr>
        `
    })
}
const formulario=document.querySelector('#registrar');
formulario.addEventListener('submit',newCliente);

function newCliente(e){
    e.preventDefault();
    const id_constructora=document.querySelector('#id').value;
    const nombre_constructora=document.querySelector('#nombre').value;
    const nit_constructora=document.querySelector('#nit').value;
    const nombre_representate=document.querySelector('#Repre_constructora').value;
    const email_contacto=document.querySelector('#email').value;
    const telefono_contacto=document.querySelector('#telefono').value;

    const registro={
        id_constructora,
        nombre_constructora,
        nit_constructora,
        nombre_representate,
        email_contacto,
        telefono_contacto 
    }
    console.log(registro);
   if(validation(registro))
    {
    alert("todos los datos son obligatorios");
    } return new_client(registro);
 


}

function validation(object)
{
return !Object.values(object).every(element=>element!="");
}
const del=document.querySelector('#datosClientes');
del.addEventListener('click',borrar);

function borrar(e) {
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        const confir=confirm("desea eliminarlo");
        if(confir){
            delect(id);
        }
    }
    
}