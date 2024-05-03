const nightModeButton = document.getElementById('nightModeCheckbox'); // Update ID
const body = document.body;

nightModeButton.addEventListener('click', function() {
  body.classList.toggle('night-mode'); // Toggle the night-mode class on/off
});

nightModeButton.addEventListener('change', function() {
   // Seu código atual para alternar a classe night-mode
  
  // Armazena a preferência no localStorage
  localStorage.setItem('nightMode', body.classList.contains('night-mode'));
});

window.onload = function() {
  // Recupera a preferência do localStorage
  const isNightMode = localStorage.getItem('nightMode') === 'true';
  
  // Aplica a classe night-mode se a preferência for true
  if (isNightMode) {
    body.classList.add('night-mode');
  }
};