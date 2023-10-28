let  details={
    name:"",
    dob:"",
    email:"",
    pan:"",
    address:"",
    background:""

}



function submit()
{
    console.log("details")
details.name=document.querySelector('.input-name').value;
details.dob=document.querySelector('.input-Dob').value;;
details.email=document.querySelector('.input-email').value;
details.pan=document.querySelector('.input-Pan').value;
details.address=document.querySelector('.input-Address').value;
details.background=document.querySelector('.input-Bg').value;
console.log(family);
for (const [key, value] of Object.entries(family)) {
    if(value.length==0)
    {
        alert(`${key} is missing`)
        checkfill=false;
        break;
    }
}
localStorage.setItem('family-detail',details);

}