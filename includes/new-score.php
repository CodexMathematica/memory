<?php
include_once '../src/DbConnexion.php';
include_once '../src/ScoreManager.php';
include_once '../src/ScoreController.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){ //&& $_SERVER['HTTP_ORIGIN'] == "https://memory.moncyberespace.fr/"
    if (isset($_POST['name'], $_POST['time'], $_POST['score']) && !isset($_POST['condition']) && !empty($_POST['name']) && strlen($_POST['name']) < 50 && strlen($_POST['name']) > 0) {
        (string) $name = strip_tags($_POST['name']);
        $score = (int) $_POST['score'];
        $time = (int) $_POST['time'];

        if ($score >= 0 && $score <= 14 && $time > 0){
            $newScore = new ScoreController($name, $score, $time);
            $newScore->newScore();
        }
    }
}
header('Location: /');
