// Simple interactions: mobile nav toggle + subscribe form demo
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  toggle && toggle.addEventListener('click', function(){
    if(nav.style.display === 'flex'){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
    }
  });

  var form = document.getElementById('subscribeForm');
  var msg = document.getElementById('subscribeMsg');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('email').value.trim();
    if(!email || email.indexOf('@') === -1){
      msg.textContent = 'Please enter a valid email.';
      return;
    }
    // Demo: no backend — show success message
    msg.textContent = 'Thanks — subscription saved (demo).';
    form.reset();
    setTimeout(()=> msg.textContent = '', 5000);
  });
});
