import {getClientes,new_client} from "./API.js";

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
        
    </tr>
    `
})
}
const formulario=document.querySelector('#registrar');
formulario.addEventListener('submit',newClient);

function newClient(e){
    e.preventDefault();

    const nombre_constructora=document.querySelector('#nombre').value;
    const nit_constructora=document.querySelector('#nit').value;
    const nombre_representate=document.querySelector('#representate').value;
    const email_contacto=document.querySelector('#email').value;
    const telefono_contacto=document.querySelector('#telefono').value;

    const registro={
        id_constructora:0,
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
    }else{
        return new_client(registro);
    }


}

function validation(object)
{
return !Object.values(object).every(Element=>element!="");
}