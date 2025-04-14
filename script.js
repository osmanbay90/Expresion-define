const OPENROUTER_API_KEY = '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';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Categories for expressions
const categories = {
    'Greetings & Social': [
        'How ya\' doin?', 'What\'s up this weekend?', 'TGIF!', 'What do you do for a living?',
        'What have you been up to?', 'What do you think?', 'What\'s all the racket?',
        'What\'s all the fuss about?', 'What\'s the drill?', 'What gives~', 'What the...',
        'What\'s the rush?', 'What good is...?', 'What am I, chopped liver?', 'What purpose does it serve?',
        'How does that strike you?', 'What\'s your approach?', 'What do you say we...',
        'Back at you!', 'Same to you!', 'Back to you!', 'More power to you!', 'Y\'all',
        'Here we go', 'There you go', 'Way to go!', 'You bet'
    ],
    'Health & Body': [
        'My knee went out', 'I slept in', 'I overslept', 'sick as a dog', 'to be under the weather',
        'a sneezing fit', 'to be drained', 'to be buff', 'to be in tip-top shape', 'to be washed up',
        'to be loaded', 'to be pumped', 'to be wired', 'to be outta sorts', 'My dogs are barking!',
        'to come down with', 'nauseous', 'the runs', 'to feel a little warm', 'to be in shape',
        'to be in good health', 'to be in poor health', 'a blood blister', 'a charley horse'
    ],
    'Actions & Activities': [
        'to kick back', 'to kick it up a notch', 'to belt out a song', 'to riff',
        'to brush up on', 'to get the hang of', 'to pick someone\'s brain', 'to pig out',
        'to nosh', 'to chomp on', 'to trudge through', 'to drift away', 'to drift off',
        'to hammer something home', 'to hang out', 'to hang up', 'to hook up', 'to hunker down',
        'to hustle', 'to iron out', 'to jazz up', 'to kick back', 'to kick it', 'to kick off'
    ],
    'Emotions & Attitudes': [
        'I\'m rather upset', 'I\'m perplexed', 'flabbergasted', 'devastated', 'apathy',
        'to be in a bad mood', 'to be in a good mood', 'to be in high spirits',
        'to be in love', 'to be in shock', 'to be in tears', 'to be in wonder',
        'to lose one\'s cool', 'to get worked up', 'to be pumped', 'to be wired',
        'to be outta sorts', 'to be underhanded', 'to be up to something'
    ],
    'Business & Work': [
        'to make ends meet', 'to foot the bill', 'to shell out', 'to be loaded',
        'to be broke', 'dirt poor', 'to go Dutch', 'to be in business',
        'to be in the black', 'to be in the red', 'to be in the market',
        'to clinch a deal', 'to make a pitch', 'to put the squeeze on someone',
        'to brush up on skills', 'to get the hang of it', 'to pick someone\'s brain'
    ],
    'Casual Speech & Slang': [
        'gonna', 'wanna', 'ain\'t', 'y\'all', 'sump\'n', 'whatnot',
        'diddly squat', 'holy crap', 'my bad', 'no biggie', 'what the heck',
        'zilch', 'zip it', 'Yikes', 'Golly', 'Rats!', 'Shoot!'
    ],
    'Idioms & Phrases': [
        'kick the bucket', 'bite the bullet', 'break a leg', 'piece of cake',
        'it\'s raining cats and dogs', 'kill two birds with one stone',
        'the ball is in your court', 'bite off more than you can chew',
        'cost an arm and a leg', 'hit the nail on the head',
        'let the cat out of the bag', 'pull someone\'s leg',
        'under the weather', 'when pigs fly'
    ],
    'Time & Schedule': [
        'taking forever', 'in no time', 'crunch time', 'sooner or later',
        'Spring forward, fall back', 'in a jiffy', 'lickety-split',
        'when the rooster crows', '24/7', 'before my time',
        'in the nick of time', 'at the drop of a hat', 'in broad daylight'
    ],
    'Problems & Difficulties': [
        'to be in a pickle', 'to be in hot water', 'to be in trouble',
        'to be in a jam', 'to be in a fix', 'to be in a tight spot',
        'to be in deep', 'to be in over one\'s head', 'to be up against it',
        'to be up the creek', 'to be at wit\'s end', 'to be at a loss',
        'to be at a standstill', 'to be at a crossroads'
    ],
    'Success & Achievement': [
        'to nail it', 'to kill it', 'to crush it', 'to ace it',
        'to knock it out of the park', 'to hit it out of the park',
        'to hit a home run', 'to score big', 'to make it big',
        'to make a killing', 'to clean up', 'to clean house',
        'to sweep the board', 'to take the cake'
    ],
    'Criticism & Complaints': [
        'to rip into someone', 'to tear into someone', 'to lay into someone',
        'to jump on someone', 'to come down on someone', 'to get on someone\'s case',
        'to give someone grief', 'to give someone a hard time',
        'to bust someone\'s chops', 'to ride someone'
    ],
    'Casual Conversation': [
        'What\'s up?', 'How\'s it going?', 'How ya doing?',
        'What\'s new?', 'What\'s happening?', 'What\'s the word?',
        'How\'s tricks?', 'How\'s life?', 'How\'s everything?',
        'How are things?', 'How\'s it hanging?'
    ],
    'Emphasis & Intensity': [
        'big time', 'all out', 'flat out', 'hands down',
        'through and through', 'inside and out', 'up and down',
        'back and forth', 'left and right', 'high and low'
    ],
    'Agreement & Disagreement': [
        'You bet', 'You said it', 'You got it', 'Right on',
        'No way', 'Not a chance', 'Fat chance', 'As if',
        'Yeah, right', 'In your dreams'
    ],
    'Frustration & Annoyance': [
        'Give me a break', 'Come on', 'Oh, please', 'Whatever',
        'Get real', 'Get out of here', 'Get lost', 'Beat it',
        'Buzz off', 'Take a hike', 'Get bent', 'Go fly a kite'
    ],
    'Praise & Approval': [
        'Way to go', 'Atta boy/girl', 'Good going', 'Nice one',
        'Sweet', 'Awesome', 'Cool', 'Neat', 'Groovy', 'Far out',
        'Right on', 'You rock', 'You rule', 'You\'re the best'
    ],
    'Warning & Caution': [
        'Watch out', 'Look out', 'Heads up', 'Watch your step',
        'Be careful', 'Take care', 'Mind your p\'s and q\'s',
        'Keep your eyes peeled', 'Stay alert', 'Stay sharp'
    ],
    'Encouragement & Support': [
        'Hang in there', 'Keep it up', 'Don\'t give up',
        'Stick with it', 'Keep at it', 'Stay with it',
        'Go for it', 'You can do it', 'Keep your chin up',
        'Keep your head up'
    ],
    'Dismissal & Rejection': [
        'Whatever', 'As if', 'Yeah, right', 'In your dreams',
        'No way', 'Not a chance', 'Fat chance', 'Forget it',
        'Forget about it', 'Don\'t even think about it'
    ],
    'Surprise & Disbelief': [
        'No way', 'Get out of here', 'You\'re kidding',
        'You\'re joking', 'Are you serious?', 'Really?',
        'For real?', 'Seriously?', 'You don\'t say',
        'Who would have thought?'
    ],
    'Colloquial Phrases': [
        'kick the bucket', 'bite the dust', 'push up daisies',
        'buy the farm', 'cash in one\'s chips', 'meet one\'s maker',
        'go to the great beyond', 'go belly up', 'go south',
        'go down the tubes'
    ],
    'Informal Responses': [
        'You bet', 'Sure thing', 'No problem', 'No sweat',
        'No biggie', 'No worries', 'Don\'t mention it',
        'Anytime', 'My pleasure', 'Not at all'
    ],
    'Exaggeration & Emphasis': [
        'I\'m dying to', 'I\'m starving', 'I\'m freezing',
        'I\'m burning up', 'I\'m beat', 'I\'m wiped out',
        'I\'m dead tired', 'I\'m exhausted', 'I\'m pooped',
        'I\'m bushed'
    ],
    'Confusion & Uncertainty': [
        'beats me', 'search me', 'your guess is as good as mine',
        'who knows?', 'what gives?', 'what\'s the deal?',
        'what\'s up with that?', 'what\'s going on?',
        'what\'s the story?', 'what\'s the scoop?'
    ],
    'Slang & Modern Usage': [
        'chill out', 'hang out', 'crash', 'zonk out',
        'veg out', 'space out', 'zone out', 'pig out',
        'pig out', 'pig out', 'pig out'
    ]
};

// All expressions from the list
const allExpressions = Object.values(categories).flat();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    displayExpressions(allExpressions);
    setupSearch();
    setupExpressionCards();
});

function initializeCategories() {
    const categoriesList = document.getElementById('categoriesList');
    Object.keys(categories).forEach(category => {
        const button = document.createElement('button');
        button.className = 'list-group-item list-group-item-action';
        button.textContent = category;
        button.onclick = () => filterByCategory(category);
        categoriesList.appendChild(button);
    });
}

function displayExpressions(expressions) {
    const container = document.getElementById('expressionsContainer');
    container.innerHTML = '';
    
    expressions.forEach(expression => {
        const card = document.createElement('div');
        card.className = 'expression-card';
        card.innerHTML = `
            <h3>${expression}</h3>
            <p class="see-meaning">See meaning</p>
        `;
        card.onclick = () => showExpressionDetails(expression);
        container.appendChild(card);
    });
}

function filterByCategory(category) {
    const expressions = categories[category];
    displayExpressions(expressions);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredExpressions = allExpressions.filter(expression => 
            expression.toLowerCase().includes(searchTerm)
        );
        displayExpressions(filteredExpressions);
    });
}

async function showExpressionDetails(expression) {
    // Get the modal element
    const modalElement = document.getElementById('expressionModal');
    if (!modalElement) {
        console.error('Modal element not found');
        return;
    }

    // Set the expression text
    const modalExpression = document.getElementById('modalExpression');
    if (modalExpression) {
        modalExpression.textContent = expression;
    }

    // Show loading state
    const modalDefinition = document.getElementById('modalDefinition');
    const modalExample = document.getElementById('modalExample');
    if (modalDefinition) {
        modalDefinition.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
    }
    if (modalExample) {
        modalExample.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';
    }

    try {
        const response = await fetch(OPENROUTER_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'English Expressions Learning'
            },
            body: JSON.stringify({
                model: 'openai/gpt-3.5-turbo',
                messages: [{
                    role: 'user',
                    content: `Please explain the English expression "${expression}" in a simple way and provide one example sentence. Format your response exactly like this:
Definition: [clear definition of the expression]
Example: [one example sentence using the expression]`
                }],
                temperature: 0.7,
                max_tokens: 200
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error Response:', errorData);
            throw new Error(`HTTP error! status: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
            throw new Error('Invalid response format from OpenRouter API');
        }

        const explanation = data.choices[0].message.content;
        
        // Extract definition and example using regex
        const definitionMatch = explanation.match(/Definition:\s*(.*?)(?=Example:|$)/s);
        const exampleMatch = explanation.match(/Example:\s*(.*?)$/s);

        const definition = definitionMatch ? definitionMatch[1].trim() : 'Definition not found';
        const example = exampleMatch ? exampleMatch[1].trim() : 'Example not found';

        if (modalDefinition) {
            modalDefinition.innerHTML = `<strong>Definition:</strong> ${definition}`;
        }
        if (modalExample) {
            modalExample.innerHTML = `<strong>Example:</strong> ${example}`;
        }
    } catch (error) {
        console.error('Error fetching explanation:', error);
        if (modalDefinition) {
            modalDefinition.innerHTML = `
                <div class="alert alert-danger">
                    <strong>Error:</strong> ${error.message}<br>
                    Please check your internet connection and try again.
                </div>`;
        }
        if (modalExample) {
            modalExample.innerHTML = `
                <div class="alert alert-danger">
                    Error loading example. Please try again.
                </div>`;
        }
    }

    // Initialize and show the modal
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Add this new function to set up click handlers for expression cards
function setupExpressionCards() {
    document.getElementById('expressionsContainer').addEventListener('click', (e) => {
        const card = e.target.closest('.expression-card');
        if (card) {
            const expression = card.querySelector('h3').textContent;
            showExpressionDetails(expression);
        }
    });
} 