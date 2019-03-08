getUser()= function(){
    var userList=[];
    if( JSON.parse(localStorage.getItem('users')) != null){
     
}
return userList;
}
addUser = function(name,email,address)
{

    var userList=getUser();
       var user={};
       item.name=name;
       item.email=email;
       item.address=address;
       itemList.push(user);
    localStorage.setItem('users',JSON.stringify(userList));
    localStorage.getItem('users');

}
addUser('mano','sasd@gmail.com','india')
deleteUser= function(){
    localStorage.clear('user');
}
showUser= function(){
    var userList=getUser();
    console.log("name"+ "|"+ "email" + "address")
    console.log('list' +userList.length);
    for(var i=0;i<userList;i++){
        console.log(userList.name + '|'+ userList.email + '|'+ userList.email )
    }
}
