interface Album{
    artist:string;
    title:string;
    tracks:number;
}
function make_album(artist:string,title:string,tracks:number):Album{
    let album:Album={
        artist:artist,
        title:title,
        tracks:tracks
    }
    return album;
}
const album1=make_album("Artist1 "," Title1 ", 12);
const album2=make_album("Artist2 "," Title2 ", 16);
const album3=make_album("Artist3 "," Title3 ", 20);

console.log(album1);
console.log(album2);
console.log(album3);