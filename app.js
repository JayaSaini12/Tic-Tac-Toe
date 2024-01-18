let boxes=document.querySelectorAll(".box");
let rest_btn=document.querySelector("#rst-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;//playerx,player0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const restGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0){
            //player0
            box.innerText="0";
            turn0=false;
        }
        else{
            //playerx
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
                if(pos1Val==pos2Val&&pos2Val==pos3Val){
                    // console.log("winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
}

newGamebtn.addEventListener("click",restGame);
rest_btn.addEventListener("click",restGame);

