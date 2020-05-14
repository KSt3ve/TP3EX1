function ajaxRequest(type, url, callback,callback2){
    //Create XML HTTP request
    let xhr = new XMLHttpRequest();
    
    xhr.open(type,url);

    xhr.onload = () => {
        switch (xhr.status){
            case 200:
            case 201:
                callback(xhr.responseText);
                break;
            default: 
                callback2(xhr.status);
                break;
            
        }
    };

    // Send XML HTTP request.
    xhr.send();
}

function update(text){
    document.getElementById("IDstrong").innerText = text;}

function errors(code) {
    let a = document.getElementById("errors");
    let b = document.getElementById("IDstrongError");
    switch(code){
        case 400:
            a.removeAttribute("style");
            b.innerText = 'Requête incorrecte';
            break;
        case 401:
            a.removeAttribute("style");
            b.innerText = 'Authentifiez-vous';
            break;    
        case 403:
            a.removeAttribute("style");
            b.innerText = 'Accès refusé';
            break;
        case 404:
            a.removeAttribute("style");
            b.innerText = 'Page non trouvée';
            break;  
        case 500:
            a.removeAttribute("style");
            b.innerText = 'Erreur interne du serveur';
            break;
        case 503:
            a.removeAttribute("style");
            b.innerText = 'Service indisponible';
            break;  
    }
}


function main(){
    let IDspan = document.getElementById('timestamp');
    let span = document.createElement("span");
    span.className = "material-icons";
    span.innerText = "watch_later";
    IDspan.appendChild(span);
    let strong = document.createElement('strong');
    strong.id = "IDstrong";
    IDspan.appendChild(strong);

    let IDspanError = document.getElementById('errors');
    let span2 = document.createElement("span");
    span2.className = "material-icons";
    span2.innerText = "error";
    IDspanError.appendChild(span2);
    strong2 = document.createElement('strong');
    strong2.id = "IDstrongError";
    IDspanError.appendChild(strong2);

    let link = document.createElement("link");
    link.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons");
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);

    setInterval(ajaxRequest, 1000, 'GET', 'php/timestamp.php', update, errors);

}
main();