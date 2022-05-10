<?php

class ScoreManager extends DbConnexion
{

    /**
     * Ajoute en BDD un enregistrement contenant le nom, le temps et le score d'un joueur.
     */
    protected function setScore(string $name, int $score, int $time, string $date): void 
    {
        $sqlC = "INSERT INTO `best_scores`(`name`, `score`, `time`, `date`) VALUES (:playerName, :score, :playTime, '$date');";
        $request = $this->connect()->prepare($sqlC);
        $request->bindValue(":playerName", $name, PDO::PARAM_STR);
        $request->bindValue(":score", $score, PDO::PARAM_INT); 
        $request->bindValue(":playTime", $time, PDO::PARAM_INT); 
        $request->execute(); 
    }

    /**
     * Retourne les 5 meilleurs enregistrements de la BDD en se basant sur le score(ou le temps en cas d'égalité du score). On retourne un tableau au final.
     */
    public function getScores(): array 
    {
        $sqlR = "SELECT `name`, `score`, `time`, `date` FROM `best_scores` ORDER BY `score` DESC, `time` LIMIT 5;";
        $request = $this->connect()->prepare($sqlR);
        $request->execute();
        $scores = $request->fetchAll();
        return $scores;
    }
}
