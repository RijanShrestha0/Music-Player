const body = document.querySelector("body");

const box = document.createElement("div");
box.setAttribute("class", "main-box")
body.append(box);

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

const img = document.createElement("img");
img.setAttribute("src", "https://musicheals.ca/wp-content/uploads/2023/08/apply-for-music-therapy-funding-mh-450x450.jpg");
img.setAttribute("class", "img-1");
box.appendChild(img);

const text3 = document.createElement("a");
text3.setAttribute("class", "music-title");
text3.textContent=`Hall of Fame(ft. will.i.am)`
box.appendChild(text3);

const text4 = document.createElement("a");
text4.setAttribute("class", "music-singer");
text4.textContent=`The Script`
box.appendChild(text4);

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
