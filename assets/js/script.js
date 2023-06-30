let quizData = [
    {
        question: "When you drive at night, which of the following types of eyeglasses should you NOT wear?",
        A: "Tinted",
        B: "Bifocals",
        C: "Half moon",
        D: "Designe",
        correct: "A",
    },
    {
        question: "All your passengers must wear seat belts unless?",
        A: "they are sitting in the back seat.",
        B: "an infant is sitting on a passenger's lap.",
        C: "you are driving in a congested area.",
        D: "they are exempted for medical reasons.",
        correct: "D",
    },
    {
        question: "You need to reverse into a side street. At what point is your car the biggest hazard to passing traffic?",
        A: "As the front of your car swings out",
        B: "After you have entered the side road",
        C: "When you have completed the manoeuvre",
        D: "When you begin the manoeuvre",
        correct: "A",
    },
    {
        question: "You should not reverse?",
        A: "in a built-up area.",
        B: "into a side street.",
        C: "further than necessary.",
        D: "for a distance longer than the length of your car.",
        correct: "C",
    },
    {
        question: "You come across an unmarked crossroads with other traffic approaching. Who has right of way?",
        A: "No one",
        B: "Whoever is driving the biggest vehicle",
        C: "The driver who is on the widest road",
        D: "Whoever is driving the fastest vehicle",
        correct: "A",
    },
    {
        question: "The two second rule allows you to",
        A: "keep a safe distance from the vehicle in front.",
        B: "check over your shoulder.",
        C: "check all your mirrors.",
        D: "keep a safe distance from the kerb.",
        correct: "A",
    },
    {
        question: "The warning light for your anti-lock brakes comes on and stays on. You should",
        A: "check the brake fluid.",
        B: "make sure that the footbrake is released properly by pumping it.",
        C: "get your brakes checked straight away.",
        D: "make sure that the handbrake is fully released.",
        correct: "C",
    },
    {
        question: "You are involved in a collision in which someone suffers a burn. A burn should be cooled for at least",
        A: "1 hour",
        B: "5 minutes",
        C: "20 minutes",
        D: "30 minutes ",
        correct: "C",
    },
    {
        question: "The hard shoulder of a multi-laned carriageway is for",
        A: "stopping in an emergency.",
        B: "building up your speed to join the carriageway.",
        C: "stopping if you need to rest.",
        D: "reducing your speed so that you can leave the carriageway.",
        correct: "A",
    },
    {
        question: "It is compulsory to wear glasses or contact lenses when you drive if",
        A: "there is a problem with eyesight in your family.",
        B: "you have a disabled badge.",
        C: "you are unable to read a vehicle number plate from a distance of 120 feet (36 metres) without them.",
        D: "you are unable to read a vehicle number plate from a distance of 67 feet (20.5 metres) without them.",
        correct: "D",
    },
    {
        question: "What is the purpose of an Active Traffic Management scheme on a motorway?",
        A: "To prevent dangerous overtaking",
        B: "To encourage drivers to make more rest stops",
        C: "To reduce the incidence of tailgating",
        D: " To prevent congestion",
        correct: "D",
    },
    {
        question: "There is an obstruction on your side of the road. You should",
        A: "stop and give way to oncoming traffic; they have right of way.",
        B: "continue driving; you have right of way.",
        C: "accelerate; in this situation, the first through has right of way.",
        D: "drive through slowly; whoever is there first has right of way, but you do not want to drive dangerously.",
        correct: "A",
    },
    {
        question: "You are driving in icy conditions when you suddenly go into a rear wheel skid. What should you do?",
        A: "Don't steer at all and let your car right itself.",
        B: "Steer into the skid.",
        C: "Brake hard.",
        D: "Steer away from the skid.",
        correct: "B",
    },
    {
        question: "You signal your intentions by your direction indicators and",
        A: "fog lights.",
        B: "interior light.",
        C: "side lights.",
        D: "brake lights.",
        correct: "D",
    },
    {
        question: "You have been invited to lunch in a pub but you know that you will be driving in the evening. What should you do?",
        A: "Have just a couple of alcoholic drinks.",
        B: "Have no alcoholic drinks.",
        C: "Have a hot meal with your alcoholic drinks.",
        D: "Drink a pint of water before you have any alcoholic drinks.",
        correct: "B",
    },
    {
        question: "How can you use your engine to slow down more?",
        A: "Change into a higher gear.",
        B: "Put your car into reverse. ",
        C: " Change into a lower gear.",
        D: "Put your car into neutral. ",
        correct: "C",
    },
    {
        question: "Under what circumstances are you allowed to drive over a footpath?",
        A: "When you want to get lawful access to a property",
        B: "When it is wide enough for you to do so",
        C: "When there are no pedestrians on it",
        D: "When you want to overtake slow-moving traffic",
        correct: "A",
    },
    {
        question: "How should you cross a level crossing with gates?",
        A: "Cross and leave the gates open",
        B: "Pass through the gates one at a time",
        C: "Pass through both gates in one go ",
        D: "None of the above",
        correct: "C",
    },
    {
        question: "If you are reversing, who is least likely to be seen by you?",
        A: "Motorcyclists",
        B: "Children",
        C: "Pedestrians",
        D: "Cyclists",
        correct: "D",
    },
    {
        question: " You are driving down a steep hill and want to go slower. You should",
        A: "brake sharply on bends.",
        B: "change into a higher gear.",
        C: "put your vehicle into neutral. ",
        D: "change into a lower gear.",
        correct: "D",
    }


];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const A_text = document.getElementById('A_text');
const B_text = document.getElementById('B_text');
const C_text = document.getElementById('C_text');
const D_text = document.getElementById('D_text');
const submitBtn = document.getElementById('submit');
const counter = document.getElementById('counter');


let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {


    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    A_text.innerText = currentQuizData.A;
    B_text.innerText = currentQuizData.B;
    C_text.innerText = currentQuizData.C;
    D_text.innerText = currentQuizData.D;
    counter.innerText = currentQuiz + 1;
}


function deselectAnswers() {

    answerEls.forEach(answerEl => answerEl.checked = false);
}


function getSelected() {

    let answer=
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        };
    });
    return answer;
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        counter.innerText = currentQuiz + 1;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            
            <h2> You answered ${score}/${quizData.length} questions correctly </h2>

            <button onclick ="location.reload()"> Reload </button> 

            `;


        }
    }
});