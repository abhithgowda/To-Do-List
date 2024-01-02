var app = angular.module("toDoApp",[])

app.controller("toDoAppCntrl",function($scope){
    $scope.tasks=[
        {'TITLE':'Task-1','Completed':true,'Editing':false},
        {'TITLE':'Task-2','Completed':false,'Editing':false},
        {'TITLE':'Task-2','Completed':false,'Editing':false},
    ]
    $scope.addTask=()=>{
        if($scope.newTask){
            var t={'TITLE':$scope.newTask,'Completed':false,'Editing':false}
            $scope.taska.push(t)
        }
        else{
            alert("Please Enter the Task to Add")
        }
    }
    $scope.editTask=(task)=>{
        task.Editing=true
    }
    $scope.turnOffEditing=(task)=>{
        task.Editing=false
    }
    $scope.deleteTask=(task)=>{
        var index=$scope.task.indexOf(task)
        $scope.tasks.splice(index,1)
    }
});