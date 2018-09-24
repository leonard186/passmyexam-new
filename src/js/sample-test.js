var Quiz = function(question, answer1, answer2, answer3, answer4, correct, info) {
    this.question = question,
        this.answer1 = answer1,
        this.answer2 = answer2,
        this.answer3 = answer3,
        this.answer4 = answer4,
        this.correct = correct,
        this.info = info
};

var quiz1 = [
    //Question 1
    new Quiz(
        'Who established the Church of England?',
        'William of Orange',
        'Henry VII',
        'Henry VIII',
        'Mary I of England', [0, 0, 1, 0],
        'Henry VIII started the process of creating the Church of England after his split with the Pope in the 1530s. Henry was anxious to ensure a male heir after his first wife, Catherine of Aragon, had borne him only a daughter. He wanted his marriage annulled in order to remarry'
    ),
    //Question 2
    new Quiz(
        'Which territories form Great Britain?',
        'England and Wales',
        'Northern Ireland',
        'Scotland',
        'The Channel Islands', [1, 0, 1, 0],
        '‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland'
    ),
    //Question 3
    new Quiz(
        'Who ordered the building of a wall in North of England to separate from the Picts (Scottish ancestors)?',
        'Emperor Hadrian',
        'Julius Caesar',
        'The Roman Emperor Claudius',
        'The admiral of the Roman Channel fleet, Carausius', [1, 0, 0, 0],
        'Hadrian’s Wall was the north-west frontier of the Roman empire for nearly 300 years. It was built by the Roman army on the orders of the emperor Hadrian following his visit to Britain in AD 122. At 73 miles (80 Roman miles) long, it crossed northern Britain from Wallsend on the River Tyne in the east to Bowness-on-Solway in the west. The most famous of all the frontiers of the Roman empire, Hadrian’s Wall was made a World Heritage Site in 1987'
    ),
    //Question 4
    new Quiz(
        'Isaac Newton was best known for:',
        'The discovery of gravity',
        'The discovery of oxygen',
        'The discovery of Australopithecus',
        'The discovery of penicillin', [1, 0, 0, 0],
        'Newton’s most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe. He also discovered that white light is made up of the colours of the rainbow. Many of his discoveries are still important for modern science'
    ),
    //Question 5
    new Quiz(
        'Select two of the following that are part of the fundamental principles of British life',
        'Personal financial gain',
        'Renunciation',
        'Democracy',
        'The rule of law', [0, 0, 1, 1],
        'The fundamental principles of British life include: democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs and participation in community life'
    ),
    //Question 6
    new Quiz(
        'Select the patron Saint of Northern Ireland?',
        'St Patrick',
        'St David',
        'St Andrew',
        'St Augustine', [1, 0, 0, 0],
        'Saint Patrick is the patron saint of Ireland. He was a Christian missionary given credited with converting Ireland to Christianity in the AD 400s'
    ),
    //Question 7
    new Quiz(
        'Where was William Shakespeare born?',
        'Stratford-upon-Avon',
        'Newcastle upon Tyne',
        'Oxford',
        'Aberdeen', [1, 0, 0, 0],
        'William Shakespeare was born in Stratford-upon-Avon, England, in April 1564'
    )
];



//quiz controller
var model = (function() {

    return {
        //storing the count of the quizzes
        counter: 0,

        //store score points
        score: 0,

        //set timer value
        timerCount: 0,
        timeRemaining: 2700,

        //storing the quiz array
        quizArray: [],

        //storing the validation pattern
        quizValidationArray: [],

        //storing all quiz instances
        quizCollection: [quiz1],

        //refresh page
        refresh: function() {
            location.reload();
        },

        //check if element has class function
        hasClass: function(element, className) {
            return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
        },
        /*
       example:
       var elem = document.getElementById('elementID');
       hasClass(elem, 'active'); OUTPUT: true or false
       */

        //shortcut function for getting elements by id
        getID: function(id) {
            return document.getElementById(id);
        },

        //loop through the quiz array and push into a global array
        getArray: function(array) {
            for (var i = 0; i < array.length; i++) {
                this.quizArray.push(array[i]);
            }
        },

        scorePercentage: function() {
            var totalQuestions = this.quizArray.length;
            var totalScore = this.score;
            var percentageScore = Math.round((totalScore / totalQuestions) * 100);
            return percentageScore;
        },

        countDownTimer: function() {
            var renderElem = this.getID('count-down');
            renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);

            //formats any single digit to double digits
            function format(n) {
                return (n < 10 ? '0' : '') + n;
            }

            //converts 60 seconds to 1 minute
            function convert(sec) {
                var minutes = Math.floor(sec / 60);
                var seconds = sec % 60;
                return `${format(minutes)} min : ${format(seconds)} sec`;
            }

            //set the interval for every 1 second
            var interval = setInterval(timing, 1000);

            //increment timer
            function timing() {
                model.timerCount++;
                renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);
                if (model.timeRemaining === model.timerCount) {
                    model.getID('quiz-layout').style.display = 'none';
                    model.getID('finished').style.display = 'block';
                    model.getID('final-score').innerHTML =
                        `<h3 class="red bold">Failed! Time is up ...</h3> 
                         <p>The time limit is  <span class="bold green">45 minutes</span></p>
                         <p>So far you scored <span class="bold">${model.score}</span>  
                         out of <span class="bold">${model.quizArray.length}</span> 
                         (<span class="red bold">${model.scorePercentage()}%</span>)</p>`;
                    model.timerCount = 0;
                    clearInterval(interval);
                }
            }
        },
    }

})();

//user interface controller
var view = (function() {

    //access dom elements
    var elem = {
        answers: model.getID('answers'),
        answersInput: this.answers.getElementsByTagName('input'),
        answersLabel: this.answers.getElementsByTagName('label'),
        question: model.getID('question'),
        answer1: model.getID('answer1'),
        answer2: model.getID('answer2'),
        answer3: model.getID('answer3'),
        answer4: model.getID('answer4'),
        info: model.getID('info'),
        submit: model.getID('submit-btn'),
        next: model.getID('submit-btn-next'),
        finished: model.getID('finished'),
        quizLayout: model.getID('quiz-layout'),
        finishedBtn: model.getID('finished-btn'),
        finalScore: model.getID('final-score'),
        quizCount: model.getID('quiz-count'),
        correctCount: model.getID('correct-count')
    };


    var input = elem.answersInput;

    //counters to help validate user answers
    var selected = 0;
    var wrong = 0;
    var correctCount = 0;

    //function for resetting user validation counters
    var resetCounter = function() {
        selected = 0;
        wrong = 0;
        correctCount = 0;
    };

    //check if user selection is correct then increment correct answer count
    var checkSelected = function() {
        for (var i = 0; i < input.length; i++) {
            //assigning input elements parent to a variable
            var parentNode1 = input[i].parentNode;
            var parentNode2 = parentNode1.parentNode;
            var parentNode3 = parentNode2.parentNode;
            //style the choices according to validity
            input[i].value === '1' ? parentNode3.classList.add('valid') : parentNode3.classList.add('invalid');
            //quiz logic
            if (input[i].value === '0' && input[i].checked) {
                wrong++;
            }
            if (input[i].value === '1' && input[i].checked) {
                selected++;
            }
            //disable check buttons once the validation process has gone through
            input[i].disabled = true;
        }
    };

    //check how many correct answers are supposed to be and increment the count
    var checkCorrectNo = function() {
        for (var i = 0; i < model.quizArray[model.counter].correct.length; i++) {
            if (model.quizArray[model.counter].correct[i] === 1) {
                correctCount++;
            }
        }
    };

    //make sure only the correct amount of answers are displayed
    var controlQuiz = function() {
        if (model.counter >= model.quizArray.length - 1) {
            elem.quizLayout.style.display = "none";
            elem.finished.style.display = "block";
        }
    };

    //toggle between submit and continue(next) button
    var toggleButtons = function() {
        if (model.hasClass(elem.submit, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');
        } else if (model.hasClass(elem.next, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');

        }
    };

    //when this function is called it will display final results tot he DOM
    var renderScore = function() {
        var percentageScore = model.scorePercentage();
        if (percentageScore >= 75) {
            return elem.finalScore.innerHTML =
                `<h3 class="green bold">Passed!</h3>
                <p>Your scored <span class="bold">${model.score}</span> out of 
                <span class="bold">${model.quizArray.length}</span> 
                (<span class="green bold">${percentageScore}%</span>)</p>
                <p>Want to practice more and make sure you are ready for the exam?
                Check out all the <a href="'./src/pages/practice">practice tests</a> and be ready for the British citizenship exam!
                `;
        } else {
            return elem.finalScore.innerHTML =
                `<h3 class="red bold">Failed! </h3> 
                <p>The pass rate is <span class="bold green">75%</span> or higher</p>
                <p>You scored <span class="bold">${model.score}</span>  
                out of <span class="bold">${model.quizArray.length}</span> 
                (<span class="red bold">${percentageScore}%</span>)</p>
                <p>Don't worry! There are plenty of free <a href="./src/pages/practice.html">
                interactive practice tests</a> and free <a href="./src/pages/resources.html">
                study material</a> to get you ready for the exam!`;
        }
    };

    //remove control classes(valid and invalid)

    var removeControlClasses = function() {
        var e = elem.answers.childNodes;
        for (var i = 0; i < e.length; i++) {
            if (model.hasClass(e[i], 'valid') || model.hasClass(e[i], 'invalid')) {
                e[i].classList.remove('valid');
                e[i].classList.remove('invalid');
            }
        }
    };

    return {

        //render the quiz to the dom with appropriate logic
        generateQuiz: function(chooseQuiz) {
            //initiate quiz array
            model.getArray(chooseQuiz);

            //render the questions and answers into the appropriate elements
            function render() {
                elem.quizCount.innerHTML = `Question ${model.counter + 1} of ${model.quizArray.length}`;

                elem.question.innerHTML = `${model.quizArray[model.counter].question}`;
                elem.answer1.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[0]}">
                            ${model.quizArray[model.counter].answer1}
                        </label>
                    </div>`;
                elem.answer2.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[1]}">
                            ${model.quizArray[model.counter].answer2} 
                        </label>
                    </di v>`;
                elem.answer3.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[2]}">
                            ${model.quizArray[model.counter].answer3}
                        </label>
                    </div>`;
                elem.answer4.innerHTML =
                    ` <div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[3]}">
                            ${model.quizArray[model.counter].answer4}
                        </label>
                    </div>`;
            };
            //render first question
            render();

            //move to next question while validating the answer
            elem.submit.addEventListener("click", function() {

                //initiate validation process
                checkSelected();
                checkCorrectNo();

                if (selected === correctCount && selected !== 0 && wrong === 0) {
                    resetCounter();
                    model.score++;

                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="green bold">Correct</h2>
                         <p class="success">${model.quizArray[model.counter].info}</p>`;

                    elem.correctCount.innerHTML = model.score;

                    toggleButtons();
                    renderScore();
                } else {
                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="red bold">Incorrect</h2>
                         <p class="alert">${model.quizArray[model.counter].info}</p>`;
                    renderScore();
                    toggleButtons();
                    resetCounter();
                }

                document.querySelectorAll('.answer')[0].scrollIntoView({ behavior: "smooth", block: "start" })

                //render only available amount of questions/quiz
                console.log(`counter is: ${model.counter}`);
                console.log(`score is: ${model.score}`);

            });

            //this button will go to the next question without incrementing the score
            elem.next.addEventListener("click", function() {

                removeControlClasses();
                elem.info.innerHTML = '';
                controlQuiz();
                resetCounter();
                model.counter++;
                toggleButtons();
                render();
                model.getID('sample').scrollIntoView({ behavior: "smooth", block: "start" });
            });
        },

        //refresh page added for finish button
        finished: function() {
            elem.finishedBtn.addEventListener('click', function() {
                window.location = './src/pages/practice.html';
            });
        },

    }
})();

//global controller
var controller = (function(model, view) {

    var initiateQuiz = function(quiz) {
        var quizModal = document.getElementById('sample');

        view.generateQuiz(quiz);
        quizModal.style.display = "block";
    };

    var renderQuizOnClick = function() {
        initiateQuiz(quiz1);
        //model.countDownTimer();
        //model.getID('quiz-name').innerHTML += ' 1';
        //model.getID('finished-btn').innerHTML += ' 1';
    };


    return {
        init: function() {
            renderQuizOnClick();
            view.finished();
        }
    }

})(model, view);

controller.init();