// Sample quiz data
const quizData = {
    'rich-dad': {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        questions: [
            {
                question: "What is the key difference between assets and liabilities according to Kiyosaki?",
                answers: [
                    "Assets put money in your pocket, liabilities take money out",
                    "Assets are expensive, liabilities are cheap",
                    "Assets are physical, liabilities are digital",
                    "There is no real difference"
                ],
                correct: 0,
                explanation: "Assets generate income and put money in your pocket, while liabilities take money out. This is the foundation of building wealth."
            },
            {
                question: "What does the 'Rat Race' represent in the book?",
                answers: [
                    "A competitive business environment",
                    "The cycle of working for money without building wealth",
                    "A type of investment strategy",
                    "A board game mentioned in the book"
                ],
                correct: 1,
                explanation: "The Rat Race represents the endless cycle of working for money, paying expenses, and never building true wealth or financial freedom."
            },
            {
                question: "According to Kiyosaki, what should you do first when you get paid?",
                answers: [
                    "Pay all your bills immediately",
                    "Put money into savings",
                    "Pay yourself first by investing",
                    "Buy something nice for yourself"
                ],
                correct: 2,
                explanation: "Pay yourself first means setting aside money for investments and assets before paying other expenses. This builds wealth over time."
            },
            {
                question: "What are the four quadrants in the Cashflow Quadrant?",
                answers: [
                    "Employee, Self-employed, Business owner, Investor",
                    "Saver, Spender, Investor, Borrower",
                    "Assets, Liabilities, Income, Expenses",
                    "Rich, Poor, Middle class, Wealthy"
                ],
                correct: 0,
                explanation: "The four quadrants are E (Employee), S (Self-employed), B (Business owner), and I (Investor). Moving from left to right increases financial freedom."
            },
            {
                question: "Why does Kiyosaki say 'your house is not an asset'?",
                answers: [
                    "Houses always lose value",
                    "You can't sell your house",
                    "It takes money out of your pocket (mortgage, taxes, maintenance)",
                    "Houses are too expensive"
                ],
                correct: 2,
                explanation: "Your primary residence takes money out of your pocket through mortgage payments, taxes, insurance, and maintenance, making it a liability, not an asset."
            }
        ]
    },
    'thinking-fast': {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        questions: [
            {
                question: "What is System 1 thinking?",
                answers: [
                    "Slow, deliberate, and logical thinking",
                    "Fast, automatic, and intuitive thinking",
                    "Mathematical and analytical thinking",
                    "Creative and artistic thinking"
                ],
                correct: 1,
                explanation: "System 1 is fast, automatic, intuitive thinking that operates with little effort. It's responsible for quick judgments and gut reactions."
            },
            {
                question: "What is anchoring bias?",
                answers: [
                    "Being too attached to your first idea",
                    "Relying too heavily on the first piece of information encountered",
                    "Staying in one place too long",
                    "Being influenced by your emotions"
                ],
                correct: 1,
                explanation: "Anchoring bias occurs when people rely too heavily on the first piece of information they receive when making decisions."
            }
        ]
    },
    'atomic-habits': {
        title: 'Atomic Habits',
        author: 'James Clear',
        questions: [
            {
                question: "What is the 1% rule in habit formation?",
                answers: [
                    "Small improvements compound over time",
                    "You should only change 1% of your habits",
                    "Habits take 1% of your energy",
                    "Success is 1% inspiration, 99% perspiration"
                ],
                correct: 0,
                explanation: "Small 1% improvements compound over time to create remarkable results. Getting 1% better each day leads to being 37 times better in a year."
            },
            {
                question: "What are the four stages of habit formation?",
                answers: [
                    "Cue, Craving, Response, Reward",
                    "Think, Plan, Act, Review",
                    "Start, Continue, Maintain, Master",
                    "Trigger, Action, Result, Repeat"
                ],
                correct: 0,
                explanation: "The four stages are: Cue (trigger), Craving (motivation), Response (action), and Reward (benefit). This forms the habit loop."
            },
            {
                question: "What is habit stacking?",
                answers: [
                    "Doing multiple habits at once",
                    "Linking a new habit to an existing one",
                    "Building habits on top of each other",
                    "Creating a list of habits to do"
                ],
                correct: 1,
                explanation: "Habit stacking means linking a new habit to an existing one using the formula: 'After I [existing habit], I will [new habit].'"
            },
            {
                question: "What makes a habit stick according to Clear?",
                answers: [
                    "Willpower and motivation",
                    "Making it obvious, attractive, easy, and satisfying",
                    "Doing it for 21 days straight",
                    "Having a strong why"
                ],
                correct: 1,
                explanation: "The four laws of behavior change: make it obvious (cue), attractive (craving), easy (response), and satisfying (reward)."
            },
            {
                question: "What is the plateau of latent potential?",
                answers: [
                    "The point where habits become automatic",
                    "When you stop improving at a skill",
                    "The valley of disappointment before breakthrough",
                    "The maximum potential of any habit"
                ],
                correct: 2,
                explanation: "The plateau of latent potential explains why habits seem to make no difference until you cross a critical threshold and breakthrough occurs."
            }
        ]
    },
    'mindset': {
        title: 'Mindset',
        author: 'Carol Dweck',
        questions: [
            {
                question: "What is the key difference between fixed and growth mindset?",
                answers: [
                    "Fixed mindset believes abilities are unchangeable, growth mindset believes they can be developed",
                    "Fixed mindset is negative, growth mindset is positive",
                    "Fixed mindset is for adults, growth mindset is for children",
                    "There is no real difference"
                ],
                correct: 0,
                explanation: "Fixed mindset believes abilities are static traits, while growth mindset believes abilities can be developed through effort, learning, and persistence."
            },
            {
                question: "How should you praise children according to Dweck?",
                answers: [
                    "Praise their intelligence and talent",
                    "Praise their effort and process",
                    "Don't praise them at all",
                    "Praise the results they achieve"
                ],
                correct: 1,
                explanation: "Praise the process, effort, and strategies rather than intelligence or talent. This encourages a growth mindset and resilience."
            }
        ]
    },
    'sapiens': {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        questions: [
            {
                question: "What are the three major revolutions in human history according to Harari?",
                answers: [
                    "Cognitive, Agricultural, Scientific",
                    "Stone Age, Bronze Age, Iron Age",
                    "Hunting, Farming, Industrial",
                    "Tribal, Feudal, Modern"
                ],
                correct: 0,
                explanation: "The Cognitive Revolution (70,000 years ago), Agricultural Revolution (10,000 years ago), and Scientific Revolution (500 years ago) shaped human history."
            },
            {
                question: "What enabled Homo sapiens to dominate other human species?",
                answers: [
                    "Superior physical strength",
                    "Better tools and weapons",
                    "Ability to cooperate in large numbers through shared myths",
                    "Larger brain size"
                ],
                correct: 2,
                explanation: "The ability to create and believe in shared myths (religions, nations, corporations) allowed sapiens to cooperate in unprecedented numbers."
            }
        ]
    },
    'deep-work': {
        title: 'Deep Work',
        author: 'Cal Newport',
        questions: [
            {
                question: "What is deep work?",
                answers: [
                    "Working long hours without breaks",
                    "Professional activities performed in a state of distraction-free concentration",
                    "Physical labor that requires strength",
                    "Working on multiple projects simultaneously"
                ],
                correct: 1,
                explanation: "Deep work is professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit."
            },
            {
                question: "What is the opposite of deep work?",
                answers: [
                    "Lazy work",
                    "Shallow work",
                    "Easy work",
                    "Surface work"
                ],
                correct: 1,
                explanation: "Shallow work consists of logistical-style tasks performed while distracted. These efforts tend to not create much new value and are easy to replicate."
            },
            {
                question: "What is the key to developing a deep work habit?",
                answers: [
                    "Working harder",
                    "Eliminating all distractions",
                    "Creating rituals and routines",
                    "Working longer hours"
                ],
                correct: 2,
                explanation: "Developing rituals and routines around deep work helps minimize the friction to transition into and maintain a state of unbroken concentration."
            }
        ]
    },
    'psychology-money': {
        title: 'Psychology of Money',
        author: 'Morgan Housel',
        questions: [
            {
                question: "What is the most important factor in building wealth according to Housel?",
                answers: [
                    "High income",
                    "Smart investments",
                    "Time and compound interest",
                    "Taking big risks"
                ],
                correct: 2,
                explanation: "Time is the most powerful force in investing. Compound interest and time in the market beat timing the market or having the highest income."
            },
            {
                question: "What does 'enough' mean in the context of money?",
                answers: [
                    "Having more than your neighbors",
                    "Knowing when to stop taking risks that might jeopardize what you have",
                    "Earning a million dollars",
                    "Being able to buy anything you want"
                ],
                correct: 1,
                explanation: "Knowing when you have 'enough' means understanding when to stop taking risks that might jeopardize what you already have for gains you don't need."
            }
        ]
    },
    'power-now': {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        questions: [
            {
                question: "What is the main message of The Power of Now?",
                answers: [
                    "Plan for the future carefully",
                    "Learn from past mistakes",
                    "Focus on the present moment",
                    "Time management is crucial"
                ],
                correct: 2,
                explanation: "The main message is that true peace and happiness can only be found by fully embracing and being present in the current moment."
            },
            {
                question: "What does Tolle call the voice in your head?",
                answers: [
                    "Intuition",
                    "The ego",
                    "Consciousness",
                    "The soul"
                ],
                correct: 1,
                explanation: "Tolle refers to the constant mental chatter and self-talk as the ego, which creates suffering by dwelling on past and future rather than the present."
            }
        ]
    }
};

// App state
let currentScreen = 'landing';
let currentBook = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userName = '';
let userGoal = '';
let quizStartTime = null;
let timerInterval = null;
let isLoggedIn = false;
let pendingBookSelection = null;

// Login functions
function promptLogin(bookId) {
    if (isLoggedIn) {
        selectBook(bookId);
    } else {
        pendingBookSelection = bookId;
        showScreen('login');
    }
}

function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorElement = document.getElementById('login-error');
    
    if (username === 'user' && password === 'pass') {
        isLoggedIn = true;
        userName = 'Demo User';
        
        // Update profile display
        const userNameElement = document.querySelector('.user-info h2');
        if (userNameElement) {
            userNameElement.textContent = userName;
        }
        
        // Hide error
        errorElement.classList.add('hidden');
        
        // If there was a pending book selection, go to that book
        if (pendingBookSelection) {
            selectBook(pendingBookSelection);
            pendingBookSelection = null;
        } else {
            showScreen('profile');
        }
    } else {
        // Show error
        errorElement.classList.remove('hidden');
    }
}

// Profile setup functions
function selectGoal(goal) {
    userGoal = goal;
    
    // Update button styling
    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-goal="${goal}"]`).classList.add('selected');
    
    // Enable complete button if name is also filled
    checkSetupComplete();
}

function checkSetupComplete() {
    const nameInput = document.getElementById('username');
    const completeBtn = document.querySelector('.setup-complete-btn');
    
    if (nameInput && completeBtn) {
        if (nameInput.value.trim() && userGoal) {
            completeBtn.disabled = false;
        } else {
            completeBtn.disabled = true;
        }
    }
}

function completeSetup() {
    const nameInput = document.getElementById('username');
    userName = nameInput.value.trim();
    
    if (userName && userGoal) {
        isLoggedIn = true;
        
        // Update profile display
        const userNameElement = document.querySelector('.user-info h2');
        if (userNameElement) {
            userNameElement.textContent = userName;
        }
        showScreen('profile');
    }
}

// Update timer display
function updateTimer() {
    if (!quizStartTime) return;
    
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const timeElement = document.getElementById('time-elapsed');
    if (timeElement) {
        timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    currentScreen = screenId;
    
    // Start timer for quiz
    if (screenId === 'quiz' && !quizStartTime) {
        quizStartTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    // Clear timer when leaving quiz
    if (screenId !== 'quiz' && timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Book selection
function selectBook(bookId) {
    if (!isLoggedIn) {
        promptLogin(bookId);
        return;
    }
    
    currentBook = bookId;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizStartTime = null;
    
    const book = quizData[bookId];
    
    // Update quiz header
    const bookElement = document.getElementById('current-book');
    const authorElement = document.getElementById('current-author');
    const scoreElement = document.getElementById('current-score');
    const timeElement = document.getElementById('time-elapsed');
    
    if (bookElement) bookElement.textContent = book.title;
    if (authorElement) authorElement.textContent = book.author;
    if (scoreElement) scoreElement.textContent = '0';
    if (timeElement) timeElement.textContent = '0:00';
    
    // Load first question
    loadQuestion();
    showScreen('quiz');
}

// Load question
function loadQuestion() {
    const book = quizData[currentBook];
    const question = book.questions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / book.questions.length) * 100;
    const progressBar = document.getElementById('quiz-progress');
    const questionCounter = document.getElementById('question-counter');
    const currentScoreElement = document.getElementById('current-score');
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (questionCounter) {
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${book.questions.length}`;
    }
    if (currentScoreElement) {
        currentScoreElement.textContent = score.toString();
    }
    
    // Update question
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Update answers
    const answersContainer = document.getElementById('answers');
    if (answersContainer) {
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.onclick = () => selectAnswer(index);
            answersContainer.appendChild(button);
        });
    }
    
    // Hide feedback
    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.classList.add('hidden');
    }
    selectedAnswer = null;
}

// Select answer
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = answerIndex;
    const book = quizData[currentBook];
    const question = book.questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Style buttons based on correctness
    buttons.forEach((button, index) => {
        if (index === question.correct) {
            button.classList.add('correct');
        } else if (index === answerIndex && index !== question.correct) {
            button.classList.add('incorrect');
        }
        button.style.pointerEvents = 'none'; // Disable further clicks
    });
    
    // Update score
    if (answerIndex === question.correct) {
        score++;
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    const isCorrect = answerIndex === question.correct;
    
    if (feedback) {
        feedback.innerHTML = `
            <div class="feedback-content">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <p><strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong> ${question.explanation}</p>
            </div>
            <button class="next-btn" onclick="nextQuestion()">
                ${currentQuestionIndex < book.questions.length - 1 ? 'Next Question' : 'View Results'}
            </button>
        `;
        
        feedback.classList.remove('hidden');
    }
}

// Next question
function nextQuestion() {
    const book = quizData[currentBook];
    
    if (currentQuestionIndex < book.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    const book = quizData[currentBook];
    const percentage = Math.round((score / book.questions.length) * 100);
    
    // Update results display
    const scoreElement = document.querySelector('.score');
    const percentageElement = document.querySelector('.percentage');
    
    if (scoreElement) scoreElement.textContent = `${score}/${book.questions.length}`;
    if (percentageElement) percentageElement.textContent = `${percentage}%`;
    
    // Show appropriate badge based on performance
    const badgeElement = document.querySelector('.badge-earned');
    if (badgeElement) {
        if (percentage >= 80) {
            badgeElement.innerHTML = '<span class="badge-icon"><i class="fas fa-trophy"></i></span><span>New Badge: Master Learner!</span>';
        } else if (percentage >= 60) {
            badgeElement.innerHTML = '<span class="badge-icon"><i class="fas fa-brain"></i></span><span>New Badge: Concept Grasper!</span>';
        } else {
            badgeElement.innerHTML = '<span class="badge-icon"><i class="fas fa-book"></i></span><span>Keep Learning - You\'re Improving!</span>';
        }
    }
    
    showScreen('results');
}

// Quiz quit functions
function confirmQuitQuiz() {
    const modal = document.getElementById('quit-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeQuitModal() {
    const modal = document.getElementById('quit-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function quitQuiz() {
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Reset quiz state
    currentBook = null;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizStartTime = null;
    
    // Close modal and go to books screen
    closeQuitModal();
    showScreen('books');
}

// Leaderboard tabs
function showLeaderboard(type) {
    // Update tab styling
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // In a real app, this would fetch different data
    // For demo purposes, we'll just show the same data
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Add name input listener
    const nameInput = document.getElementById('username');
    if (nameInput) {
        nameInput.addEventListener('input', checkSetupComplete);
    }
    
    // Add login form listeners
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    
    if (loginUsername && loginPassword) {
        // Allow Enter key to submit login
        [loginUsername, loginPassword].forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleLogin();
                }
            });
        });
    }
    
    // Add some interactive animations
    document.querySelectorAll('.book-card, .book-card-home').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('quit-modal');
        if (modal && e.target === modal) {
            closeQuitModal();
        }
    });
    
    // Add typing effect to landing page (for demo wow factor)
    const title = document.querySelector('.header-content h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Add some demo data updates for portfolio effect
setInterval(() => {
    // Randomly update the stats to show "live" activity
    const stats = document.querySelectorAll('.stats-preview .number');
    if (stats.length > 0 && currentScreen === 'landing') {
        stats[0].textContent = (2847 + Math.floor(Math.random() * 10)).toLocaleString();
        stats[1].textContent = (156 + Math.floor(Math.random() * 5)).toString();
    }
}, 5000);