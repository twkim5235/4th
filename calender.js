//전역변수
var arrMonth = ["JAN", "FEB", "MAR", 
"APR", "MAY", "JUN", 
"JUL", "AUG", "SEP", 
"OCT", "NOV", "DEC"];//달 배열
var numMonth = 0;//달 숫자
var numYear = 0;//년 숫자
var numDay = 0;//일 숫자
var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
let getData;
let idArray;

var d = 0;

getDetail();
nowMonth();
InitMonth();
fillMonth(findToday(numYear, numMonth + 1, 1));
//renewTask();

function logOut()
{
    var url = "login.html"

    location.href= url;
}

function nextMonth()
{
    var selDate = new Date;
    
    if(numMonth < 11)
    {
        numMonth += 1;
    }
    else
    {
        numMonth = 0;
        numYear += 1;
    }
    //요일 찾기
    selDate = findToday(numYear, numMonth + 1, 1);
    
    InitMonth();
    fillMonth(selDate);

    let x = document.getElementsByClassName("data")[0];
    x.innerText = arrMonth[numMonth] + "\n" + numYear;
}

function prevMonth()
{
    var selDate = new Date;

    if(numMonth > 0)
    {
        numMonth -= 1;
    }
    else
    {
        numMonth = 11;
        numYear -= 1;
    }
    //요일 찾기
    selDate = findToday(numYear, numMonth + 1, 1);

    InitMonth();
    fillMonth(selDate);

    let x = document.getElementsByClassName("data")[0];
    x.innerText = arrMonth[numMonth] + "\n" + numYear;
}

function nowMonth()
{
    let today = new Date();
    numMonth = today.getMonth();
    numYear = today.getFullYear();

    let x = document.getElementsByClassName("data")[0];
    x.innerText = arrMonth[numMonth] + "\n" + numYear;
}

function InitMonth()
{
    let x = document.getElementsByClassName("ha")[0];
    x.innerHTML = "";

}

/*
function fillMonth(numDay)
{
    let x = document.getElementsByClassName("ha")[0];
    var str = "";
    var i;
    var num;

    for(i = 1; i < 43; i++)
    {
        
        if(i <= (numMonth))
        {
            
            if(i > 7 && i % 7 == 1)
            {
                str += "<ul><li>" + (43 - (numMonth - i +1)) + "</li>";
            }
            else if(i % 7 == 1)
            {
                str += "<ul><li>"+ (43-numMonth) + "</li>";
            }
            else if(i % 7 == 0)
            {
                str += "<li>" + (43 - (numMonth - i +1)) + "<li></ul>";
            }
            else
            {
                str += "<li>" + (43 - (numMonth - i +1)) + "</li>";
            }
        }
        else
        {
            if(i % 7 == 1)
            {
                str += "<ul><li>"+ (i - numMonth) + "</li>";
            }
            else if(i % 7 == 0)
            {
                str += "<li>" + (i - numMonth) + "<li></ul>";
            }
            else
            {
                str += "<li>" + (i - numMonth) + "</li>";
            }
        }
    }

    x.innerHTML = str;
}
*/

function fillMonth(selDate)
{
    var d = new Date;
    d = selDate;
    numDay = d.getDay();
    let x = document.getElementsByClassName("ha")[0];
    var str = "";
    var i;
    var num = 0;

    var numDate;
    d.setDate(d.getDate() - 1);
    numDate = d.getDate();

    //해당 월 마지막날 구하기
    d.setDate(d.getDate() +1);
    d.setMonth(d.getMonth()+1);
    d.setDate(d.getDate() - 1);

    for(i = 1; i < 43; i++)
    {
        ++num;
            if(num <= (numDay))
            {
                
                if(num > 7 && num % 7 == 1)
                {
                    str += "<ul><li class = \"diff weekend\" onclick =\"getSpecDate(event)\">" + (43 - (numDay - num +1) - 11) + "</li>";
                }
                else if(num % 7 == 1)
                {
                    str += "<ul><li class = \"diff weekend\" onclick =\"getSpecDate(event)\">"+ (++numDate - numDay) + "</li>";
                }
                else if(num % 7 == 0)
                {
                    str += "<li class = diff onclick =\"getSpecDate(event)\">" + (43 - (numDay - num +1) - 11) + "</li></ul>";
                }
                else
                {
                    str += "<li class = diff onclick =\"getSpecDate(event)\">" + (++numDate - numDay) + "</li>";
                }
            }
            else
            {
                numDate = d.getDate();
                if(num - numDay >= numDate+1)
                {
                    if(num % 7 == 1)
                    {
                        str += "<ul><li class = \"diff weekend\" onclick =\"getSpecDate(event)\">"+ (num - numDate - numDay) + "</li>";
                    }
                    else if(num % 7 == 0)
                    {
                        str += "<li class = diff onclick =\"getSpecDate(event)\">" + (num - numDate - numDay) + "</li></ul>";
                    }
                    else
                    {
                        str += "<li class = diff onclick =\"getSpecDate(event)\">" + (num - numDate - numDay) + "</li>";
                    }
                }
                else
                {
                    if(num % 7 == 1)
                    {
                        str += "<ul><li class = weekend onclick =\"getSpecDate(event)\">"+ (num - numDay) + "</li>";
                    }
                    else if(num % 7 == 0)
                    {
                        str += "<li onclick =\"getSpecDate(event)\">" + (num - numDay) + "</li></ul>";
                    }
                    else
                    {
                        str += "<li onclick =\"getSpecDate(event)\">" + (num - numDay) + "</li>";
                    }
                }
            }
        }

    x.innerHTML = str;
}

function findToday(numYear, numMonth, numDay)
{
    var selDate = "" + numYear + "-" + numMonth + "-" + numDay;
    var d = new Date(selDate);

    return d;
}

function changeRed()
{
    let x=document.getElementsByClassName("lightblue");

    let str = ["","",""];
    let length = x.length;

    for(var i = 0; i < length; i++)
    {
    
        if(i == 2)
           x[0].className = "task gray";
        else
           x[0].className = "gray";
        
    }

}

function changelBlue()
{
    let x=document.getElementsByClassName("gray");

    let str = ["","",""];
    let length = x.length;

    for(var i = 0; i < length; i++)
    {
    
        if(i == 2)
           x[0].className = "task lightblue";
        else
           x[0].className = "lightblue";
        
    }
}

function changeYellow()
{

}

function changeBlack()
{

}

function insert(event)
{
    if(event.target.className == 'work')
    {
        var temp = document.createElement('li');
        temp.className = "works";
        temp.innerHTML = "<div class = \"detail\"> <input type=\"checkbox\"><input type=\"text\" class = inputText onkeydown = downEnter(event)><input type = \"button\" class = \"removeButton\" onclick=\"deleteDetail()\"></div>"
        let intemp = document.getElementsByClassName("details");

        intemp[0].append(temp);

        getDetail();
    }
}

function remove()
{
    var temp = document.createElement('div');
    temp.className = "works";
    temp.innerHTML = '<li><div class = \"detail\"> <input type=\"checkbox\"><input type=\"text\"><input type = \"button\" class = \"removeButton\" onclick=\"deleteDetail()\"></div><li>'
    let intemp = document.getElementsByClassName('works');
    intemp[intemp.length-1].remove(temp);
    deleteDetail();
    getDetail();
}

function putDetail(text)
{
    if(text != "")
    {
        var n = new Date;
        n.setHours(0);
        n.setMinutes(0);
        n.setSeconds(30);
        n.setMilliseconds(0);

        let startDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay*1 +1);
        let endDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay*1 +1);

        var Body = {
            Version:"1.1",
            TodoList:
            [
                {
                    startdate: new Date(startDate).toISOString(), // 함수: Date를 DB에 맞는 포맷으로 바꿈
                    enddate: new Date(endDate).toISOString(),
                    status: 'wow',
                    title: text
                }
            ]
            
        };
        var string = JSON.stringify(Body);


        var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
        req.open("PUT", "http://1.255.134.177:1323/todo",0);
        req.setRequestHeader("Authorization", "Bearer "+sessionStorage.getItem("token"));
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("Accept", "application/json");
        req.send(string);
    }
}

function renewTask()
{
    let x = document.getElementsByClassName("details");
    x[0].innerHTML = `<div calss= details></div>`;
    for(var i  = 0; i < idArray.length; i++)
    {
        x[0].innerHTML += "<li class = works><div class = \"detail\"><input type=\"checkbox\"><input type=\"text\" class = inputText><input type = \"button\" class = \"removeButton\" onclick=\"remove()\"></div></li>";
    }

    for(var i = 0; i < idArray.length; i++)
    {
        document.getElementsByClassName("inputText")[i].value = idArray[i].title;
    }
}

function getDetail()
{
    var startDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay) + "T00:00:00Z";
    var endDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay) + "T23:59:59.999Z";
    var quertstring = "userid=" + "qwer1234" + "&from=" + startDate+ "&to="+endDate;

    var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
    req.open("GET", "http://1.255.134.177:1323/todo?" + quertstring,1);
    req.setRequestHeader("Authorization", "Bearer "+sessionStorage.getItem("token"));
    req.setRequestHeader("Content-Type", "application/json");
    req.send(null);
    req.onload = getResponse;
}

function getSpecDate(event)
{
    numDay = event.target.innerText;
    var startDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay) + "T00:00:00Z";
    var endDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay) + "T23:59:59.999Z";
    var quertstring = "userid=" + "qwer1234" + "&from=" + startDate+ "&to="+endDate;

    var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
    req.open("GET", "http://1.255.134.177:1323/todo?" + quertstring);
    req.setRequestHeader("Authorization", "Bearer "+sessionStorage.getItem("token"));
    req.setRequestHeader("Content-Type", "application/json");
    req.send(null);
    req.onload = getResponseData;
}

function getDateE()
{
    var startDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay) + "T00:00:00Z";
    var endDate = ""+numYear+"-"+(numMonth+1)+"-"+(numDay) + "T23:59:59.999Z";
    var quertstring = "userid=" + "qwer1234" + "&from=" + startDate+ "&to="+endDate;

    var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
    req.open("GET", "http://1.255.134.177:1323/todo?" + quertstring,1);
    req.setRequestHeader("Authorization", "Bearer "+sessionStorage.getItem("token"));
    req.setRequestHeader("Content-Type", "application/json");
    req.send(null);
    req.onload = getResponseData;
}

function getResponseData()
{
    var s = JSON;
    var toDoList = "";
    getData = this.response;
    getData = JSON.parse(getData);
    toDoList = getData.todolist;
    idArray = new Array(toDoList.length);

    for(var i = 0; i < toDoList.length; i++)
    {
        idArray[i] = toDoList[i];
    }

    renewTask();
}

function getResponse()
{
    var s = JSON;
    var toDoList = "";
    getData = this.response;
    getData = JSON.parse(getData);
    toDoList = getData.todolist;
    idArray = new Array(toDoList.length);

    for(var i = 0; i < toDoList.length; i++)
    {
        idArray[i] = toDoList[i];
    }
    
}


function deleteDetail()
{
    var Body = {
        Version:"1.1",
        TodoList:
        [
            {
                id: idArray[idArray.length - 1].ID
            },
        ]
        
    };
    var string = JSON.stringify(Body);


    var req = new XMLHttpRequest(); //HTTP 요청을 만들 수 있는 새로운 객체 생성
    req.open("DELETE", "http://1.255.134.177:1323/todo",0);
    req.setRequestHeader("Authorization", "Bearer "+sessionStorage.getItem("token"));
    req.setRequestHeader("Content-Type", "application/json");
    req.send(string);
}

function downEnter(event)
{
    if(event.keyCode == 13)
    {
        var x = document.getElementsByClassName("inputText");
        var text = event.target.value;
        putDetail(text);
    }
}


/*
window.addEventListener("beforeunload", function(e)
{
    if(closing_window)
    {
        sessionStorage.clear();
    }
})
*/