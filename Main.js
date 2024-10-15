(function() {
    // List of uncommon first and last names
    const firstNames = [
        "Atticus", "Balthazar", "Caspian", "Daphne", "Evangeline", "Finnegan", "Galadriel", 
        "Hermione", "Isolde", "Jasper", "Kael", "Lysandra", "Magnus", "Nimue", "Orion", 
        "Peregrine", "Quincy", "Rowena", "Sylvia", "Thaddeus", "Ulric", "Vesper", 
        "Wynne", "Xanthe", "Yorick", "Zara", "Ariadne", "Beatrix", "Caius", "Drusilla", 
        "Elowen", "Fintan", "Gwyneth", "Hawthorn", "Icarus", "Juno", "Kieran", 
        "Leander", "Marigold", "Nerissa", "Octavian", "Phaedra", "Quillon", "Rhiannon", 
        "Seraphina", "Tiberius", "Ulysses", "Valerian", "Wilhelmina", "Zephyr"
    ];
    
    const lastNames = [
        "Blackwood", "Cunningham", "Davenport", "Everhart", "Fairchild", "Gainsborough", 
        "Hawthorne", "Ivy", "Jenkins", "Kingsley", "Lancaster", "Montgomery", 
        "Northwood", "Oakley", "Pemberton", "Quinton", "Ravenwood", "Sinclair", 
        "Thornfield", "Underwood", "Vanderbilt", "Westbrook", "York", "Zeller"
    ];

    // Set up a counter that increments every time you generate a file
    let counter = localStorage.getItem('fileCounter') || 1;

    // Generate random first and last name
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // Generate email based on name
    const email = `${randomFirstName.toLowerCase()}${randomLastName.toLowerCase()}@aniuni.shop`;

    // Predefined password
    const password = "12345@As";

    // Get the current date and time
    const now = new Date();
    const dateTime = now.toLocaleString(); // Get date and time as a readable string

    // Fill in the form
    document.getElementById('ap_customer_name').value = `${randomFirstName} ${randomLastName}`; // Full name
    document.getElementById('ap_email').value = email; // Email
    document.getElementById('ap_password').value = password; // Password
    document.getElementById('ap_password_check').value = password; // Confirm Password

    // Create text content to save in a file
    const content = `Email: ${email}\nPassword: ${password}\nGenerated on: ${dateTime}`;

    // Create the filename with the counter and names
    const fileName = `#${counter}${randomFirstName}${randomLastName}.txt`;

    // Create a Blob object with the text content
    const blob = new Blob([content], { type: 'text/plain' });

    // Create a temporary link element
    const link = document.createElement('a');

    // Set the download URL and file name
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;

    // Trigger the download by simulating a click
    link.click();

    // Increment the counter and store it in localStorage for the next run
    counter++;
    localStorage.setItem('fileCounter', counter);

    console.log(`Form auto-filled and credentials saved as: ${fileName}`);
})();
