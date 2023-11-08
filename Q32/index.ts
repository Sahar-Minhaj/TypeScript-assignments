// Create a list of current users and new users
const current_users: string[] = ['Junaid', 'Ali', 'Baber', 'Aisha', 'Maria'];
const new_users: string[] = ['Baber', 'Saba', 'Ahmed', 'aisha', 'Farooq']; // Note that 'aisha' is repeated with different case

// Loop through the new_users list to check for unique usernames
for (const new_username of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const new_usernameLower = new_username.toLowerCase();

    // Use a flag to track if the username is found
    let usernameFound = false;

    for (const current_username of current_users) {
        if (current_username.toLowerCase() === new_usernameLower) {
            usernameFound = true;
            break;
        }
    }

    if (usernameFound) {
        console.log(`Username '${new_username}' is not available. Please enter a new username.`);
    } 
    else {
        console.log(`Username '${new_username}' is available.`);
    }
}
