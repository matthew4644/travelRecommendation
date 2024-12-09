const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const url = ('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Clear previous results
            resultsDiv.innerHTML = '';
            // Display the search results
            data.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.textContent = result.name; 
                resultsDiv.appendChild(resultElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


/*const url = ('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error))*/