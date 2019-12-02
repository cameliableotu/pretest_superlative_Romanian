PennController.DebugOff() 
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "preexperiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Salutare tuturor! </p>")
    ,
    newText("<p> Vrăjitorul vrea să îţi pună nişte întrebări pentru a vedea cum înţelegi anumite propoziţii despre diferite obiecte şi animale. </p>" ),
    newText("<p> Te rog introdu numele tău, răspunde la nişte întrebări, iar apoi fă click pe butonul de mai jos pentru a începe.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> Câţi ani ai? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> Ce sex ai?</p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       newText ("<p> Pentru a avansa, foloseşte bara de spaţiu (space bar). </p>")
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

PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Pur şi simplu trebuie să faci click pe răspunsul pe care îl consideri potrivit. </p>")
	       ,
   newText ("<p> Hai să începem! </p>"),
   newText ("<p> Arată-mi girafa cea mai înaltă! </p>")
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
   newText ("<p> Arată-mi o lampă înaltă, dar nu cea mai înaltă! </p>")
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
   newText ("<p> Arată-mi cea mai mică ciupercă! </p>")
	       ,
	       newImage("smallestmushroom", "smallestmushroom.png")
 
        // .print()
    ,
    newImage("smallmushroom", "smallmushroom.png")
        
        // .print()
    ,
	       newImage("leastsmallmushroom", "leastsmallmushroom.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("smallestmushroom") )
        .settings.add( 250 , 0 , getImage("smallmushroom") )
         .settings.add(500 , 0 , getImage("leastsmallmushroom") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("smallestmushroom") , getImage("smallmushroom"), getImage ("leastsmallmushroom"))
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
   newText ("<p> Arată-mi un trandafir mic, dar nu cel mai mic! </p>")
	       ,
	       newImage("leastsmallrose", "leastsmallrose.png")
 
        // .print()
    ,
    newImage("smallrose", "smallrose.png")
        
        // .print()
    ,
	       newImage("smallestrose", "smallestrose.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("leastsmallrose") )
        .settings.add( 250 , 0 , getImage("smallrose") )
         .settings.add(500 , 0 , getImage("smallestrose") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("leastsmallrose") , getImage("smallrose"), getImage ("smallestrose"))
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
   newText ("<p> Arată-mi o piersică mare, dar nu cea mai mare! </p>")
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
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Arată-mi cea mai mare prăjitură! </p>")
	       ,
	       newImage("bigcupcake", "bigcupcake.png")
 
        // .print()
    ,
    newImage("leastbigcupcake", "leastbigcupcake.png")
        
        // .print()
    ,
	       newImage("biggestcupcake", "biggestcupcake.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("bigcupcake") )
        .settings.add( 250 , 0 , getImage("leastbigcupcake") )
         .settings.add(500 , 0 , getImage("biggestcupcake") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("bigcupcake") , getImage("leastbigcupcake"), getImage ("biggestcupcake"))
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
	       newImage ("brownbear", "brownbear.png")
.print()
	       ,
   newText ("<p> Arată-mi care propoziţie este cea mai bună descriere a imaginii! Pur şi simplu fă click pe ea. </p>")
	      
	       ,
	       newImage("underinformativebear", "underinformativebear.jpg")
 
        // .print()
    ,
    newImage("optimalbear", "optimalbear.jpg")
        
        // .print()
    ,
	       newImage("wrongbear1", "wrongbear1.jpg")
       
        // .print()
    ,
    newCanvas(700,300)
        .settings.add( 0 , 0 , getImage("underinformativebear") )
        .settings.add( 300 , 0 , getImage("optimalbear") )
         .settings.add(650 , 0 , getImage("wrongbear1") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("underinformativebear") , getImage("optimalbear"), getImage ("wrongbear1"))
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
	       newImage ("brownbear", "brownbear.png")
.print()
	       ,
   newText ("<p>  Arată-mi care propoziţie NU este cea mai bună descriere a imaginii! </p>")
,
	      newImage("optimalbear", "optimalbear.jpg")
        // .print()
	       ,
	       newImage("underinformativebear", "underinformativebear.jpg")
 
        // .print()
    ,
   
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("optimalbear") )
        .settings.add( 350 , 0 , getImage("underinformativebear") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("optimalbear") , getImage("underinformativebear"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
	       newImage ("brownbear", "brownbear.png")
.print()
	       ,
 newText ("<p>  Arată-mi care propoziţie NU este cea mai bună descriere a imaginii!! </p>")
	    
	       ,
	       newImage("wrongbear1", "wrongbear1.jpg")
 
        // .print()
    ,
   newImage("optimalbear", "optimalbear.jpg")  
        // .print()
,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("wrongbear1") )
        .settings.add( 300 , 0 , getImage("optimalbear") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("wrongbear1") , getImage("optimalbear"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
	       newImage ("girl", "girl.png")
.print()
	       ,
   newText ("<p>  Arată-mi care propoziţie este cea mai bună descriere a imaginii!! </p>")
	       ,
	newImage("wronggirl", "wronggirl.jpg")
       
        // .print()
    ,
 
	       newImage("underinformativegirl", "underinformativegirl.jpg")
 
        // .print()
    ,
    newImage("optimalgirl", "optimalgirl.jpg")
        
        // .print()
    ,

    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("wronggirl") )
        .settings.add( 300 , 0 , getImage("underinformativegirl") )
         .settings.add(550 , 0 , getImage("optimalgirl") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage ("wronggirl"), getImage("underinformativegirl") , getImage("optimalgirl"), getImage ("wronggirl"))
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
	       newImage ("girl", "girl.png")
	       .print()
	       ,
   newText ("<p>  Arată-mi care propoziţie NU este cea mai bună descriere a imaginii! </p>")
,
newImage("underinformativegirl", "underinformativegirl.jpg")
 
        // .print()
,

	      newImage("optimalgirl", "optimalgirl.jpg")
        
        // .print()
	       ,
	 
   
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("underinformativegirl") )
        .settings.add( 300 , 0 , getImage("optimalgirl") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("underinformativegirl") , getImage("optimalgirl"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
,
	       newImage ("girl", "girl.png")
.print()
	       ,
 newText ("<p> Arată-mi care propoziţie NU este cea mai bună descriere a imaginii! </p>")
	    ,     newImage("optimalgirl", "optimalgirl.jpg")
        // .print
	       ,
	       newImage("wronggirl", "wronggirl.jpg")
 
        // .print()
    
,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("optimalgirl") )
        .settings.add( 300 , 0 , getImage("wronggirl") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("optimalgirl") , getImage("wronggirl"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))

PennController.SendResults( "send" );
PennController( "final" ,
	       newText ("<p> Mulţumesc pentru participare! </p>")
	       .print()
	       ,
	 newText("<p> Vrăjitorul îţi mulţumeşte şi el! Pa-pa! </p>")
        .print(),
	      
    newButton("void")
        .wait()
	       )
;
  
