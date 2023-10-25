const main=document.querySelector("#main");
const b1=document.querySelector(".b1");
const b2=document.querySelector(".b2");
const b3=document.querySelector(".b3");
const b4=document.querySelector(".b4");
const b5=document.querySelector(".b5");
const b6=document.querySelector(".b6");
const b7=document.querySelector(".b7");
const b8=document.querySelector(".b8");
const b9=document.querySelector(".b9");
const fin=document.querySelector('.final');

// console.log(fin);
// fin.setAttribute("display","none");

 
const full=document.querySelector('#full');

const turn=document.querySelector('#playerNo');
const button=document.querySelector('.button');
button.addEventListener("click",()=>{
    location.reload();
})

b1.addEventListener('click',()=>{
    displayon(b1,1);
   

},{once:true})
b2.addEventListener('click',()=>{
    displayon(b2,2);
  

},{once:true})
b3.addEventListener('click',()=>{
    displayon(b3,3);
   

},{once:true})
b4.addEventListener('click',()=>{
    displayon(b4,4);
   

},{once:true})
b5.addEventListener('click',()=>{
    displayon(b5,5);
    

},{once:true})
b6.addEventListener('click',()=>{
    displayon(b6,6);
  

},{once:true})
b7.addEventListener('click',()=>{
    displayon(b7,7);


},{once:true})
b8.addEventListener('click',()=>{
    displayon(b8,8);
  

},{once:true})
b9.addEventListener('click',()=>{
    displayon(b9,9);
   

},{once:true})
let finalArr=[[1,2,3],
              
              [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],[3,5,7]
        ]
  
let count=0;
let arr1=[0,0,0];
let arr2=[0,0,0];
function displayon(no,n){
    count++;
    
    if(turn.innerHTML==1){
        no.innerHTML="*";
        arr1.shift();
        arr1.push(n);
        arr1.sort();
        console.log(arr1);
        for(let i=0;i<8;i++){
          let q=0;
          
            for(let t=0;t<3;t++){
                if(finalArr[i][t]==arr1[t]){
                    q++;
                    if(q===3){
                        console.log("found1");
                       end("1");
                    }
                    
                }
            }
        }
        



        turn.innerHTML="2";
    }else{
        no.innerHTML="0";
        arr2.shift();
        arr2.push(n);
        arr2.sort();
        console.log(arr2);
        for(let i=0;i<8;i++){
          let q=0;
          
            for(let t=0;t<3;t++){
                if(finalArr[i][t]==arr2[t]){
                    q++;
                    if(q===3){
                        console.log("found2");
                       end("2");
                    }
                    
                }
            }
        }

       turn.innerHTML="1"
    }
    if(count==9){
        
        end("DRAW");
    }

    
    

     
    

}

function end(l){
    full.innerHTML=`PLAYER WON:${l}`;
    // turn.innerHTML=`${l}`;

    document.body.addEventListener("click",()=>{
        nextgame();
    }
    
    
    )

   

    



}
function nextgame(){
    document.body.addEventListener("click",()=>{
    location.reload();
    })
    
}
