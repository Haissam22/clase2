<?php

require_once "conectar.php";

class alquiler extends Conectar{

    public function get_Clientes()
    {
        try {
            $conectar=parent::Conexion();
            parent::set_name();
            $stm=$conectar->prepare("SELECT * FROM constructoras");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $th) {
            return $th->getMessage();
        }
    }

    public function insertar_cliente($id_constructora,$nombre_constructora,$nit_constructora,$nombre_respresentate,$email,$telefono);
    {
        $conectar=parent::Conexion();
        parent::set_name();
        $stm="INSERT INTO constructora(id_constructora,nombre_constructora,nit_constructora,nombre_representate,email_contacto,telefono_contacto) value (?,?,?,?,?,?,?)";
        $stm=$conectar->prepare($stm);
        $stm->binValue(1,$id_constructora);
        $stm->binValue(1,$nombre_constructora);
        $stm->binValue(1,$nit_constructora);
        $stm->binValue(1,$nombre_representante);
        $stm->binValue(1,$email_contacto);
        $stm->binValue(1,$telefono_contacto);

    }



}

?>