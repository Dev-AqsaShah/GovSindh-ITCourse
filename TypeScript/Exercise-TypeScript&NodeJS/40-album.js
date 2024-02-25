function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album1 = makeAlbum("aqsa", "light");
console.log(album1);
var album2 = makeAlbum("marvi", "dark");
console.log(album2);
var album3 = makeAlbum("alixe", "bright");
console.log(album3);
