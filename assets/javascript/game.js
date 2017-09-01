
// Questions are objects, correct answers have an ID of #correct 
var Q1 = {
	q: '<div id="question">Which national park saw the most visitors in 2016?</div>',
	a1: '<div id="answer">Great Smoky Mountains National Park</div>',
	a2: '<div class="choice">Grand Canyon National Park</div>',
	a3: '<div class="choice">Rocky Mountain National Park</div>',
	a4: '<div class="choice">Yosemite National Park</div>',
}

var Q2 = {
	q: '<div id="question">What is the only state without a national park OR a national monument?</div>',
	a1: '<div id="answer">Delaware</div>',
	a2: '<div class="choice">Maryland</div>',
	a3: '<div class="choice">Rhode Island</div>',
	a4: '<div class="choice">Connecticut</div>',
}
var Q3 = {
	q: '<div id="question">Where does General Sherman, the largest living single-stem tree in the world, live?</div>',
	a1: '<div id="answer">Sequoia National Park</div>',
	a2: '<div class="choice">Yosemite National Park</div>',
	a3: '<div class="choice">Redwood National Park</div>',
	a4: '<div class="choice">Yellowstone National Park</div>',
}

var Q4 = {
	q: '<div id="question">How National Parks exist in the U.S.?</div>',
	a1: '<div id="answer">59</div>',
	a2: '<div class="choice">412</div>',
	a3: '<div class="choice">248</div>',
	a4: '<div class="choice">C97</div>',
}

var Q5 = {
	q: '<div id="question">Which national park is the largest (by square acres)?</div>',
	a1: '<div id="answer">Wrangell-St.Elias National Park</div>',
	a2: '<div class="choice">Denali National Park</div>',
	a3: '<div class="choice">Mammoth Cave National Park</div>',
	a4: '<div class="choice">Glacier National Park</div>',
}

var Q6 = {
	q: '<div id="question">How National Parks exist in the U.S.?</div>',
	a1: '<div id="answer">59</div>',
	a2: '<div class="choice">412</div>',
	a3: '<div class="choice">248</div>',
	a4: '<div class="choice">C97</div>',
}

var Q7 = {
	q: '<div id="question">What is the southernmost national park in the NPS?</div>',
	a1: '<div id="answer">National Park of American Samoa</div>',
	a2: '<div class="choice">Hawai’i Volcanoes National Park</div>',
	a3: '<div class="choice">Dry Tortugas National Park</div>',
	a4: '<div class="choice">Big Bend National Park</div>',
}

var Q8 = {
	q: '<div id="question">Which state has the most national parks?</div>',
	a1: '<div id="answer">California</div>',
	a2: '<div class="choice">Alaska</div>',
	a3: '<div class="choice">Colorado</div>',
	a4: '<div class="choice">Utah</div>',
}

var Q9 = {
	q: '<div id="restart">Try again? Press here!</div>',
	a1: '',
	a2: '',
	a3: '',
	a4: '',
}

// Global Variables 
var correctanswers = 0;
var questionnumber = 0;   //keeps track of which question we're on

// Array to hold questions, all questions and answers 
var questions = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9];

// Function that will print the question 
function printquestion (question){
	$("#questionarea").html(question.q + question.a1 + question.a2 + question.a3 + question.a4);
	$("#gamestatus").html( correctanswers + '/8 correct');
}

//function to play gif when answer is correct
function nextquestion(){
	questionnumber = questionnumber +1; //moves to next question

	if (questionnumber == questions.length){ //checks to see if quiz is done
		//put in final image?	
	}

	printquestion(questions[questionnumber]); //prints next questions
	checkanswer(); //checks user response 
}

// Function that will check user choice, includes recursive fuctionality 
function checkanswer (){

	$("#answer").on("click", function() {
		//plays gif for correct answer
		$("#questionarea").html('Correct! <br><img src="./assets/images/goodanswer.gif">');

		//adds to count for correct answers
		correctanswers = correctanswers + 1; 

		setTimeout(nextquestion, 2500);

	});

	$(".choice").on("click", function() {
		//plays gif for wrong answer
		$("#questionarea").html('Wrong Answer... <br><img src="./assets/images/wronganswer.gif">');

		questionnumber = questionnumber +1; //moves to next question

		setTimeout(nextquestion, 2500);
	});

	// Prints the first question when user clicks 
	$("#restart").on("click", function() { 
		//Reset global variables 
		correctanswers = 0;
		wronganswers = 0;
		questionnumber = 0;
		printquestion(questions[questionnumber]); //print questions
		checkanswer(); 	//checks user response 
	});
}

$(document).ready(function() {

	// Prints the first question when user clicks 
	$("#startbutton").on("click", function() { 
			
		printquestion(questions[questionnumber]); //print questions
		checkanswer(); 	//checks user response 

	});
});

