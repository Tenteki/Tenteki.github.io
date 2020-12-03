



  const array = ["During the first chapter I studied basic HTML setup including the main elements used on every webpage. I also explored posting my websites to a hosting service for the first time.",
   "While helping the fictional Tri and Succeed Sports team I explored changing display settings. This is very important for making a website aesthetically pleasing and grabbing the attention of an audience.",
"This assignment is focused on the placement of elements within the web page. This focus is important for ensuring that different elements do not become unreadable under different conditions.",
"In this page I began exploring changing the display properties of the web page. I explored things like chaning font sizes and background colors. These changes provide additional impact and visual interest to the site.",
"This web page will best be viewed in both your web browser and on your mobile device. The CSS code provides for changing the website's layout depending on how wide the screen is that is viewing the web page. This is very relevant for today's culture because of the widespread use of smart phone technology.",
"This is a calendar designed using tables, columns, and row properties. These properties effectively divide information into cells that are easily read by the user.",
"A web form is any fillable space that a user can submit information to a database. This is an essential feature because a website is designed to bring the customer and the page owner together. Many companies use this feature for everything from product purchasing to establishing login credentials.",
"Companies like Youtube could not exist without multimedia support. The ability to embed sound and video files into a web page adds another dimension to the artistry of your page.",
"Javascript is a very powerful coding language that can be used without having to have the user install any extra software. It runs on any browser and can make your website do so much more than HTML and CSS would allow. This is the basis for making a web page interactive.",
"This is a continuation of the Javascript language. It explores storing elements in arrays and then using them. For example, this mouseover feature is only possible with the use of arrays. Every time you mouse over a link the program pulls the text from an array and displays it."]
  const headerArray = ["Getting Started with HTML5", "Getting Started with CSS", "Designing a Page Layout", "Graphic Design with CSS", "Designing for the Mobile Web", "Working with Tables and Columns", "Designing a Web Form", "Enhancing a Website with MultiMedia", "Getting Started with JavaScript", "Exploring Arrays, Loops, and Conditions"]
  let a = document.getElementsByClassName('webPage');
  for (let i = 0; i < a.length; i++){
  
  a[i].addEventListener('mouseover', function(){
      a[i].style.color = "red";
      document.getElementById("testP").style.opacity = 1;
      document.getElementById("testHeader").style.opacity = 1;
      
      document.getElementById("testP").innerHTML = array[i];
      document.getElementById("testHeader").innerHTML = headerArray[i];
      
        // document.getElementById("testP").style.opacity = x;
        // document.getElementById("testHeader").style.opacity = x;
        setTimeout(() => { document.getElementById("testP").style.opacity = 1; }, 2000);
        setTimeout(() => {  document.getElementById("testHeader").style.opacity = 1; }, 2000);
        
      

      // document.getElementById("testBox");
      
  })
  a[i].addEventListener('mouseout', function() {
      a[i].style.color = "white"
  })
  }

  var basicTimeline = anime.timeline({
    autoplay: false
  });
  
  var pathEls = $(".check");
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
  }
  
  basicTimeline
    .add({
      targets: ".text",
      duration: 1,
      opacity: "0"
    })
    .add({
      targets: ".button",
      duration: 1300,
      height: 10,
      width: 300,
      backgroundColor: "#2B2D2F",
      border: "0",
      borderRadius: 100
    })
    .add({
      targets: ".progress-bar",
      duration: 2000,
      width: 300,
      easing: "linear"
    })
    .add({
      targets: ".button",
      width: 0,
      duration: 1
    })
    .add({
      targets: ".progress-bar",
      width: 80,
      height: 80,
      delay: 500,
      duration: 750,
      borderRadius: 80,
      backgroundColor: "#71DFBE"
    })
    .add({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: 200,
      easing: "easeInOutSine"
    });
  
  $(".button").click(function() {
    basicTimeline.play();
  });
  
  $(".text").click(function() {
    basicTimeline.play();
  });