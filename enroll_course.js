function webresource(){
    console.log("Mouli")
    var webrtab  = document.getElementById('webr-tab');
    var webr = document.getElementById('webr');
    if(!webrtab.classList.contains('active')){
        webrtab.classList.add('active');
        webrtab.classList.remove('hide');

    }
    else{
        webrtab.classList.add('hide');
        webrtab.classList.remove('active');

    }
}
function coursehand(){
    var coursetab  = document.getElementById('cohand-tab');
    var cohand = document.getElementById('cohand');
    if(!coursetab.classList.contains('active')){
        coursetab.classList.add('active');
        coursetab.classList.remove('hide');
    }
    else{
        coursetab.classList.add('hide');
        coursetab.classList.remove('active');

    }
}
function openTab(tabNo){
    var generalTab = document.getElementById('dbmsgen');
    var co1Tab = document.getElementById('dbmsco1');
    var co2Tab = document.getElementById('dbmsco2');
    var co3Tab = document.getElementById('dbmsco3');
    var co4Tab = document.getElementById('dbmsco4');

    var link0 = document.getElementById('nav-linkg');
    var link1 = document.getElementById('nav-link1');
    var link2  = document.getElementById('nav-link2');
    var link3 = document.getElementById('nav-link3');
    var link4 = document.getElementById('nav-link4');

    
    if(tabNo === 0){
        generalTab.classList.add('active');
        co1Tab.classList.add('hide');
        co2Tab.classList.add('hide');
        co3Tab.classList.add('hide');
        co4Tab.classList.add('hide');

        link0.classList.add('link-active');
        link1.classList.remove('link-active');
        link2.classList.remove('link-active');
        link3.classList.remove('link-active');
        link4.classList.remove('link-active');

        if(generalTab.classList.contains('hide')){
            generalTab.classList.remove('hide');
        }


        
    }
    else if(tabNo === 1){
        if(co1Tab.classList.contains('hide')){
            co1Tab.classList.remove('hide');
        }
        generalTab.classList.add('hide');
        co1Tab.classList.add('active');
        co2Tab.classList.add('hide');
        co3Tab.classList.add('hide');
        co4Tab.classList.add('hide');

        link0.classList.remove('link-active');
        link1.classList.add('link-active');
        link2.classList.remove('link-active');
        link3.classList.remove('link-active');
        link4.classList.remove('link-active');
        
    }
    else if(tabNo === 2){
        if(co2Tab.classList.contains('hide')){
            co2Tab.classList.remove('hide');
        }
        generalTab.classList.add('hide');
        co1Tab.classList.add('hide');
        co2Tab.classList.add('active');
        co3Tab.classList.add('hide');
        co4Tab.classList.add('hide');

        link0.classList.remove('link-active');
        link1.classList.remove('link-active');
        link2.classList.add('link-active');
        link3.classList.remove('link-active');
        link4.classList.remove('link-active');
    }
    else if(tabNo === 3){
        if(co3Tab.classList.contains('hide')){
            co3Tab.classList.remove('hide');
        }
        generalTab.classList.add('hide');
        co1Tab.classList.add('hide');
        co2Tab.classList.add('hide');
        co3Tab.classList.add('active');
        co4Tab.classList.add('hide');


        link0.classList.remove('link-active');
        link1.classList.remove('link-active');
        link2.classList.remove('link-active');
        link3.classList.add('link-active');
        link4.classList.remove('link-active');
    }
    else{
        if(co4Tab.classList.contains('hide')){
            co4Tab.classList.remove('hide');
        }
        generalTab.classList.add('hide');
        co1Tab.classList.add('hide');
        co2Tab.classList.add('hide');
        co3Tab.classList.add('hide');
        co4Tab.classList.add('active');


        link0.classList.remove('link-active');
        link1.classList.remove('link-active');
        link2.classList.remove('link-active');
        link3.classList.remove('link-active');
        link4.classList.add('link-active');
    }
}

function sessionshow(sNo,co){
    if(sNo === 1){
        var sessionTab1 = document.getElementById('session-tab1'+co);
        if(sessionTab1.classList.contains('active')){
            sessionTab1.classList.remove('active');
            sessionTab1.classList.add('hide');
        }
        else{
            sessionTab1.classList.add('active');
            sessionTab1.classList.remove('hide');
        }  
    }

    if(sNo === 2){
        var sessionTab2 = document.getElementById('session-tab2'+co);
        if(sessionTab2.classList.contains('active')){
            sessionTab2.classList.remove('active');
            sessionTab2.classList.add('hide');
        }
        else{
            sessionTab2.classList.add('active');
            sessionTab2.classList.remove('hide');
        }  
    }
    if(sNo === 3){
        var sessionTab3 = document.getElementById('session-tab3'+co);
        if(sessionTab3.classList.contains('active')){
            sessionTab3.classList.remove('active');
            sessionTab3.classList.add('hide');
        }
        else{
            sessionTab3.classList.add('active');
            sessionTab3.classList.remove('hide');
        }  
    }
    if(sNo === 4){
        var sessionTab4 = document.getElementById('session-tab4'+co);
        console.log("Mouli")
        if(sessionTab4.classList.contains('active')){
            sessionTab4.classList.remove('active');
            sessionTab4.classList.add('hide');
        }
        else{
            sessionTab4.classList.add('active');
            sessionTab4.classList.remove('hide');
        }  
    }
}