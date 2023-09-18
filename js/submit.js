document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail = document.getElementById('btn-email');
    const emailButton = userEmail.value;

    const passField = document.getElementById('btn-Password');
    const password = passField.value;
    console.log(emailButton,password);
    
    if(emailButton=='tanjum@gmail.com' && password=='hasan1'){
            window.location.href ='mybank.html';
        }
        else{
            alert('incorrect password')
        }
    
})