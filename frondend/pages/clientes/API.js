const urlClient="http://localhost/ejemplo/clase2/backEnd/controls.php?op=GetAll";
const urlNewCli="http://localhost/ejemplo/clase2/backEnd/controls.php?op=insert";

export const getClientes=async ()=>{
    try {
        const clientes= await fetch(urlClient);
        const datosClientes=clientes.json();
        return datosClientes;
    } catch (error) {
        console.log(error);
    }
    
}

export const new_client=async(registrar)=>{
    try {
        await fetch($url,{
            method:"POST",
            body:JSON.stringify(registrar),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}