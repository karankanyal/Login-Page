    const login__btn = document.querySelector('.login')

    login__btn.addEventListener('click', function(e){
        e.preventDefault()
        window.location.href = "/public/login.html"
    })