 //        document.requestFullscreen(options);
 story();
 var clicks;

 function story() {
     var scene = 0;
     var clicks = 0;
     setTimeout(function () {
         $('#story').prepend('<img id="dialogPopUpPF" src="assets/talkDialog.svg" height="300"/>');
     }, 1000);
     setTimeout(function () {
         $("div.mText").html("Hi! I'm Peck, a Kakapo Bird!");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="assets/svg/emotions/happyB.svg" height="500">');
         clicks++;
     }, 1400);
     $("#continueBTN3").click(function () {
         console.log("clicked");
         if (clicks == 1) {
             $("#pCharacter img:last-child").remove();
             $('#pCharacter').prepend('<img src="assets/svg/emotions/sadB.svg" height="500">');
             $("div.mText").html("The Kakapo Bird is flightless...<br> ...basically, I can't fly. <br>");
             oneHalf();

         }
     });
 }

 function oneHalf() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="assets/svg/emotions/lookUpB.svg" height="500">');
         $("div.mText").html("<br> Ever since I've been little, my dream <br> has been to fly into the sky <br> and travel the world.");
         two();
     });
 }

 function two() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $('#pCharacter').prepend('<img src="assets/svg/emotions/lookUpB.svg" height="500">');
         $('#plane1').prepend('<img src="assets/svg/plane.svg" height="100">');
         $("div.mText").html("One day I looked up and realized <br> that even the sky <br> ...wouldn't be my limit...");
         threeHalf();
     });
 }

 function threeHalf() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $('#pCharacter').prepend('<img src="assets/svg/emotions/calmB.svg" height="500">');
         $("div.mText").html("<br><br><br> ...");
         three();
     });
 }

 function three() {
     $("#continueBTN3").click(function () {
         console.log("clicked");
         $("#pCharacter img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $("#plane1 img:last-child").remove();
         $('#plane2').prepend('<img src="assets/svg/bOnPlane.svg" height="300">');
         $("div.mText").html("So I decided to follow my dreams!<br><br>Come join me and discover <br>  how YOU may travel the world with <br> the power of JetBlue!");
         
         goToMap();
     });

 }


 function goToMap() {
     $("#continueBTN3 img:last-child").remove();
      setTimeout(function () {
         window.location = "index.html";
     }, 3000);
     
 }


 // function four() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/determinedP.svg" height="500">');
 //         $("div.mText").html("Yay! Let's DO THIS! <br> $$$$$$$$");
 //         graphScene();
 //     });
 //
 // }
 //
 //
 // function graphScene() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmP.svg" height="400">');
 //         $("div.mText").html("Firstly, it is very important to be  <br> able to read data accurately! <br> I will show you a graph  <br> and discuss key points <br> so that you know how to  <br> read data properly!");
 //         five();
 //     });
 // }
 //
 // function five() {
 //     $("#continueBTN2").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
 //         $("div.mText").html("Accurately reading data allows you <br>to make smarter decisions and more  <br> accurate predictions");
 //         six();
 //     });
 // }
 //
 // function six() {
 //     $("#continueBTN2").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
 //         $("div.mText").html("Accurately reading data allows you <br>to make smarter decisions and more  <br> accurate predictions <br> and more accuracy <br> <strong>means more money earned!</strong>");
 //         seven();
 //     });
 // }
 //
 // function seven() {
 //     $("#continueBTN2").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
 //         $("div.mText").html("Being a college student looking into <br> learning about investments isn't <br> always easy, but it is <br> always worth it! ");
 //         eight();
 //     });
 // }
 //
 // function eight() {
 //     $("#continueBTN2").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('.graph1').prepend('<img src="media/graph1.png" width="800">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("This type of graph is called a <strong> Heat Map </strong>. <br> It uses SIZE to emphasize significant aspects of the data");
 //         nine();
 //     });
 // }
 //
 // function nine() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("This type of graph is called a <strong> Heat Map </strong>. <br> It uses SIZE to emphasize significant aspects of the data <br> Always make sure that the graph has a title so that you know <br> WHAT data you're reading...<br> so that the MoneyTaur doesn't trick you!");
 //         ten();
 //     });
 // }
 //
 // function ten() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("This type of graph is called a <strong> Heat Map </strong>. <br> It uses SIZE to emphasize significant aspects of the data <br> Always make sure that the graph has a title so that you know <br> WHAT data you're reading...<br> so that the MoneyTaur doesn't trick you! <br> This is census data from the West South Central of the US <br> It shows how many people know very little about <br> preparing for emergencies");
 //         eleven();
 //     });
 // }
 //
 // function eleven() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("Knowing the basics of preparing for <br> future emergencies is so <br> important! This is where good <br> investment skills come in -- <br> investing into future situations <br> will help you a lot in the long run.");
 //         twelve();
 //     });
 // }
 //
 // function twelve() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmPF.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("Now let's learn about...<br> <strong> FINANCIAL LITERACY!</strong>");
 //         thirteen();
 //     });
 // }
 //
 // function thirteen() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("Being on a budget means you made a plan for your expenses <br> to be less than or equal to your income.");
 //         fourteen();
 //     });
 // }
 //
 // function fourteen() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("Being on a budget means you made a plan for your expenses <br> to be less than or equal to your income. <br> You can get a free credit report once a year. <br> Hey college students, did you hear <strong> FREE </strong> ?? USE IT");
 //         fifteen();
 //     });
 // }
 //
 // function fifteen() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/happyP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("What is considered an excellent credit score? <br> Well, <strong> 700 to 850 </strong>");
 //         sixteen();
 //     });
 // }
 //
 // function sixteen() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("In order to improve your credit score, make sure  <br> to not just pay in cash, and get credit cards <br> that you pay back.");
 //         seventeen();
 //     });
 // }
 //
 // function seventeen() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("What about <strong> investing? </strong>");
 //         eighteen();
 //     });
 // }
 //
 // function eighteen() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/calmP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("What about <strong> investing? </strong> <br> Learn about Blue-Chip stocks <br> (public companies with strong reputations), <br> They demonstrate steady success, but <br> this is not always guaranteed. <br> Make sure to learn more <br>about these stocks and hedging!");
 //         prebossLevel();
 //     });
 // }
 //
 // function prebossLevel() {
 //     $("#continueBTN3").click(function () {
 //         console.log("clicked");
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/thinkingP.svg" height="400">');
 //         $('#level0').prepend('<img id="dialogPopUpPF2" src="media/SVG/talkDialog.svg" width="600"/>');
 //         $("div.mText2").html("You've learned about reading data...<br> You've learned about financial literacy...<br> <strong> LETS GO BEAT THAT MONEYTAUR </strong>");
 //         gobossLevel();
 //     });
 // }
 //
 // function gobossLevel() {
 //     var $input = $('<a href="level1.html"> <input type="button"  id="continueBTN3" class="nextBoss" value="Go To Boss Level" /> </a>');
 //     $input.appendTo($("#level0"));
 //
 // }

 //     setTimeout(function () {
 //         $("moneytaurText").prepend(document.createTextNode("Hello"));
 //     }, 2000);
 //     setTimeout(function () {
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/surprisedP.svg" height="400">');
 //     }, 2400);
 //     setTimeout(function () {
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/angryP.svg" height="400">');
 //     }, 3600);
 //
 //     setTimeout(function () {
 //         $("#continueBTN").click(function () {
 //             console.log("clicked");
 //             $("div.mText").html("Aah, my my... it's just an <br> ignorant little maiden <br>... <br> what do you want?");
 //             console.log($("p").text());
 //
 //             scene2();
 //         });
 //     }, 3600);
 // }
 //
 // function scene2() {
 //     clicks = 0;
 //     $('#level1').prepend('<img id="dialogPopUpP" src="media/SVG/talkDialog.svg"  width="300"/>');
 //     $("div.pText").html("<p>I am here to take back <br> all the money <br> you've stolen from <br> investors!</p>");
 //
 //
 //     setTimeout(function () {
 //
 //         $("#continueBTN").click(function () {
 //             if (clicks == 0) {
 //                 console.log("clicked");
 //                 $("div.mText").html("They should have known better!");
 //                 console.log($("p").text());
 //                 clicks++;
 //             }
 //         });
 //     }, 300);
 //     $("#continueBTN").click(function () {
 //         if (clicks == 1) {
 //             console.log("clicked");
 //             $("div.pText").html("They were just college students! <br> I'll prove you that <br> you aren't the only <br> smart investor here!");
 //             scene3();
 //         }
 //     });
 // }
 //
 // function scene3() {
 //     $("#continueBTN").click(function () {
 //         console.log("clicked");
 //         $("div.mText").html("Hah! Is that a challenge? <br> Alright, you asked for it...<br> Here's my challenge!");
 //         console.log($("p").text());
 //         clicks++;
 //     });
 //     setTimeout(function () {
 //         $("#pCharacter img:last-child").remove();
 //         $('#pCharacter').prepend('<img src="media/SVG/determinedP.svg" height="400">');
 //     }, 1400);
 //     scene4();
 // }
 //
 //function scene4(){
 //    console.log("scene 4");
 //    
 //    
 //}
