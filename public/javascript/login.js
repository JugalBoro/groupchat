function login(e){
    e.preventDefault();

    const userDetails = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    console.log(userDetails);

    axios.post('http://localhost:4000/user/login',userDetails)
    .then(res=>{

        if(res.status === 200){
            localStorage.setItem('authToken',res.data.token);
            window.location.href = "userHome.html"
        }
        
    })

    .catch((err)=>{
        console.log(err);
    })
}