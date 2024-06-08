// Question No. 40
// making function

function make_album(artist: string, title: string, tracks?: number) {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

// calling function and storing in variables
let album1 = make_album("Vamps", "WakeUp");
let album2 = make_album("Ellie Goulding", "Delirium", 12);
let album3 = make_album("Atif Aslam", "Album 2");
// Print functions with the help of variables
console.log(album1);
console.log(album2);
console.log(album3);
