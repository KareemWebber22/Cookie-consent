const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalBtnDecline = document.getElementById('modal-btn-decline')
const modalChoiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

/*   
Challenge: 
1. Take control of the decline btn. (What do you
   need to do to make that possible?)
2. Set up an eventListener that is triggered 
   when a user's cursor hovers over the decline 
   button. (Google the event to listen out for!)
3. For now, just log out "hovered" when that 
   happens. 
*/ 

modalBtnDecline.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('reverse')
    console.log("hovered!")
})

/*   
Challenge: 
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/ 

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    /*   
    Challenge: 
    1. Create a const to store the user's name and
    use a FormData method to extract the 
    submitted name from the FormData object.
    2. Insert the user's name into the HTML string
    that contains the final message we show our
    users.
    */ 

/*   
Challenge: 
1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.
*/ 
    
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    
    setTimeout(function(){
        const userName = consentFormData.get('fullName')
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
        modalCloseBtn.disabled = false
    }, 3000)
}) 
