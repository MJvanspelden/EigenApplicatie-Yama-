//variabelen
let mySong = document.getElementById("mySong");
let playIcon = document.getElementById("playImg");
let wave = document.getElementsByClassName('wave')[0];

// zorgt er voor dat de play knop muziek laat afspelen en het veranderd naar pause knop om het ook weer te kunnen laten pauzeren
playIcon.onclick = function() {
   if (mySong.paused){
      mySong.play();
      playIcon.src = "img/pause-circle-fill.svg";
      wave.classList.add('active2')
   } else {
      mySong.pause();
      playIcon.src = "img/play-circle-fill.svg";
      wave.classList.remove('active2')
   }
}


// const music = new Audio("BLACKED OUT.mp3")
//past left playlist aan met de volgende namen en img's
const songs = [
   {
      id: "1",
      songName: ' BLACKED OUT <div class="subtitle">Villain777</div>',
      poster: "img/BLACKEDOUT.jpeg"
   },
   {
      id: "2",
      songName: ' Take A Step Back <div class="subtitle">Ski Mask The Slump God</div> ',
      poster: "img/TakeAStepBack.jpg"
   },
   {
      id: "3",
      songName: ' Beat it <div class="subtitle">Micheal Jackson</div> ',
      poster: "img/MichealJackson.jpg"
   },
   {
      id: "4",
      songName: ' Shakira <div class="subtitle">1nonly</div> ',
      poster: "img/Shakira.jfif"
   },
   {
      id: "5",
      songName: ' 2055 <div class="subtitle">Sleepy Hallow</div> ',
      poster: "img/2055.jfif"
   },
   {
      id: "6",
      songName: ' Steady (Birkin Bop) <div class="subtitle">Kayem2x</div> ',
      poster: "img/Steady.jpg"
   }
];

//deze array gebruikt de code hier boven |
Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
   element.getElementsByTagName('img')[0].src = songs[i].poster;
   element.getElementsByTagName('h1')[0].innerHTML = songs[i].songName;
})
//veranderd in de list de play button naar een pause button
const makeAllPlays = () => {
   Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
      element.classList.add('bi-play-circle-fill');
      element.classList.remove('bi-pause-circle-fill');
   })
}
//hier  probeerde ik dat als je op een van de nummers klikt dat de naam en img van masterPlay er naar veranderd
//maar dat lukte me niet
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
   element.addEventListener('click', (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');
      mySong.src = `audio/${index}.mp3`;
      poster_master_play.src = `img/${index}.jpg`;
      mySong.play();
   })
})