document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById("myForm");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var nickNameElement = document.getElementById("playernickname");
        var nickName = nickNameElement.value;

        localStorage.setItem('nickname', nickName);
    });
});