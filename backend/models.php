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

    public function insertar_cliente($id_constructora,$nombre_constructora,$nit_constructora,$nombre_representate,$email_contacto,$telefono_contacto)
    {
        try {
            $conectar=parent::Conexion();
            parent::set_name();
            $stm="INSERT INTO constructoras(id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto) value (?,?,?,?,?,?)";
            $stm=$conectar->prepare($stm);
            $stm->bindValue(1,$id_constructora);
            $stm->bindValue(2,$nombre_constructora);
            $stm->bindValue(3,$nit_constructora);
            $stm->bindValue(4,$nombre_representate);
            $stm->bindValue(5,$email_contacto);
            $stm->bindValue(6,$telefono_contacto);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $th) {
            echo $th->getMessage();
        }
    }
    public function delect($id){
        $conectar=parent::Conexion();
        parent::set_name();
        $stm="DELETE FROM constructoras WHERE id_constructora=?";
        $stm=$conectar->prepare($stm);
        $stm->bindValue(1,$id);
        $stm->execute();
        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }



}

?>