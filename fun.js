let count=1;
let play=1;
let enter=0;
let backPermi=1;
let special_play=0;
let ans,myword;
let chance=1;
let fail=1;
let entCount=0;
let tCount,lCount,wCount;
let array1,array2,array3;
let flag=false;

if(document.cookie.length==0){
  tCount=0;
  lCount=0;
  wCount=0;
  setCookie();
  getCookie();
}
else{
  a=document.cookie.split("=")
  a11=a[0]
  a111=a11.split(";");
  array1[1]=a111[0];
  
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
  tCount=tCount+1;
  wCount=wCount+1;
  alert("you win");
  setCookie();
  getCookie();
}

function over(){
  tCount=tCount+1;
  lCount=lCount+1;
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
  document.cookie="t="+tCount+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  array1=document.cookie.split("=");
  document.cookie="w="+wCount+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  array2=document.cookie.split("=");
  document.cookie="l="+lCount+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  array3=document.cookie.split("=");
}
function getCookie()
{
  alert("looseCount="+array1[1] +"totalCount="+ array2[2]+ "winCount="+array3[3] );
}
