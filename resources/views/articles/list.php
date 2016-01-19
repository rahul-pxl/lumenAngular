<h3>Total number of articles {{articles.length}}</h3>
<a href="#/create" class="btn btn-default"> Create New</a>
<hr />
<ul>
	<li ng-repeat="article in articles">
		<a href="#/{{ article.id }}">
			<span>{{ article.title }}</span>
			<p>{{ article.content }}</p>
		</a>
		<a class="btn btn-info btn-sm" href="#/update/{{article.id}}">Update</a>
		<a class="btn btn-danger btn-sm" href="#/delete/{{articles.id}}">Delete</a>
	</li>
</ul>