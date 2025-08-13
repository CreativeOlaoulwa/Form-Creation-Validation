// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list element
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Display error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run function after DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
