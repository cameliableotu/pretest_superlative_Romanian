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
 
        // .print()
    ,
    newImage("tallestgiraffe", "tallestgiraffe.png")
        
        // .print()
    ,
	       newImage("leasttallgiraffe", "leasttallgiraffe.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("tallgiraffe") )
        .settings.add( 250 , 0 , getImage("tallestgiraffe") )
         .settings.add(500 , 0 , getImage("leasttallgiraffe") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("tallgiraffe") , getImage("tallestgiraffe"), getImage ("leasttallgiraffe"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me a tall, but not the tallest lamp! </p>")
	       ,
	       newImage("leasttalllamp", "leasttalllamp.png")
 
        // .print()
    ,
    newImage("tallestlamp", "tallestlamp.png")
        
        // .print()
    ,
	       newImage("talllamp", "talllamp.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("leasttalllamp") )
        .settings.add( 250 , 0 , getImage("tallestlamp") )
         .settings.add(500 , 0 , getImage("talllamp") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("leasttalllamp") , getImage("tallestlamp"), getImage ("talllamp"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me the smallest mushroom! </p>")
	       ,
	       newImage("smallestmushroom", "smallestmushroom.png")
 
        // .print()
    ,
    newImage("middlemushroom", "middlemushroom.png")
        
        // .print()
    ,
	       newImage("leastsmallmushroom", "leastsmallmushroom.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("smallestmushroom") )
        .settings.add( 250 , 0 , getImage("middlemushroom") )
         .settings.add(500 , 0 , getImage("leastsmallmushroom") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("smallestmushroom") , getImage("middlemushroom"), getImage ("leastsmallmushroom"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me a big, but not the biggest peach! </p>")
	       ,
	       newImage("biggestpeach", "biggestpeach.png")
 
        // .print()
    ,
    newImage("bigpeach", "bigpeach.png")
        
        // .print()
    ,
	       newImage("leastbigpeach", "leastbigpeach.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("biggestpeach") )
        .settings.add( 250 , 0 , getImage("bigpeach") )
         .settings.add(500 , 0 , getImage("leastbigpeach") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("biggestpeach") , getImage("bigpeach"), getImage ("leastbigpeach"))
    .settings.keys(          "F"    ,          "J", "K"  )
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
  
