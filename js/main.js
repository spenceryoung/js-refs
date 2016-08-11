var nodeList = document.getElementsByClassName('link'),
    content = document.getElementById('content');

(function() {
    var xhr = new XMLHttpRequest();
        landUrl = nodeList[0].getAttribute('href');
    xhr.onload = function() {
        if (xhr.status === 200) {
            content.innerHTML = xhr.responseText;
        }
        document.location.hash =  "/" + landUrl;
    };
    xhr.open('GET', landUrl, true);
    xhr.send(null);
}());

for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('click', function(e) {
        e.preventDefault();
        var url = this.getAttribute('href'),
            fullUrl = document.location,
            xhr = new XMLHttpRequest();
        document.getElementsByClassName('active-tab')[0].classList.remove('active-tab');
        this.className += " " + "active-tab";
        xhr.onload = function() {
            if (xhr.status === 200) {
                content.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
        document.location.hash = "/" + url;
        window.scrollTo(0, 0);
    }, false);
}