console.log('hello Anant ');

// let obj={
//     name: 'Anant Yadav',
//    course:'Web devlopment',
//     phone:'9795897359',
// }

function obj(givenName){
    this.name=givenName;

}
obj.prototype.getName=function(){
    return this.name;
}
obj.prototype.setName=function( newName){
    this.name=newName;
}

let obj2= new obj('rohan das');
console.log(obj2)