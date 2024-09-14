//Hiden Skills
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//Hiden Educación X Left
const observerEducacionLogo= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showXLeft');
        } else {
            entry.target.classList.remove('showXLeft');
        }
    });
});

const hiddenElementsEducacionLogo = document.querySelectorAll('.hiddenXLeft');
hiddenElementsEducacionLogo.forEach((el) => observerEducacionLogo.observe(el));

//Hiden Educación X Right
const observerEducacionInfo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showXRight');
        } else {
            entry.target.classList.remove('showXRight');
        }
    });
});

const hiddenElementsEducacionInfo = document.querySelectorAll('.hiddenXRight');
hiddenElementsEducacionInfo.forEach((el) => observerEducacionInfo.observe(el));
