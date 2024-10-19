console.log("Welcome to Spotify");

//Initializing the variables
let songIndex = 0;
let audioElement = new Audio('/1s.mp3');
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    {songName: "One Love - Shubh", filePath: "/1s.mp3", coverPath: "/1c.jpg"},
    {songName: "We Rollin - Shubh", filePath: "/2s.mp3", coverPath: "/2c.jpg"},
    {songName: "No Love - Shubh", filePath: "/3s.mp3", coverPath: "/3c.jpg"},
    {songName: "King Shit - Shubh", filePath: "/4s.mp3", coverPath: "/4c.jpg"},
    {songName: "Millionaire - Yo Yo Honey Singh", filePath: "/5s.mp3", coverPath: "/5c.jpg"},
    {songName: "Cheques - Shubh", filePath: "/6s.mp3", coverPath: "/6c.jpg"},
    {songName: "Aaj Ki Raat - Madhubanti Bagchi, Divya Kumar", filePath: "/7s.mp3", coverPath: "/7c.jpg"},
    {songName: "Brown Rang- Yo Yo Honey Singh", filePath: "/8s.mp3", coverPath: "/8c.jpg"},
    {songName: "Desi Kalakaar - Honey Singh", filePath: "/9s.mp3", coverPath: "/9c.jpg"},
    {songName: "Elevated (Slowed Reverb) - Mr Maksud", filePath: "/10s.mp3", coverPath: "/10c.jpg"},
]
songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//Handle Play/pause clicks
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {

    // Update the Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100 );
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/${songIndex+1}s.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})





document.getElementById('next').addEventListener('click', () => {
    if(songIndex>9) {
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/${songIndex+1}s.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0) {
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `/${songIndex+1}s.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})
    