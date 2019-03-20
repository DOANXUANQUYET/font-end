
//ham in canh bao ra console
console.warn("day la canh bao");

//ham tro doi setTimeout(truyen vao 1 ham,thoi gian[don vi mili s 1s = 1000ms]) tra ve timeoutId
var timeoutId = setTimeout(function(){
	alert("checking started!");
},3000);

console.log(timeoutId);

 //huy timeout dung clearTimeout(truyen vao timeoutId);
 var khongThichCho = false;
 if(khongThichCho){
 	clearTimeout(timeoutId);
 	console.log("da vo hieu hoa timeout");
 }


var isConfirm = confirm("Are you 18+ ?");

//alert
//dinh nghia ham, co the goi ham ow bat cu dau
function push(text){
	alert(text);
}

//khai bao ham, chi co the goi ben duoi phan da khai bao hoist
var posh = function(text){
	alert(text);
}

//chuyen trang
function redirect(url){
	//cau lenh chuyen trang trong javascript
	window.location.assign(url);
}

//co the gan ham vao trong bien, vd
var exampleFuntion = push;

//check age
if(isConfirm == false){

	push("not accepted");
	redirect("info.html");
}
else{
	exampleFuntion("connect succeed");
	redirect("age18.html");
}
