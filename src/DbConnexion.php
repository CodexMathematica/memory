<?php

class DbConnexion 
{

    protected function connect()
    {
        define('DBHOST', 'localhost');
        define('DBNAME', 'memory_poo');
        define('DBUSER', 'root');
        define('DBPASS', '');

        $dsn = "mysql:dbname=" . DBNAME .";host=" . DBHOST; 

        try {
            $db = new PDO($dsn, DBUSER, DBPASS);
            return $db;
           
        } catch(PDOException $e) {
            print "Erreur : " . $e->getMessage() . "<br/>";
        }
    }

}
