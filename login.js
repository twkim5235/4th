
sessionStorage.clear();

function alertButton(str)
{
    alert(str);

}

function httpPostJoin()
{
    var formData = new FormData();

    //id:qwer1234 password:qwer1234
    formData.append("userid", "qwer1234");
    formData.append("password", "qwer1234");

    var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
    req.open("POST", "http://1.255.134.177:1323/signup",1);
    req.send(formData);
}

function httpPostLogin()
{
    var formData = new FormData();

    //id:qwer1234 password:qwer1234
    formData.append("userid", "qwer1234");
    formData.append("password", "qwer1234");

    var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
    req.open("POST", "http://1.255.134.177:1323/login",1);
    req.send(formData);
    req.onreadystatechange = responseFunction;
}

//서버로부터 받은 데이터 처리
function responseFunction()
{
    var token = null; 
    let responData = this.response;

    // 데이터를 받은 뒤, json 형식으로 처리
    responData = JSON.parse(responData);
    token = responData.token;

    //세션에 저장
    sessionStorage.setItem("token", token);

    changeUrl();

}

function changeUrl()
{
    var url = "calender.html";

    location.href = url;
}