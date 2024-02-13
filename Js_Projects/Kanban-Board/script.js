const addbtn=document.querySelector('.add-btn');
const modelcont=document.querySelector('.modal-cont');
const mainticketcontainer=document.querySelector(".main-ticket-cont");
const textarea=document.querySelector(".textarea-cont");
const allprioritycolor =document.querySelectorAll(".priority-color");
let addtaskflag=false;
let modalprioritycolor="black";
addbtn.addEventListener("click",()=>{
addtaskflag=!addtaskflag;

    if(addtaskflag===true){
        modelcont.style.display="flex";
}else{
    modelcont.style.display="none";
}
});

allprioritycolor.forEach((colorElem)=>{
    colorElem.addEventListener("click",(event)=>{
        console.log(event);
        modalprioritycolor=event.target.classList[0];
    });
});



modelcont.addEventListener("keydown",(event)=>{
console.log(event);
if(event.key==="Alt"){
createticket(textarea.value);
modelcont.style.display="none";
textarea.value="";
}
});

const createticket=(ticketinfo)=>{
 
    
let ticketcont=document.createElement("dvi");
ticketcont.setAttribute("class","ticket-cont");
ticketcont.innerHTML=`<div class="ticket-cont">
<div class="${modalprioritycolor}ticket-color"></div>
<div class="ticket-id">${shortid()}</div>
<div class="ticket-area">${ticketinfo}</div>
<div class="lock">
<i class="fa-solid fa-lock"></i>
</div>`;
mainticketcontainer.appendChild(ticketcont);
};