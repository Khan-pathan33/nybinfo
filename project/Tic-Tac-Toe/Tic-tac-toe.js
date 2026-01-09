let board=["","","","","","","","",""];
let current="X";
let level=1;
let unlocked=1;
let gameOver=false;
let mode="pvp";

/* SCREENS */
const screens={home,game,win,levels};
function show(name){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* START GAME */
function startGame(m,lvl=level){
  mode=m;
  level=lvl;
  board.fill("");
  current="X";
  gameOver=false;
  turn.textContent="X TURN";
  strike.setAttribute("x1",0);
  strike.setAttribute("y1",0);
  strike.setAttribute("x2",0);
  strike.setAttribute("y2",0);
  boardEl.innerHTML="";
  show("game");
  createBoard();
}

/* CREATE BOARD */
const boardEl=document.getElementById("board");
function createBoard(){
  for(let i=0;i<9;i++){
    const c=document.createElement("div");
    c.className="cell";
    c.onclick=()=>move(i,c);
    boardEl.appendChild(c);
  }
}

/* MOVE */
function move(i,cell){
  if(board[i] || gameOver) return;

  board[i]=current;
  cell.textContent=current;
  cell.classList.add(current.toLowerCase());

  const winCombo=getWin(current);
  if(winCombo){
    gameOver=true;
    drawStrike(winCombo); // updated strike
    setTimeout(()=>showWin(current),800);
    return;
  }

  if(board.every(v=>v)) {
    gameOver=true;
    setTimeout(()=>showWin("Draw"),800);
    return;
  }

  current=current==="X"?"O":"X";
  turn.textContent=current+" TURN";

  if(mode==="ai" && current==="O") setTimeout(aiMove,400);
}

/* AI MOVE */
function aiMove(){
  const empty=board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
  const moveIndex=empty[Math.floor(Math.random()*empty.length)];
  if(moveIndex!==undefined) move(moveIndex, boardEl.children[moveIndex]);
}

/* WIN CHECK */
function getWin(p){
  const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  return w.find(a=>a.every(i=>board[i]===p));
}

/* STRIKE - UPDATED VERSION FROM CODE1 */
const strike = document.getElementById("strike");
function drawStrike(a){
  const cells = document.querySelectorAll(".cell");
  const svgRect = strike.parentElement.getBoundingClientRect(); // board wrapper
  const first = cells[a[0]].getBoundingClientRect();
  const last = cells[a[2]].getBoundingClientRect();

  const x1 = first.left + first.width/2 - svgRect.left;
  const y1 = first.top + first.height/2 - svgRect.top;
  const x2 = last.left + last.width/2 - svgRect.left;
  const y2 = last.top + last.height/2 - svgRect.top;

  strike.setAttribute("x1", x1);
  strike.setAttribute("y1", y1);
  strike.setAttribute("x2", x2);
  strike.setAttribute("y2", y2);

  strike.style.display = "block";

  // Animate strike line
  const length = Math.hypot(x2-x1, y2-y1);
  strike.style.strokeDasharray = length;
  strike.style.strokeDashoffset = length;
  strike.style.transition = "stroke-dashoffset 0.2s ease-in";
  setTimeout(() => strike.style.strokeDashoffset = 0, 50);
}

/* WIN SCREEN */
const winnerText=document.getElementById("winnerText");
function showWin(w){
  winnerText.textContent=w==="Draw" ? "It's a Draw!" : w+" WINS!";
  show("win");
  if(w!=="Draw") unlocked=Math.max(unlocked,level+1);
  confetti();
  setTimeout(showLevels,2500);
}

/* CONFETTI */
function confetti(){
  for(let i=0;i<120;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.left=Math.random()*innerWidth+"px";
    c.style.top="-10px";

    const duration = 4 + Math.random()*2;
    const delay = Math.random()*1.5;
    c.style.animation = `fall ${duration}s ease-in forwards`;
    c.style.animationDelay = `${delay}s`;

    document.body.appendChild(c);
    setTimeout(()=>c.remove(), (duration+delay)*1000);
  }
}

/* LEVEL MAP */
const levelBtns=document.getElementById("levelBtns");
function showLevels(){
  levelBtns.innerHTML="";
  for(let i=1;i<=50;i++){
    const b=document.createElement("button");
    b.textContent="Level "+i;
    if(i<=unlocked){
      b.onclick=()=>startGame(mode,i);
    }else{
      b.className="locked";
      b.disabled=true;
    }
    levelBtns.appendChild(b);
  }
  show("levels");
}