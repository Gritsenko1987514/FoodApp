this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/addFood.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--Form for the addition of a scratch, Requires: Title, Content. Optional Email option available-->\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_Title">Task Name</label>\r\n\t\t<input type = "text" class = "form-control" ng-model = "Task.taskname"></input>\r\n\t</div>\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Task Date</label>\r\n\t\t\t<input type = "date" class = "form-control" ng-model = "Task.taskdate"></input>\r\n\t</div>\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Task estimation</label>\r\n\t\t<textarea type = "textarea" class = "form-control"  ng-model = "Task.taskpoints"></textarea>\r\n\t</div>\r\n\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Task estimation</label>\r\n\t\t<textarea type = "textarea" class = "form-control"  ng-model = "Task.taskestimation"></textarea>\r\n\t</div>\r\n\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Task summary</label>\r\n\t\t<textarea type = "textarea" class = "form-control"  ng-model = "Task.tasksummary"></textarea>\r\n\t</div>\r\n\r\n\r\n\r\n\t<div class = "form-group">\r\n\t\t<button ng-click = "addFood()" type = "submit"  ng-click="addFood()" class = "btn btn-primary">ADD</button>\r\n\t</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/editFood.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--Form for the addition of a scratch, Requires: Title, Content. Optional Email option available-->\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_Title">Food Name</label>\r\n\t\t<input type = "text" class = "form-control" placeholder = "Task.taskname" ng-model = "Task.taskname"></input>\r\n\t</div>\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Food review</label>\r\n\t\t<input type = "date" class = "form-control" value="Task.taskdate | date:\'yyyy-MM-dd\' " ng-model = "Task.taskdate"></input>\r\n\t</div>\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Task estimation</label>\r\n\t\t<textarea type = "textarea" class = "form-control" placeholder="Task.taskpoitns" ng-model = "Task.taskpoints"></textarea>\r\n\t</div>\r\n\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Food Location</label>\r\n\t\t<textarea type = "textarea" class = "form-control"placeholder = "Task.taskestimation" ng-model = "Task.taskestimation"></textarea>\r\n\t</div>\r\n\r\n\t<div class = "form-group">\r\n\t\t<label for = "scratch_content">Food category</label>\r\n\t\t<textarea type = "textarea" class = "form-control" placeholder = "Task.tasksummary"  ng-model = "Task.tasksummary"></textarea>\r\n\t</div>\r\n\r\n\r\n\t <p>{{user.role}}</p>\r\n\t <div ng-if="user.role==\'admin\'">\r\n\t <button class="btn btn-sm btn-primary"><i class="fa fa-fw fa-eye"></i>Pending</button>\r\n\t <button class="btn btn-sm btn-success"><i class="fa fa-fw fa-eye"></i>Success</button></div>\r\n\r\n\r\n\t<div class = "form-group">\r\n\t\t<button ng-click = "editFood()" type = "submit" class = "btn btn-primary">ADD</button>\r\n\t</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/food.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<nav class="navbar navbar-inverse navbar-fixed-top">\r\n\t<div class="container">\r\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\r\n\t\t<div class="navbar-header">\r\n\t\t\t<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">\r\n\t\t\t\t<span class="sr-only">Toggle navigation</span>\r\n\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t\t<span class="icon-bar"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class="navbar-brand text-uppercase" href="/">FOOD<span class="label label-success text-capitalize">Free</span></a>\r\n\t\t</div>\r\n\r\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n\t\t<div class="collapse navbar-collapse" id="navigation">\r\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\r\n\t\t\t\t\t\t<li><button type="button" class="btn btn-success navbar-btn btn-circle" ui-sref="addFood" >Add food</button></li>\r\n\t\t\t\t\t\t<li><button type="button" class="btn btn-success navbar-btn btn-circle" ng-click="logout()" >Logout</button></li>\r\n\t\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n\r\n<div class="container" style="margin-top:100px;">\r\n\t\t<!-- Begin of rows -->\r\n\t\t<div class="row carousel-row" ng-repeat="Task in Fooditem">\r\n\t\t\t\t<div class="col-xs-8 col-xs-offset-2 slide-row" id="{{Food.id}}">\r\n\t\t\t\t\t\t<div id="carousel-1" class="carousel slide slide-carousel" data-ride="carousel">\r\n\t\t\t\t\t\t\t<!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t<div class="carousel-inner">\r\n\t\t\t\t\t\t\t\t<div class="item active">\r\n\t\t\t\t\t\t\t\t <h1 class=\'taskestimation\'>{{Task.taskestimation}}</h1>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="slide-content">\r\n\t\t\t\t\t\t\t\t<h4>{{Task.taskname}}</h4>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t{{Task.tasksummary}}\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="slide-footer">\r\n\t\t\t\t\t\t\t\t<span class="pull-right buttons">\r\n\t\t\t\t\t\t\t\t\t  <button class="btn btn-sm btn-primary" ng-if="Task.taskapproval == \'pending\' "><i class="fa fa-fw fa-eye"></i>Pending</button>\r\n\t\t\t\t\t\t\t\t\t  <button class="btn btn-sm btn-success" ng-if="Task.taskapproval == \'done\' "><i class="fa fa-fw fa-eye"></i>Success</button>\r\n\t\t\t\t\t\t\t\t\t\t  <button class="btn btn-sm btn-danger" ng-if="Task.taskapproval == \'rejected\' "><i class="fa fa-fw fa-eye"></i>Rejected</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-success" ui-sref = "viewFood({id:Task.id})"><i class="fa fa-fw fa-eye"></i>View</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-primary"  ui-sref="editFood({id:Task.id})"><i class="fa fa-fw fa-edit"></i>Edit</button>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n</div>\r\n\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="wrapper">\r\n    <nav class="navbar navbar-inverse navbar-fixed-top">\r\n      <div class="container">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class="navbar-header">\r\n          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">\r\n            <span class="sr-only">Toggle navigation</span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n          </button>\r\n          <a class="navbar-brand text-uppercase" href="#">Bounty<span class="label label-success text-capitalize">Rec</span></a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class="collapse navbar-collapse" id="navigation">\r\n            <ul class="nav navbar-nav navbar-right">\r\n                <li><button type="button" class="btn btn-success navbar-btn btn-circle"  data-toggle="modal" data-target="#myModal">Sign in</button></li>\r\n            </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n\r\n\r\n\r\n    <header class="header">\r\n        <div class="container">\r\n          <div class="row">\r\n            <div class="container">\r\n              <div class="card card-container">\r\n                      <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->\r\n                  <form class="form-signin">\r\n                      <span id="reauth-email" class="reauth-email"></span>\r\n                      <div class="error" id="error"></div>\r\n                      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" ng-model="user.signemail" required autofocus>\r\n                      <input type="password" id="inputPassword" class="form-control" placeholder="Password" ng-model="user.signpassword" required>\r\n                      <button class="btn btn-lg btn-primary btn-block btn-signin" ng-click="signIn()" type="submit">Sign in</button>\r\n                  </form><!-- /form -->\r\n              </div><!-- /card-container -->\r\n          </div><!-- /container -->\r\n          </div>\r\n        </div>\r\n    </header>\r\n\r\n  </div>\r\n';

}
return __p
};

this["JST"]["assets/templates/viewFood.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="wrapper">\r\n    <nav class="navbar navbar-inverse navbar-fixed-top">\r\n      <div class="container">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class="navbar-header">\r\n          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">\r\n            <span class="sr-only">Toggle navigation</span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n          </button>\r\n          <a class="navbar-brand text-uppercase" href="#">FOOD<span class="label label-success text-capitalize">Free</span></a>\r\n        </div>\r\n\r\n        <div class="collapse navbar-collapse" id="navigation">\r\n            <ul class="nav navbar-nav navbar-right">\r\n                <li><button type="button" class="btn btn-success navbar-btn btn-circle" ng-click="logout()" >Logout</button></li>\r\n\r\n            </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n\r\n\r\n\r\n<div class="container" style="margin-left:250px;">\r\n    <div class="row">\r\n        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">\r\n            <div class="box">\r\n                <div class="box-icon">\r\n                    <span class="fa fa-4x fa-bell"></span>\r\n                </div>\r\n                <div class="info">\r\n                    <h4 class="text-center">{{scratch.taskname}}</h4>\r\n                    <p>Review:{{scratch.tasksummary}}</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Location:{{scratch.taskestimate}}</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Category:{{scratch.taskpoint}}</p>\r\n                    <a ui-sref="scratchpad" class="btn" ui-sref="food">Back</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n  <!--\r\n          <div class="row">\r\n            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">\r\n          <button class="btn btn-sm btn-success fa fa-3x fa-check upvote" ng-click="upvote()"><i ></i>{{scratch.foodupvote}}</button>\r\n          <button class="btn btn-sm btn-danger fa fa-3x fa-close downvote" ng-click="downvote()"></i>{{scratch.fooddownvote}}</button>\r\n          </div>\r\n      </div> -->\r\n\r\n\r\n      <div class="commentcontainer">\r\n        <div class="row">\r\n    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">\r\n    <div class="well">\r\n        <h4>What is on your mind?</h4>\r\n    <div class="input-group">\r\n        <input type="text" class="form-control input-sm chat-input" placeholder="Write your message here..." ng-model="scratch.foodcomment"  />\r\n\t    <span class="input-group-btn" ng-click="addComment()">\r\n            <button class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-comment"></span> Add Comment</button>\r\n        </span>\r\n    </div>\r\n    <hr data-brackets-id="12673">\r\n    <ul data-brackets-id="12674" id="sortable" class="list-unstyled ui-sortable" ng-repeat="cmt in comment">\r\n        <strong class="pull-left primary-font">{{cmt.email}}</strong>\r\n        <small class="pull-right text-muted">\r\n           <span class="glyphicon glyphicon-time"></span></small>\r\n        </br>\r\n        <li class="ui-state-default">{{cmt.foodcomment}}</li>\r\n        </br>\r\n    </ul>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/viewuser.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>view user page</p>\n';

}
return __p
};