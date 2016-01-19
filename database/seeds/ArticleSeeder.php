<?php

use App\Article;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	Article::create([
    		'title' => 'Winston Churchill',
    		'content' => 'Success is going from failure to failure without losing your enthusiasm'
    		]);

    	Article::create([
    		'title' => 'Churchill',
    		'content' => 'Churchill! Success is going from failure to failure without losing your enthusiasm'
    		]);

    	Article::create([
    		'title' => 'Winston',
    		'content' => 'Winston! Success is going from failure to failure without losing your enthusiasm'
    		]);
    }
}
