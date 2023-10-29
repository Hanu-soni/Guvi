var details = {
    name: "",
    id: "",
    password: "",
    degree: "",
    experience: "",
    role: ""
}


function submit() {
    let checkfill = true;
    
    // Use console.log(details) to output the details object, not a string "details"
    console.log(details);

    details.name = document.querySelector('.input-Name').value;
    details.id = document.querySelector('.input-Id').value;
    details.password = document.querySelector('.input-Password').value;
    details.degree = document.querySelector('.input-Degree').value;
    details.experience = document.querySelector('.input-Experience').value;
    details.role = document.querySelector('.input-Role').value;
    console.log(details);

    // Use details, not family, to check if any field is missing
    // for (const [key, value] of Object.entries(details)) {
    //     checkfill=true;
    //     if (value.length == 0) {
    //         alert(`${key} is missing. refresh`);
    //         checkfill = false;
    //         break;
    //     }
    //     if(key=='password')
    //     {
    //         const Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!*])(?!.*\s).{8,}$/;
    //         console.log(value)
    //         console.log(Regex.test(value))
    //         if(Regex.test(value)==false) {
    //             alert('Password is invalid')
    //             break;  
    //         }
               
    //     }
    //     if(key=='id')
    //     {
    //         const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    //         if(emailRegex.test(value)==false) {
    //             alert('email is invalid')
    //             break;  
    //         }

    //     }
    //     if(key=='experience')
    //     {
    //         if(value<0)
    //         alert('dont put negative');
    //         break;
    //     }
    // }
    

    if (checkfill) {
        // Store the details object in localStorage after converting it to a JSON string
        let newobj={
            name:details.name,
            password:details.password,
            id:details.id
        }

        $.ajax( {        
            type: "POST", //GET or POST or PUT or DELETE verb 
                url: "register.php", // Location of the service      
                data: JSON.stringify(newobj), //Data sent to server
                contentType:"application/json",
                dataType: "json", //Expected data format from server    
                processdata: false,
                error: function (msg) {//On Successfull service call
                    console.log(msg)
                    let success='<b>Warning</b>:  Array to string conversion in <b>C:\Users\USER\Desktop\Guvi-assignment\register.php</b> on line <b>35</b><br />   {"status":"success","message":"User added successfully"}' ;
                    if(msg.responseText)
                    alert('registered successfuly');
                   
                },
                
                // When Service call fails             
            });


       

        //localStorage.setItem('family-detail', JSON.stringify(details));

    }
}
