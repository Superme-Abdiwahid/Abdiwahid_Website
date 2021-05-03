let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
      if(form.checkValidity()){
        document.querySelector('.alert').classList.toggle('submitted');
        form.classList.add('thanks');
      }else{
        form.classList.toggle('was-validated');
        let submit = document.querySelector('button');
        submit.disabled = true;
      }
  })

  function getemail(email){
    /* global moment */
    moment.suppressDeprecationWarnings = true; //don't worry about these now
    return moment().diff(moment(email), 'email');
  }
// let submit = document.querySelector('#message-input'){
//     submit.addEventListener('submit', function(event){

//     })
// }
let submit =  document.querySelector('#message-input');
function email(){
let submit =  document.querySelector('#message-input');
submit.addEventListener('submit',  function(){
  let email_length = getYearsSince(submit.value);
  if( email_length > 200){
    email_length.setCustomValidity('Enter a valid email');
    email_length.textContent  = 'Enter a valid email';
  }else{
    email_length.setCustomValidity('');
      
  }
})
}


submit.addEventListener('input', email);


getInput.forEach(element => {
    element.addEventListener('input', function(){
      if(form.classList.contains('was-validated')){
        button.disabled = !form.checkValidity();
      }
    });
  });