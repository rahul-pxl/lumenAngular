<h3>{{ articles.title }}</h3>
<span>{{ articles.created_at }}</span>
<hr />
<p>{{ articles.content }}</p>

<a class="btn btn-info btn-sm" href="#/update/{{articles.id}}">Update</a>
<a class="btn btn-danger btn-sm" href="#/delete/{{articles.id}}">Delete</a>