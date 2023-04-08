class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Enter yout name here...");
        this.input2 = createInput("Enter Correct Option No...");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.message = createElement("h2")
    }
    
    hide(){
     this.title.hide();
     this.input1.hide();
     this.button.hide();
     this.input2.hide();
     this.message.hide();
    }

    display(){
     this.title.html("MyQuiz Game")
     this.title.position(350,0);

     this.question.html("Question:which animal has four noses")
     this.question.position(150,80);

     this.option1.html("A:sloth");
     this.option1.positon(150,100);

     this.option2.html("B:slug");
     this.option2.positon(150,120);

     this.option3.html("A:snail");
     this.option3.positon(150,140);

     this.option4.html("A:snake");
     this.option4.positon(150,160);

     this.input1.position(150,230);
     this.input2.position(350,230);
     this.button.position(290,300);

     this.button.mousePressed(()=>{
        this.message.html("Thank You, Your answer has been submitted");
        this.message.position();
     });
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestant Count').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            this.question.display();
        }
    }
}