function m_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
}

// Call the function to create large shirts with the default message
m_shirt(); // Large shirt with the default message

// Call the function to create a medium shirt with the default message
m_shirt("Medium"); // Medium shirt with the default message

// Call the function to create a small shirt with a custom message
m_shirt("Small", "Custom message here"); // Small shirt with a custom message
