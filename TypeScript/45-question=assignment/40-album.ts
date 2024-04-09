
function makeAlbum(artist: string, title: string): { artist: string; title: string } {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album1 = makeAlbum("aqsa", "light");
console.log(album1);

let album2 = makeAlbum("marvi", "dark");
console.log(album2);

let album3 = makeAlbum("alixe", "bright");
console.log(album3);
