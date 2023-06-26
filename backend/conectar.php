<?php
class Conectar {
    protected $dbCnx;

    public function Conexion(){
        try{
            $conectar=$this->dbCnx=new PDO("mysql:local=localhost;dbname=alquilartemis2","root","");
            return $conectar;
        }catch(Exception $th){
            return $th->getMessage();
        }
    }
    public function set_name()
    {
        return $this->dbCnx->query("SET NAMES 'utf8' ");
    }  
}



?>