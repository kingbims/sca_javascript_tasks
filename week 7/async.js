//Synchronous:

window.onload = function() {

    const http = new XMLHttpRequest();
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200){
            console.log(http.response);
        }
    };
        http.open(GET, "http://2.bp.blogspot.com/-1fSgxdJvW4w/VHvoPemxIAI/AAAAAAAAM70/wkqIqYchN7c/s1600/p028d8nr.jpg", false);
        http.send();
    
        console.log('test');
    
    }
    
    
    //Asynchronous:
    window.onload = function() {
    
    const http = new XMLHttpRequest();
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200){
            console.log(http.response);
        }
    }
        http.open(GET, "http://2.bp.blogspot.com/-1fSgxdJvW4w/VHvoPemxIAI/AAAAAAAAM70/wkqIqYchN7c/s1600/p028d8nr.jpg", true);
        http.send();
    
        console.log('test');
    
    }