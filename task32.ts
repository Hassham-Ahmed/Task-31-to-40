let current_user:string[]=["Hassham","Ahmed","Taha","Asad","Faheem"]
let new_users:string[]=["Kamran","Hassham","Kashif","Taha","Ali"];

for(let new_user of new_users){
    if(current_user.includes(new_user)){
        console.log("Sorry! The person "+ new_user +" is already taken you will need to enter a new username")
    }
    else{
        console.log('Congratulations! ' + (new_user) +' is available.')
    }
}