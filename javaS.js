document.getElementById('btn').addEventListener('click', function() {
    fetch('https://cat-fact.herokuapp.com/facts/random')
        .then(response => response.json())
        .then(data => {
            const ss=document.getElementById('fact');
            ss.textContent=data.text;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});