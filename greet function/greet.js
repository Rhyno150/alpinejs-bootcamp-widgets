

function Counter() {
  return {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
}

// ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
  Alpine.data('counter', Counter);
});


const greetings = {
  english: (name) => `Hello, ${name}!`,
  spanish: (name) => `Hola, ${name}!`,
  french: (name) => `Bonjour, ${name}!`,
};

function greet(name, language, greetCount) {
  greetCount++; 
  const greetingText = greetings[language](name);
  return { greetingText, greetCount };
}

function resetCount(greetCount) {
  return { greetCount: 0 };
}

//export default { greet, resetCount };


function greet(name) {
    return 'Hello, ' + name;  
  }
  const greetJanine = greet('Janine');
   console.log(greetJanine);
    

   function greet() {
    // No need to return a value, update the displayed message directly
  }

  


  // Per project requirements, global variable for greeting count
let uniqueGreetings = 0;

// Global object to store names greeted (using camelCase for consistency)
var namesGreeted = {};

// Function to update greeting count and display on screen
function updateGreetCount() {
  uniqueGreetings++;
  document.getElementById('greetCount').textContent = `Unique Greetings: ${uniqueGreetings}`;
}

function GreetingApp() {
  // Instance variable to store the greeted names (not used anymore)
  // this.greetedNames = JSON.parse(localStorage.getItem(GREETINGS_KEY)) || [];

  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const resetBtn = document.getElementById('resetBtn');
  const greetingOutput = document.getElementById('greetingOutput');
  const languageRadios = document.querySelectorAll('input[name="language"]');

  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    // Validate name format (optional, you can add a regular expression here)
    if (!name) {
      alert('Please enter your name.');
      return;
    }

    if (namesGreeted[name] === undefined) {
      updateGreetCount();
      namesGreeted[name] = 1;
    }

    const selectedLanguage = [...languageRadios].find(radio => radio.checked).value;
    let greeting;
    switch (selectedLanguage) {
      case 'english':
        greeting = `Hello, ${name}!`;
        break;
      case 'spanish':
        greeting = `Hola, ${name}!`;
        break;
        case 'french':
        greeting = `Bonjor, ${name}!`;
        break;
      // Add more cases for other languages
      default:
        greeting = `Hello, ${name}!`; // Default greeting
    }

    greetingOutput.textContent = greeting;
  });

  // Add event listener for reset button (optional)
  resetBtn.addEventListener('click', () => {
    uniqueGreetings = 0;
    namesGreeted = {};
    nameInput.value = '';
    greetingOutput.textContent = '';
    // Reset language radio buttons (if needed)
  });
}

// Create an instance of the GreetingApp
//const greetingApp = new GreetingApp();


//export default { greet, resetCount }; // Export functions for use in your AlpineJS code

