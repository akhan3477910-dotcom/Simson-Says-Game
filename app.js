let gameSeq=[];
let userSeq=[];
let btn_classes=["green","red","purple","yellow"];
let h2=document.querySelector("h2");
let start=false;
let level=0;
let highest_score=0;
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game started");
        start=true;  
        levelUp();
    }
});

function flashColor(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function Userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    if(level>=highest_score){ 
    highest_score=level;
}
    h2.innerText=`Level ${level}`;
   let random_Num=Math.floor(Math.random()*4);
   let random_color=btn_classes[random_Num];
   let random_btn=document.querySelector(`.${random_color}`);
   gameSeq.push(random_color)
   console.log(gameSeq);   
   flashColor(random_btn);
}

function btnPress(){
    let btn=this;
    Userflash(btn);

    user1=btn.getAttribute("id");
    userSeq.push(user1);
    console.log(userSeq);
    CheckAns(userSeq.length-1);    
}

let all_btn=document.querySelectorAll(".divBtn");
for(btn of all_btn){
    btn.addEventListener("click",btnPress)
}
function CheckAns(ixd){
    if(gameSeq[ixd]==userSeq[ixd]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp(), 1000);
        }
    }else{
        h2.innerHTML=`Game over! Your score was ${level}. </br>
        Your highest score was ${highest_score}.</br>
         Press any key to restart the game.`
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
          document.querySelector("body").style.backgroundColor="#fff";  
        }, 150);
        console.log(h2.innerText);        
    }
}
function reset(){
    start=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}

