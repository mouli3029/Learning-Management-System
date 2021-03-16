function webresource(){
    console.log("Mouli")
    var webrtab  = document.getElementById('webr-tab');
    var webr = document.getElementById('webr');
    if(!webrtab.classList.contains('active')){
        webrtab.classList.add('active');

        webr.classList.add('color-text');
        webrtab.classList.remove('hide');

    }
    else{
        webrtab.classList.add('hide');
        webrtab.classList.remove('active');

        webr.classList.remove('color-text');

    }
}
function coursehand(){
    var coursetab  = document.getElementById('cohand-tab');
    var cohand = document.getElementById('cohand');
    if(!coursetab.classList.contains('active')){
        coursetab.classList.add('active');
        cohand.classList.add('color-text');
        coursetab.classList.remove('hide');

    }
    else{
        coursetab.classList.add('hide');
        coursetab.classList.remove('active');

        cohand.classList.remove('color-text');

    }
}