<?php

header(
    "Content-Type:application/json"
);

require_once "conectar.php";
require_once "models.php";

$alquilar=new alquiler();

$body=json_decode(file_get_contents("php://input"),true);

switch ($_GET['op']) {
    case 'GetAll':
        $datos=$alquilar->get_Clientes();
        echo json_encode($datos);
        break;
    case 'insert':
        $data=$alquilar->insertar_cliente($body['id_constructora'],$body['nombre_constructora'],$body['nit_constructora'],$body['nombre_representante'],$body['email_contacto'],$body['telefono_contacto']);
        echo json_encode("los datos fueron registrados correctamente")
        break;
    default:
        # code...
        break;
}

?>