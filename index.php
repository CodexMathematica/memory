<?php
include_once 'src/DbConnexion.php';
include_once 'src/ScoreManager.php';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu de mémoire</title>
    <link rel="stylesheet" href="assets/css/style.min.css">
    <script defer src="assets/js/game-mechanic.js"></script>
    <script defer src="assets/js/modal.js"></script>
    <script defer src="assets/js/validation.js"></script>
    <!--<script defer src="assets/js/rain.js"></script>-->
</head>
<body>
    <main>
        <h1>Jeu de mémoire Batman</h1>
        <button class="btn" id="show-score">Tableau des meilleurs scores</button>

        <?php include_once 'includes/modals/show-scores.php' ?>

        <section id="gameBoard" class="board"></section>
        <section>
            <div class="timer">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
            <p  class="rule">Trouver toutes les paires de symboles avant la fin du temps imparti.</p>
        </section>

        <?php include_once 'includes/modals/result.php' ?>

    </main>
</body>
</html>
