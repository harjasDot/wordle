let count=1;
let play=1;
let enter=0;
let backPermi=1;
let special_play=0;
let ans,myword;
let chance=1;
let fail=1;
let entCount=0;
let tCount=0;
let lCount=0;
let wCount=0;
let flag=false;
let array;
let a1=0;
let a2=0;
let a3=0;
if(document.cookie.length==0){
  setCookie();
  getCookie();
}
answer();
function front(txt) {
  if(count==7 || count==13 || count==19 || count==25 || count==31 || count==37)
  {
    play=0;
    backPermi=0;

  }
  else{
    play=1;
    backPermi=1;
  }
  if(count==7 && entCount==1){
    play=1;
  }
  else if(count==13 && entCount==2){
    play=1;
  }
  else if(count==19 && entCount==3){
    play=1;
  }
  else if(count==25 && entCount==4){
    play=1;
  }
  else if(count==31 && entCount==5){
    play=1;
  }
  else if(count==37 && entCount==6){
    play=1;
  }


  if(play==1 || enter==1 || special_play==1){
  document.getElementById(count).innerHTML = txt;
  count=count+1;
  enter=0;
  special_play=0;
 }

 if (count>37){
   count=37;
 }
}

function specialBack(count){
  if(entCount==0){
    if(count==7){
        document.getElementById(count-1).innerHTML = "";
        backPermi=1;
    }
  }
  else if(entCount==1){
    if(count==13){
        document.getElementById(count-1).innerHTML = "";
        backPermi=1;
    }
  }
  else if(entCount==2){
    if(count==19){
        document.getElementById(count-1).innerHTML = "";
        backPermi=1;
    }
  }
  else if(entCount==3){
    if(count==25){
        document.getElementById(count-1).innerHTML = "";
        backPermi=1;
    }
  }
  else if(entCount==4){
    if(count==31){
        document.getElementById(count-1).innerHTML = "";
        backPermi=1;
    }
  }
  else if(entCount==5){
    if(count==37){
        document.getElementById(count-1).innerHTML = "";
        backPermi=1;
    }
  }
}

function back() {
  if(count==7 || count==13 || count==19 || count==25 || count==31 || count==37 )
  {
    special_play=1;
    backPermi=0;
    specialBack(count);
  }
  else if(count==8 && entCount==1){
    backPermi=1;
    flag=true;
  }
  else if(count==14 && entCount==2){
    backPermi=1;
    flag=true;
  }
  else if(count==20 && entCount==3){
    backPermi=1;
    flag=true;
  }
  else if(count==26 && entCount==4){
    backPermi=1;
    flag=true;
  }
  else if(count==32 && entCount==5){
    backPermi=1;
    flag=true;
  }

 if(count>1 && backPermi==1 && flag==true){
 count=count-1;
 document.getElementById(count).innerHTML = "";
 backPermi=0;
 flag=false;
}
if(count>1 && backPermi==1){
count=count-1;
document.getElementById(count).innerHTML = "";
}
if (count>37){
 count=37;
}

}

function ent() {
  if(count==7 || count==13 || count==19 || count==25 || count==31 || count==37)
  {
    entCount=entCount+1;
    enter=1;
    //console.log(count)
    check(count);
    color(count);
    if(count==37 && fail==1){
      over();
    }
  }
  if (count>37){
    count=37;
  }


}

function answer(){
  n=Math.round(Math.random()*100);
  list = ["expert", "anyone", "answer", "appeal", "afford", "arrive", "attack", "almost",
          "purple", "annual", "battle", "behind", "belive", "belief", "bright", "belong",
          "yellow", "broken", "breath", "button", "camers", "circle", "client", "closed",
          "orange", "danger", "coffee", "dealer", "custom", "debate", "defeat", "desire",
          "choice", "detail", "dinner", "doctor", "during", "eating", "eaisly", "ensure",
          "random", "eidtor", "except", "escape", "export", "expand", "flight", "forced",
          "golden", "ground", "global", "health", "hidden", "impact", "honest", "injury",
          "junior", "latest", "lawyer", "losing", "making", "mainly", "luxury", "manage",
          "mature", "mental", "medium", "mostly", "mutual", "mostly", "palace", "planet",
          "person", "permit", "patent", "player", "police", "prefer", "pocket", "please",
          "proper", "proven", "raised", "public", "random", "rather", "region", "regard",
          "remote", "remove", "result", "resort", "sample", "salary", "source", "simply",
          "stable", "sprint", "summit", "sudden", "system", "talent", "target", "though"]
  ans=list[n];

}

function check(count){
  count=count-1;
  myword_arry=[document.getElementById(count-5).innerHTML,document.getElementById(count-4).innerHTML,document.getElementById(count-3).innerHTML,document.getElementById(count-2).innerHTML,document.getElementById(count-1).innerHTML,document.getElementById(count).innerHTML];
  myword_caps=myword_arry.join("");
  myword=myword_caps.toLowerCase();
  if(myword==ans){
    fail=0;
    win();
  }
  else{
    chance=chance+1;
  }
}

function win(){
  a2[8]=a2[8]+1
  a3[10]=a3[10]+1;
  alert("you win");
  setCookie();
  getCookie();
}

function over(){
  a2[8]=a2[8]+1;
  a1[11]=a1[11]+1;
  alert("over/ word was"+ans);
  setCookie();
  getCookie();
}

function color(count){
  count=count-1;
  a=0;
  for (let i = count-6; i < count; i++)
  {
  k=i+1;
  var element = document.getElementById("0"+k);
  //console.log(i);
  pos=ans.search(myword[a]);
  if(myword[a]==ans[a] )
  {
    element.classList.add("green");
    document.getElementById(myword_caps[a]).classList.add("green");

  }
  else if(myword[a]!=ans[a] && pos==-1){
    element.classList.add("red");
    document.getElementById(myword_caps[a]).classList.add("red");
  }
  else if(myword[a]!=ans[a] && pos!=-1){
    element.classList.add("yellow");
    document.getElementById(myword_caps[a]).classList.add("yellow");
  }
  a=a+1
  }
}


//cookies
function setCookie()
{
  document.cookie="tCount="+tCount+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  document.cookie="winCount="+wCount+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  document.cookie="looseCount="+lCount+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}
function getCookie()
{
  var array=document.cookie.split(";");
  a1=array[0];
  a2=array[1];
  a3=array[2];
  alert("looseCount="+a1[11] +"totalCount="+ a2[8]+ "winCount="+a3[10]);
}
