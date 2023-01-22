console.log("scripting")
document.querySelector('.cross').style.display= 'none';
document.querySelector('.ham').addEventListener("click", ()=>{
     document.querySelector('.bar').classList.toggle("barGo");
     if(document.querySelector('.bar').classList.contains("barGo")){
        document.querySelector('.cross').style.display= 'none'
        document.querySelector('.ham').style.display= 'inline'
  } 
   else{
        document.querySelector('.ham').style.display= 'none'
        setTimeout
         document.querySelector('.cross').style.display= 'inline'
     
        
    }
       
        });
     document.querySelector('.cross').addEventListener("click", ()=>{
     document.querySelector('.bar').classList.toggle("barGo");
     if(document.querySelector('.bar').classList.contains("barGo")){
        document.querySelector('.cross').style.display= 'none'
        document.querySelector('.ham').style.display= 'inline'
  } 
   else{
        document.querySelector('.ham').style.display= 'none'
        setTimeout
         document.querySelector('.cross').style.display= 'inline'
     
        
    }
       
        });
        
