console.log("welcome to spotify");
//iniotiliaze the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songsitems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {
        songName: "Let Me Love You", filePath: "songs/1.mp3", CoverPath: "covers/1.jpg"
    },
    {
        songName: "Let Me Hate You", filePath: "songs/2.mp3", CoverPath: "covers/2.jpg"
    },
    {
        songName: "Dont Worry Dude", filePath: "songs/3.mp3", CoverPath: "covers/3.jpg"
    },
    {
        songName: "Love The Way You Like", filePath: "songs/4.mp3", CoverPath: "covers/4.jpg"
    },
    {
        songName: "Game Over Buddy", filePath: "songs/5.mp3", CoverPath: "covers/5.jpg"
    },
    {
        songName: "Hate The Destiny", filePath: "songs/6.mp3", CoverPath: "covers/6.jpg"
    },
    {
        songName: "Love Me", filePath: "songs/7.mp3", CoverPath: "covers/7.jpg"
    },
    {
        songName: "All I Need ", filePath: "songs/8.mp3", CoverPath: "covers/8.jpg"
    },
    {
        songName: "Justify You ", filePath: "songs/9.mp3", CoverPath: "covers/9.jpg"
    },
    {
        songName: "Hate The World", filePath: "songs/10.mp3", CoverPath: "covers/10.jpg"
    },
]
songsitems.forEach((element, i) => {
   
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();

//handle playpause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;


    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;


    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {

    // update seekbar
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

  
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPLay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
 
}
Array.from(document.getElementsByClassName('songItemPLay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>
{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>
{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})