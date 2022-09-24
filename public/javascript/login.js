function login(event){
    event.preventDefault();

    const userDetails = {
        name: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    console.log(userDetails);

    axios.get('http://localhost:4000/user/login',userDetails)
    .then(res=>{
        if(res.status ===200){
            res.setItem('authToken', res.data.token)
        }
    })

    .catch(err=>{
        console.log(err);
    })
}