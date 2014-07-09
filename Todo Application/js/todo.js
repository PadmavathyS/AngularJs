
function TodoCtrl($scope) {
  $scope.todos = [
    {
	text:'Download phonegap',
	info:"create a  simple application",
	 done:false},
    {	text:'Android',
	info:"download the SDK tools",
	 done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({
	text:$scope.todoText,
	info:$scope.todoArea,
	 done:false});
    $scope.todoText = '';
    $scope.todoArea = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 $scope.enable=function()
 {
    this.todoText = this.todo.text;
    eGet('main').innerHTML="<p><h2>" + this.todoText +"</h2>";
    this.todoArea = this.todo.info;
    eGet('content').innerHTML=""+this.todoArea+"</p>";
 };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
  $scope.clear=function()
  {
    eGet('main').innerHTML=" ";
    eGet('content').innerHTML=" ";
  };
  
  
    $scope.enableEditor= function() {
        this.editorEnabled = true;

        this.todoText = this.todo.text;
        this.todoArea = this.todo.info;
    };
    
    $scope.disableEditor= function() {
        this.editorEnabled = false;
    };
    
    $scope.Save= function() {
        if (this.todoText === "") {
            return false;
        }

        this.todo.text = this.todoText;
        this.todo.info = this.todoArea;

        this.disableEditor();
    };

$scope.load= function() {
        //this.editorEnabled = true;

	
   eGet('main').innerHTML=this.todos[0].text;
   eGet('content').innerHTML= this.todos[0].info;
	
        //this.todoText = this.todo.text;
        //this.todoArea = this.todo.info;
    };
  
  
}

