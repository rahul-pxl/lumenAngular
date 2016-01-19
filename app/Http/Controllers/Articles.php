<?php

namespace App\Http\Controllers;

class ArticlesController extends Controller
{
    public function intex(){

        $articles = Article:all();
        return response()->json($articles);
    }

    public getArticle($id){

        $article = Article::find($id);
        return response()->json($article);
    }

    public function saveArticle(Request $request){

        $article = Article::create($request->all());
        return response()->json($article);
    }

    public function deleteArticle($id)
    {
        $article = Article::find($id);
        $article->delete();
        return response()->json('success');
    }

    public function updateArticel(Request $request, $id)
    {
        $article->title = $request->input('title');
        $article->content = $request->input('content');

        $article->save();

        return response()->json($article);
    }
}
