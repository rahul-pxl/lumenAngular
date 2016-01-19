<h3>Update New Article</h3>
<hr />

<div class="col-md-6" ng-controller="UpdateArticleCtrl">
	<form method="post">
		<div class="form-group">
			<input ng-model="articleData.title" placeholder="Title of article" class="form-control" type="text" name="title" id="title" />
		</div>
		<div class="form-group">
			<textarea ng-model="articleData.content" placeholder="Content of article" class="form-control" name="content" id="content" />
		</div>
		<div class="form-group">
			<input ng-click="save(user_id)" class="btn btn-success" type="submit" value="Update" />
		</div>
	</form>
</div>


<!-- http://the-amazing-php.blogspot.in/2015/05/lumen-micro-framework-with-angularjs.html -->