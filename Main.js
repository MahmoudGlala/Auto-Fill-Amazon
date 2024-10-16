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
    "Thornfield", "Underwood", "Vanderbilt", "Westbrook", "York", "Zeller", 
    "Ashford", "Brockwell", "Carrington", "Delacroix", "Ellington", "Fitzgerald", 
    "Greenwood", "Harrington", "Inglewood", "Kensington", "Lockwood", "Merrick", 
    "Norwood", "Osborne", "Prescott", "Radcliffe", "Sutherland", "Tremont", 
    "Valentine", "Winslow", "Waverly", "Yardley", "Whitlock", "Wyndham", "Ziegler",
    "Abernathy", "Bancroft", "Clayton", "Donovan", "Edgerton", "Fleming", 
    "Garrett", "Huntington", "Irving", "Jacobs", "Kirkland", "Langston", 
    "Maxwell", "Newbury", "Orwell", "Pembroke", "Quigley", "Roosevelt", 
    "Somerset", "Trenton", "Upton", "Vaughn", "Whittaker", "Yates", 
    "Aldridge", "Barclay", "Caldwell", "Dunmore", "Elliot", "Foster", 
    "Garrison", "Holloway", "Ivers", "Jordan", "Kipling", "Leland", 
    "Morgan", "Newton", "O'Malley", "Patton", "Quill", "Remington", 
    "Stanford", "Thatcher", "Ulrich", "Vermont", "Windsor", "Yarborough", 
    "Anderson", "Bradford", "Carter", "Driscoll", "Ellsworth", "Faulkner", 
    "Goodwin", "Hudson", "Iverson", "Jefferson", "Keating", "Levinson", 
    "Morrison", "Norton", "Owens", "Patterson", "Quincy", "Randolph", 
    "Sheffield", "Torrance", "Urbane", "Vickers", "Wellington", "Youngblood", 
    "Archer", "Benedict", "Channing", "Dexter", "Emerson", "Fletcher", 
    "Grant", "Hayes", "Ingram", "Jarvis", "Kendrick", "Lovelace", 
    "Murray", "Nixon", "Orson", "Pike", "Redwood", "Sterling", 
    "Thornton", "Urbach", "Vincent", "Wadsworth", "Yancy", "Zimmerman", 
    "Armstrong", "Bennett", "Colton", "Dalton", "Ellis", "Fleming", 
    "Grey", "Hamilton", "Ivory", "Justice", "Kane", "Lawrence", 
    "Monroe", "Nash", "Owensby", "Porter", "Roth", "Stevenson", 
    "Thorne", "Ullman", "Vargas", "Wallace", "Yarborough", "Zane", 
    "Baxter", "Carlisle", "Davison", "Easton", "Flanagan", "Gregory", 
    "Hartley", "Irons", "Jagger", "Kerr", "Langley", "Milton", 
    "Naylor", "Olsen", "Pierce", "Rothschild", "Sloane", "Templeton", 
    "Thurlow", "Ulster", "Vernon", "Wainwright", "Yates", "Ziegler", 
    "Benson", "Campbell", "Dawson", "Evans", "Forbes", "Grayson", 
    "Harper", "Irving", "Jacobi", "King", "Lloyd", "Marsden", 
    "Neville", "Orwell", "Pendleton", "Rivers", "Spencer", "Talbot", 
    "Tyrell", "Underhill", "Voss", "Westerfield", "Yeats", "Zimmer", 
    "Blake", "Clarke", "Delaney", "Ewing", "Fairbanks", "Gibson", 
    "Hart", "Iverson", "Johnson", "Keller", "Lewis", "McAllister", 
    "North", "O'Rourke", "Parrish", "Reynolds", "Stone", "Tanner", 
    "Thompson", "Upchurch", "Vale", "Weston", "Yorkshire", "Zelman", 
    "Beaumont", "Chester", "Dixon", "Eddington", "Finley", "Gray", 
    "Hawkins", "Ives", "Jordan", "Knight", "Lawson", "Marshall", 
    "Nolan", "Oliver", "Price", "Rogers", "Somers", "Torrington", 
    "Tully", "Urmston", "Vandermeer", "Whitman", "Young", "Zimmerman", 
    "Baldwin", "Collins", "Doyle", "Emery", "Ford", "Grant", 
    "Henderson", "Irving", "Jennings", "Kincaid", "Lowe", "Mitchell", 
    "Nelson", "Orton", "Palmer", "Richardson", "Stanton", "Travis", 
    "Thurston", "Ulman", "Vance", "Westlake", "Yarrow", "Zeigler", 
    "Bryant", "Cook", "Douglas", "Ellison", "Fraser", "Griffith", 
    "Hughes", "Jameson", "Kent", "Larkin", "Malone", "Norman", 
    "Parker", "Ramsay", "Sharp", "Taylor", "Thorne", "Upton", 
    "Vaughn", "Wharton", "Yardley", "Zeller"
    ];

    // Set up a counter that increments every time you generate a file
    let counter = localStorage.getItem('fileCounter') || 1;

    // Generate random first and last name
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // Generate email based on name
    const email = `${randomFirstName.toLowerCase()}${randomLastName.toLowerCase()}@aniuni.shop`;

    // Predefined password add Your passowrd here
    const password = "Add Your PassWord Here";

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
