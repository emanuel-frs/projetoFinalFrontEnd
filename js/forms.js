const form = document.querySelector('form');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modalContent');
const continuarBtn = document.getElementById('save-btn');
const data = {};

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);

    let modalContentHTML = '';
    for(let [key, value] of formData.entries()){
        data[key] = value;
        modalContentHTML += `<strong>${key}:</strong> ${value}<br>`;
    }
    modalContent.innerHTML = modalContentHTML;
});

continuarBtn.addEventListener('click', async function(event){
    event.preventDefault();
    await sendFormToApi(data);
    window.location.href = "Atrativos.html?success=true";
});

async function sendFormToApi(formData) {
    const url = "https://6633b54ff7d50bbd9b4a6a76.mockapi.io/turistere/form";
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    return response;
}