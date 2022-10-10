const modal = document.getElementById('modal');
const modal_text = document.getElementById('modal-text')
const nameForm = document.getElementById('name')
const emailForm = document.getElementById('email')
const modal_btn = document.getElementById('modal-btn')
const close_btn = document.getElementById('modal-close-btn')
const modal_choice_btns = document.getElementById('modal-choice-btns')
const consentForm = document.getElementById('consent-form')

setTimeout(() => {
    modal.style.display = "block"
}, 1500)

consentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const  consentFormData = new FormData(consentForm)

    const fullName =  consentFormData.get('fullName')
    const fullEmail =  consentFormData.get('email')
    nameForm.style.display = "none"
    emailForm.style.display = "none"
    
    modal_text.innerHTML = `<div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(() => {
        document.getElementById('upload-text').innerHTML = `Making the sale...`
    },3000)

    setTimeout(() => {
        modal_text.innerHTML = `<div class="modal-inner" id="modal-inner">
        <h2>Thanks ${fullName}, you rocker!!</h2>
        <p>We just sold the rights to your eternal soul.</p>
        <h5>Your Email : ${fullEmail}</h5>
        <img src='images/11Ae.gif' class="pirates"/>
        </div>`
        modal_choice_btns.style.display = "none"
        close_btn.removeAttribute("disabled")
        close_btn.setAttribute("enabled", "")
        close_btn.addEventListener('click', function() {
            modal.style.display = "none"
        })
    }, 5000)
    
})

