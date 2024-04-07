let number=[1,2,3,4,5,6,7,8,9]
let ordinal
for(let i of number){
       if(i===1){
        ordinal="st";
       }
       else
       if(i===2){
        ordinal="nd";
       }
       else
       if(i===3){
        ordinal="rd";
       }
       else{
        ordinal="th";
       }
       console.log(i+ordinal)
}