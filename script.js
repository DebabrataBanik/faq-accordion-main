const questions = document.querySelectorAll('.faq-question')

questions.forEach(question => {
  question.addEventListener('click', () =>{
    let ans = question.nextElementSibling
    let icon = question.querySelector('img')

    ans.classList.toggle('display')
    
    if(icon.src.includes('icon-plus.svg')){
      icon.src = 'assets/images/icon-minus.svg'
    } else {
      icon.src = 'assets/images/icon-plus.svg'
    }
  })
})