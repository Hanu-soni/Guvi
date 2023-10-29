var details = {
    name: "",
    dob: "",
    email: "",
    pan: "",
    address: "",
    background: ""
}


function submit() {
    let checkfill = true;
    
    // Use console.log(details) to output the details object, not a string "details"
    console.log(details);

    details.name = document.querySelector('.input-Name').value;
    details.dob = document.querySelector('.input-Dob').value;
    details.email = document.querySelector('.input-Email').value;
    details.pan = document.querySelector('.input-Pan').value;
    details.address = document.querySelector('.input-Address').value;
    details.background = document.querySelector('.input-Bg').value;
    console.log(details);

    // Use details, not family, to check if any field is missing
    for (const [key, value] of Object.entries(details)) {
        checkfill=true;
        // if (value.length == 0) {
        //     alert(`${key} is missing. refresh`);
        //     checkfill = false;
        //     break;
        // }
        // if(key=='pan')
        // {
        //     const Regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        //     console.log(value)
        //     console.log(Regex.test(value))
        //     if(Regex.test(value)==false) {
        //         alert('PAN is invalid')
        //         break;  
        //     }
               
        // }
        // if(key=='email')
        // {
        //     const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        //     if(emailRegex.test(value)==false) {
        //         alert('email is invalid')
        //         break;  
        //     }

        // }
    }
    

    if (checkfill) {
        // Store the details object in localStorage after converting it to a JSON string

        $.ajax( {        
            type: "POST", //GET or POST or PUT or DELETE verb 
                url: "register.php", // Location of the service      
                data: details, //Data sent to server
                contentType:"application/json",
                dataType: "json", //Expected data format from server    
                processdata: false,
                success: function (msg) {//On Successfull service call   
                    console.log(msg);
                },
                error: function (xhr) { console.log(xhr.responseText); } // When Service call fails             
            });


       

        //localStorage.setItem('family-detail', JSON.stringify(details));

    }
}
