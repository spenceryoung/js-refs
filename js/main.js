var nodeList = document.getElementsByClassName('link'),
    content = document.getElementById('content');

(function() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 200) {
            content.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'partials/one.html', true);
    xhr.send(null);
}());

for (var i=0; i<nodeList.length; i++) {
    nodeList[i].addEventListener('click', function(e) {
        e.preventDefault();
        var url = this.href;
            xhr = new XMLHttpRequest();
        document.getElementsByClassName('active-tab')[0].classList.remove('active-tab');
        this.className += " " + "active-tab";
        xhr.onload = function() {
            if(xhr.status === 200) {
                content.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    }, false);
}