import { playlistArr } from '/playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = playlistArr.map(function (track) {
    return `
<section class="card">
    <div class="card-start">
        <img src="/images/${track.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${track.title}</h4>
            <p class="card-artist">${track.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
`
}).join('')

document.getElementById('container').innerHTML = playlistHtml


/*
playlist:
export const playlistArr = [
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        albumArt: 'bohemian-rhapsody.png'
    },
    {
        title: 'As It Was',
        artist: 'Harry Styles',
        albumArt: 'as-it-was.png'
    },
    {
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        albumArt: 'stairway-to-heaven.png'
    },
    {
        title: 'Therefore I Am',
        artist: 'Billie Eilish',
        albumArt: 'therefore-i-am.png'
    }
]

*/