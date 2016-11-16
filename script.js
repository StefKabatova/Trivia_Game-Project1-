$(document).ready(function(){

  var first_catg = $("#enews");
  var second_catg = $("#geo");
  var third_catg = $("#stem");
  var question = $("#question");
  var answer= $("#answer");
  var options = $(".options");
  var category_type = $("#category");
  var category_options = $("#category_box")
  var gamebox = $("#gamebox")
  var next = $("#next_button")


  var data;
  var category;
  var points = 0;
  var round = 0;
  var index = 0;
  var correct_answer ;
  var answer_selection;

  let entertainment_data = [{
    question: "Which film has a worldwide box-office gross income of over $2.7 billions? ",
    choices: ["Titanic","Lion King","Jurassic Park","Avatar"],
    answer: "Avatar"
  },{
    question:"Which actress has been nominated for an Academy Award more than 19 times, and won the award more than 3 times?",
    choices:["Julia Roberts","Kristen Stewart","Emily Blunt","Meryl Streep"],
    answer: "Meryl Streep"},
    {
      question:"How old was Daniel Radcliffe when he played in the first Harry Potter Movie?",
      choices:["12","11","13","15"],
      answer: "11"}
  ]

  let geo_data = [{
    question: "What is the largest island in the Mediterranean",
    choices: ["Sicily","Corsia", "Crete", "Cyprus"],
    answer: "Sicily"
  },{
    question:"What is the largest desert in the world?",
    choices:["Kalahari Desert","Mojave Desert","Sahara Desert","Sinai Desert"],
    answer: "Sahara Desert"},
    {
      question: "Where is Bora Bora located?",
      choices: ["Bahamas", "French Polynesia", "Grenada", "Colombia"],
      answer: "French Polynesia"
    }
  ]

  let stem_data = [{
    question: "What does wi-fi stand for?",
    choices: ["web interface filter","wireless fiber-optic","wireless fidelity","wireless local network"],
    answer: "wireless fidelity"
  },{
    question:"How far is it from Earth to the moon?",
    choices:["245,876mi","234,900mi","283,800mi","238,900mi"],
    answer: "238,900mi"},
    {
      question:"What's the name of the first supercomputer",
      choices:["Atlas","Cray","Watson","Jennings"],
      answer: "Cray"}
  ]


// set an event listeners on the categories
  first_catg.on("click", function(){
    category = entertainment_data
// shows which category was selected
    category_type.text("Category: Entertainment")
// passes selected category data as a parameter to the function add_content
    status_game()
  })
  second_catg.on("click", function(){
      category_type.text("Category: Geography")
      category = geo_data;
      status_game()
  })
  third_catg.on("click", function(){
      category_type.text("Category: Science & Technology")
      category = stem_data;
      status_game()
  })


  function status_game(){
      gamebox.show(1000)
      category_options.hide("slow")
    if (round <3 && index<3) {
      category = category
      add_content(category)
    }else{
      round= 0
      index= 0
      category_type.empty()
      question.empty()
      options.empty()
      $("#point").empty()
      gamebox.delay(500).hide("slow")
      next.text("Next")
      category_options.show("slow")
    }
  }


// function retrieves data for: question, answer choices, and answer.
  function add_content(category){
    data = category[index]
    for (key in data){
      if (key == "question"){
        $("#question").text(data[key])
        }
      if (key == "choices"){
    // goes through the choices array and provides a value and index
        data[key].forEach(function(item,index){
    // saves array content on based on the index
        var thing = item
    // inputs content on its respective box
       options.eq(index).text(thing)
        })
      }
      if (key == "answer"){
  // stores answer on a variable, so it can be checked
      correct_answer = data[key]
      }
    }
  }

  function game_checker(answer){
    if (answer == correct_answer){
      $("#question").text("Correct!")
      points += 100
    }
    else {
      $("#question").text("Incorrect!")
      // points -=50
    }
    $("#point").html("Total Points:" + "\n" + parseInt(points))

    next.show()
   };

   // sets an event listener on the answer choices and retrieves chosen value
   options.on("click", function(){
     answer_selection = $(this).text();
     // calls game_checker function to test if correct
     game_checker(answer_selection)
     round +=1
     index +=1

   })


   next.on("click", function(){
     if (round == 2){
       next.text("Play Again?")
     }
          next.hide()
          status_game()
       })

  next.hide()


})
