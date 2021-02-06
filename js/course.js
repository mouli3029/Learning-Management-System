function showAllCourses(){
    var elementR = document.getElementById('registered');
    var elementA = document.getElementById('all');
    var linkA = document.getElementById('link-all');
    var linkR = document.getElementById('link-register');
    if(!linkA.classList.contains('active')){
        linkA.classList.add('active');
    }
    if(linkR.classList.contains('active')){
        linkR.classList.remove('active');
    }
    if(elementA.classList.contains('hide')){
        elementA.classList.remove('hide');
    }
    if(!elementR.classList.contains('hide')){
        elementR.classList.add('hide');
    }
    
}
function showRegisteredCourses(){
    var elementR = document.getElementById('registered');
    var elementA = document.getElementById('all');
    var linkA = document.getElementById('link-all');
    var linkR = document.getElementById('link-register');
    if(!linkR.classList.contains('active')){
        linkR.classList.add('active');
    }
    if(linkA.classList.contains('active')){
        linkA.classList.remove('active');
    }
    if(elementR.classList.contains('hide')){
        elementR.classList.remove('hide');
    }
    elementA.classList.add('hide');
}