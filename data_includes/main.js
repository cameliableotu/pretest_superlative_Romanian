PennController.DebugOff() 
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "preexperiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Hey everyone! </p>")
    ,
    newText("<p> The wizard wants to ask you some questions to figure out how you understand certain sentences about various and animals. </p>" ),
    newText("<p>Please enter your ID, answer some questions and then click the button below to start the pretest.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> What is your age? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> What is your gender?</p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> What is your profession?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       newText ("<p> To move to the next page, always use the space bar. </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );

;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> You simply have to click on the item you think is the answer to the question. </p>")
	       ,
   newText ("<p> Let's start! </p>"),
   newText ("<p> Show me the tallest giraffe! </p>")
	       ,
	       newImage("tallgiraffe", "tallgiraffe.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("tallestgiraffe", "tallestgiraffe.png")
        .settings.size(200,200)
        // .print()
    ,
	       newImage("leasttallgiraffe", "leasttallgiraffe.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("tallgiraffe") )
        .settings.add( 250 , 0 , getImage("tallestgiraffe") )
         .settings.add(500 , 0 , getImage("leasttallgiraffe") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("tallgiraffe") , getImage("tallesgiraffe"), getImage ("leasttallgiraffe"))
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController.SendResults( "send" );
PennController( "final" ,
	       newText ("<p> Thank you for your participation!. </p>")
	       .print()
	       ,
	 newText("<p> The wizard thanks you too! Bubbye! </p>")
        .print(),
	      
    newButton("void")
        .wait()
	       )
;
  
