window.addEventListener("DOMContentLoaded", () => {

    function req() {
        const reqest = new XMLHttpRequest();
        reqest.open('GET', 'http://localhost:3000/people');
        reqest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        reqest.send();
        reqest.addEventListener('load', function () {
            if (reqest.readyState === 4 && reqest.status === 200) {
                let data = JSON.parse(reqest.response);
                console.log(data);

                data.forEach(item => {
                    let card = document.createElement('div');

                    card.classList.add('card');

                    let icon;
                    if(item.sex === 'male') {
                        icon = "icons/mars.png";
                    } else {
                        icon = "icons/female.png";
                    }

                    card.innerHTML = `
                    <img src="${item.photo}" alt="photo">
                    <div class="name">${item.name} ${item.surname} </div>
                    <div class="sex">
                        <img src=${icon} alt="male">
                    </div>
                    <div class="age">${item.age}</div>
                    `;
                    document.querySelector('.app').appendChild(card);
                });

            } else {
                console.error('что-то пошло не так');
            }
        });

        this.remove();
    }

    document.querySelector('button').addEventListener('click', req, {'once': true});
});