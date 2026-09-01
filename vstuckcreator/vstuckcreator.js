var count = 0;
const texts = [];

function story() {
  const maintext = document.getElementById("maintext").children;
  const aa = maintext.item(0);
  const bb = aa.cloneNode(true);
  bb.setAttribute("id","s");
  bb.children.item(1).setAttribute("id","story" + count);
  document.getElementById("maintext").appendChild(bb);
  texts.push("s");
  count += 1;
};

function dialog() {
  const maintext = document.getElementById("maintext").children;
  const aa = maintext.item(1);
  const bb = aa.cloneNode(true);
  bb.setAttribute("id","d");
  bb.children.item(1).setAttribute("id",count + "dialog");
  bb.children.item(2).setAttribute("id","dialog" + count);
  document.getElementById("maintext").appendChild(bb);
  texts.push("d");
  count += 1;
};

function pesterchum() {
  const maintext = document.getElementById("maintext").children;
  const aa = maintext.item(2);
  const bb = aa.cloneNode(true);
  bb.setAttribute("id","p");
  bb.children.item(1).setAttribute("id",count + "pesterchum");
  bb.children.item(2).setAttribute("id","pesterchum" + count);
  document.getElementById("maintext").appendChild(bb);
  texts.push("p");
  count += 1;
};

function submit() {
  var final = document.getElementById("final");
  var gradient = document.getElementById("gradient");
  var border = document.getElementById("border");
  var scolor = document.getElementById("scolor");
  var width = document.getElementById("width");
  var title = document.getElementById("title");
  var sound = document.getElementById("sound");
  var sname = document.getElementById("sname");
  var image = document.getElementById("image");
  var next = document.getElementById("next");
  var nname = document.getElementById("nname");
  var goback = document.getElementById("goback");
  var preview = document.getElementById("preview");
  var x = "<!DOCTYPE html>\n<html lang='en'>\n    <head>\n        <link rel='shortcut icon' type='image/x-icon' href='../Images/favicon.ico' />\n        <meta charset='UTF-8'>\n        <meta http-equiv='X-UA-Compatible' content='IE=edge'>\n        <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n        <title>Vstuck</title>\n        <link rel='stylesheet' type='text/css' href='VSASTUCKMAIN.CSS'>\n        <style>\n        ";
  if (gradient.checked == true) {
    x = x + ".main{\n            border: 5px solid transparent;\n            background-color: #282828;\n            width: 1100px;\n            margin: auto;\n            background: linear-gradient(#282828, #282828) padding-box,linear-gradient(to right, #" + border.value + ", #" + scolor.value + ") border-box;\n        }\n        "
  } else {
    x = x + ".main{\n            border: 5px outset #" + border.value + ";\n            background-color: #282828;\n            width: 1100px;\n            margin: auto;\n        }\n        "
  };
  x = x + ".upperarea{\n            margin: auto;\n            width: " + width.value + "px;\n        }\n\n        .grayarea{\n            width: " + width.value + "px;\n            margin: auto;\n            background-color: #161616;\n        }\n\n        .photo{\n            width: " + width.value + "px;\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n        }\n\n        .textbox{\n            width: " + (width.value - 100) + "px;\n            margin: auto;\n        }\n\n        </style>\n    </head>\n    <body>\n        <div class='main'>\n            <h1>" + title.value + "</h1>\n            <div class='upperarea'>\n";
  if (sound.checked == true) {
    x = x + "                <button id='audio-button'>\n                    <audio id='audio-file' src='../Audio/" + sname.value + "'></audio>\n                    Play Audio\n                </button>\n";
  };
  x = x + "                <img class='photo' src='../Images/" + image.value + "' alt='Image could not be found' >\n            </div>\n            <div class='grayarea'>\n                <br>\n                <div class='textbox'>\n";
  for (let i = 0; i < texts.length; i++) {
    if (texts[i] == "s") {
      var storyy = document.getElementById("story" + i);
      x = x + "                    <p class='storytext'>" + storyy.value + "</p>\n";
    } else if (texts[i] == "d") {
      var dialogg = document.getElementById(i + "dialog");
      var dialoggg = document.getElementById("dialog" + i);
      x = x + "                    <p class='speak " + dialogg.value + "'>" + dialoggg.value + "</p>\n";
    } else if (texts[i] == "p") {
      var pesterr = document.getElementById(i + "pesterchum");
      var pesterrr = document.getElementById("pesterchum" + i);
      if (pesterr.value == "info") {
        x = x + "                    <p class='chatpester'>" + pesterrr.value + "</p>\n"
      } else {
        x = x + "                    <p class='chat " + pesterr.value + "'>" + pesterrr.value + "</p>\n"
      };
    };
  };
  x = x + "                    <a href='" + next.value + "' class='next'>" + nname.value + "</a>\n                </div>\n                <br>\n            </div>\n            <br><a href='" + goback.value + "' class='goback'>Go Back</a>\n        </div>\n        <script>\n            const button = document.querySelector('#audio-button');\n            const audio = document.querySelector('#audio-file');\n            button.addEventListener('click', function() {audio.currentTime = 0;audio.play();});\n        </script>\n    </body>\n</html>"
  preview.innerHTML = x;
  x = "<xmp>" + x + "</xmp>"
  final.innerHTML = x;
};