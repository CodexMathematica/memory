<?php

class ScoreController extends ScoreManager
{

    private string $name;
    private int $score;
    private int $time;
    private string $date;
    
    public function __construct(string $name, int $score, int $time)
    {
        $this->name = $name;
        $this->score = $score;
        $this->time = $time;
        $this->date = date('Y-m-d H:i:s');
    }

    public function newScore(): void
    {
        $this->setScore($this->name, $this->score, $this->time, $this->date);
    }

}
