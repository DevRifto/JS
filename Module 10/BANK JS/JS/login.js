// find the btn :
document.getElementById('btn').addEventListener('click', function(){
  const email = document.getElementById('email');
  const emailValue = email.value;
  
  const pass = document.getElementById('pass');
  const passValue = pass.value;

  if(emailValue === 'rifato' && passValue === '123'){
    window.location.href = 'balance.html'
  }
  else{
    alert('Wrong Information')
  }
})