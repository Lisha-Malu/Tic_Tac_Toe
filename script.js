let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new");
let msgcontainer=document.querySelector(".msgcontainer");
let message=document.querySelector(".message");



let turnX=true;

const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
    if(turnX){
        box.innerText="X";
        turnX=false;
       }
       else{
        box.innerText="O";
        turnX=true;
       }
       box.disabled=true;

       checkWinner();
    });
});

const resetGame=() =>{
    turnX=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner) =>{
    message.innerText=` ${winner} Wins!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkDraw=() =>{
  let filled=true;
  boxes.forEach((box) => {
    if (box.innerText === ""){
      filled = false;
}
  });

  if(filled){
    message.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
    disableboxes();
  }
};


const checkWinner=() =>{
    for(pattern of winpattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
    checkDraw();
};



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

