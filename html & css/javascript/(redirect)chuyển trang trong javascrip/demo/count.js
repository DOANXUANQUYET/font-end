
var second = 5;


//ham interval [cach 1 khoang thoi gian chung ta truyen vao thi no se thuc hien cau lenh lien tuc]
var interval_second = setInterval(function(){

	if(second == 0){
		clearInterval(interval_second);
		window.location.assign("https://www.google.com");
	}

	//chon the voi id la timer
	var second_tag = document.getElementById("timer");

	//thay doi noi dung trong the
	second_tag.innerHTML = second + "<span>s giay nua..</span>";

	second--;

	},1000);