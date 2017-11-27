const inputBox = document.getElementById('route');
const submit = document.getElementById('submit');

submit.addEventListener('click', handleClick);

function handleClick() {

    let query = encodeURIComponent(inputBox.value);
    console.log(query);
    let headers = new Headers();
    
    fetch('/api/onebusaway?q=' + query, {headers: headers})
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log(json);
        });

}