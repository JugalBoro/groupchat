


function signup(event){
    event.preventDefault();


    const userDetails = {
        name:document.getElementById("name").value,

        email: document.getElementById('email').value,
        
        password: document.getElementById('password').value,

        phone: document.getElementById('phone').value


    }

    console.log(userDetails);
    axios.post('http://localhost:4000/user/signup',userDetails)
    .then(res=>{

        if(res.status===201){
            // alert('User Created Successfully! Please Login....')
            alert(`${res.data.message}`)
            console.log(res);
        }
       
       // res.status(201).json(userDetails);
        //console.log(userDetails)
    })

    .catch((err)=>{
        console.log(err);
    })
}