// create music player (Front-End)...
// function work for player (Back-End)... 

// selection of body...

const body = document.querySelector("body");

// create music play-box...

const box = document.createElement("div");
box.setAttribute("class", "main-box")
body.append(box);

// create head-line...

const nav = document.createElement("div");
nav.setAttribute("class", "nav-head");
box.appendChild(nav);

const text2 = document.createElement("a");
text2.innerHTML=`<i class="fa-solid fa-chevron-down"></i>`
text2.setAttribute("class", "play-text-2");
nav.appendChild(text2);

const text = document.createElement("a");
text.textContent=`Now Playing`
text.setAttribute("class", "Play-text");
nav.appendChild(text);

const text1 = document.createElement("a");
text1.innerHTML=`<i class="fa-solid fa-ellipsis"></i>`
text1.setAttribute("class", "play-text-1");
nav.appendChild(text1);

// create music-details...

const music = document.createElement("div");
music.setAttribute("class", "music-details");
box.appendChild(music);

const img = document.createElement("img");
img.setAttribute("src", "https://musicheals.ca/wp-content/uploads/2023/08/apply-for-music-therapy-funding-mh-450x450.jpg");
img.setAttribute("class", "img-1");
music.appendChild(img);

const text3 = document.createElement("a");
text3.setAttribute("class", "music-title");
text3.textContent=`Hall of Fame(ft. will.i.am)`
music.appendChild(text3);

const text4 = document.createElement("a");
text4.setAttribute("class", "music-singer");
text4.textContent=`The Script`
music.appendChild(text4);

// create progress-bar...

const bar = document.createElement("div");
bar.setAttribute("class", "progress-area");
box.appendChild(bar);

const front = document.createElement("a");
front.textContent=`0:00 `
front.setAttribute("class", "front-num");
bar.appendChild(front);

const progressouter = document.createElement("div");
progressouter.setAttribute("class", "progress-line");
bar.appendChild(progressouter);

const progressinner = document.createElement("div");
progressinner.setAttribute("class", "progress-bar");
bar.appendChild(progressinner);

// create footer...

const footer = document.createElement("div");
footer.setAttribute("class", "footer")
box.appendChild(footer);


const backward = document.createElement("div");
backward.setAttribute("class", "player-btn")
backward.innerHTML=`<i class="fa-solid fa-backward-step"></i>`
footer.appendChild(backward);

const play = document.createElement("div");
play.setAttribute("class", "player-btn")
play.innerHTML=`<i class="fa-solid fa-play"></i>`
footer.appendChild(play);

const forward = document.createElement("div");
forward.setAttribute("class", "player-btn")
forward.innerHTML=`<i class="fa-solid fa-forward-step"></i>`
footer.appendChild(forward);
