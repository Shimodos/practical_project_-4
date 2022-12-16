window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');

    function req(e) {
        e.preventDefault();

        let formData = new FormData(form);
        // formData.append("id", Math.random());

        // let obj = {};
        // formData.forEach((value, key) => {
        //     obj[key] =value;
        // });
        // let json = JSON.stringify(obj);

        // const reqest = new XMLHttpRequest();
        // reqest.open('POST', './api.php');
        // // reqest.setRequestHeader('Content-Type', 'multipart/form-data');
        // reqest.send(formData);
        // reqest.addEventListener('load', function () {
        //     if (reqest.status === 200) {
        //         // let data = JSON.parse(reqest.response);
        //         console.log(reqest.response);
        //         // createCards(data);

        //     } else {
        //         console.error('что-то пошло не так');
        //     }
        // });

        // getResource('./api.php', formData)
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err));

        // axios.post('http://localhost:3000/people', obj);
        axios({
            method: 'post',
            url: './api.php',
            data: formData,
            headers: {'content-type': 'multipart/form-data'}
        })
        .then(data => console.log(data.data));

        // this.remove();
    }

    form.addEventListener('submit', (e) => req(e), {'once': true});

    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: data
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.text();
    }

    // async function getResource(url) {
    //     const res = await axios(`${url}`);

    //     if (res.status !== 200) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return  res;
    // }

    function createCards(response) {
        response.forEach(item => {
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
    }
});