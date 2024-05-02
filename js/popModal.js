window.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');

    if(successParam ==="true"){
        let myModal = new bootstrap.Modal(this.document.querySelector('.modal'));
        myModal.show();
    }
})