let count=1;
let play=1;
let enter=0;
let backPermi=1;
let special_play=0;
let ans;
let chance=1;
answer();
function front(txt) {
  if(count==7 || count==13 || count==19 || count==25 || count==31 )
  {
    play=0;
    backPermi=0;
  }
  else{
    play=1;
    backPermi=1;
  }

  if(play==1 || enter==1 || special_play==1){
  document.getElementById(count).innerHTML = txt;
  count=count+1;
  enter=0;
  special_play=0;
}
}

function back() {
  if(count==7 || count==13 || count==19 || count==25 || count==31 )
  {
    special_play=1;
    backPermi=0;
  }
  if(count>1 && backPermi==1){
  count=count-1;
  document.getElementById(count).innerHTML = "";
}
}


function ent() {
  if(count==7 || count==13 || count==19 || count==25 || count==31 )
  {
    enter=1;
    console.log(count)
    check(count);
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
    win();
  }
  else{
    chance=chance+1;
  }


}

function win(){
  alert("you win");
}
