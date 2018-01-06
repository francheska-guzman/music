import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['../app.component.css', './list-of-songs.component.css']
})
export class ListOfSongsComponent {
  pageTitle: string = 'Folk and Salsa Music';
  // imageWidth: number = 100;
  // imageMargin: number = 2;
  // showImage: boolean = false;
  // In typescript "any" is a data type.
  songs: any[] = [
    {
        "songId": 1,
        "songName": "La Fiesta de Pilito",
        "time": "3:55",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "Nuestra Música",
        "genre": "Salsa",
        "starRating": 4.5,
        "imageUrl": "https://i.scdn.co/image/404f1635238ba205e075539a174482ef432e4269",
        "songUrl": ""
    },
    {
        "songId": 2,
        "songName": "Olé Maja",
        "time": "4:46",
        "artist": "Quique Domenech",
        "album": "Lo Mejor de Quique Domenech",
        "genre": "Folk",
        "starRating": 4.9,
        "imageUrl": "https://i.scdn.co/image/3c3fa25c32e690e9f23f53c2d1ccef500398af71",
        "songUrl": ""
    },
    {
        "songId": 3,
        "songName": "¡Fuego en el 23!",
        "time": "5:55",
        "artist": "La Sonora Ponceña",
        "album": "Fuego en el 23",
        "genre": "Salsa",
        "starRating": 4.3,
        "imageUrl": "https://i.scdn.co/image/bb04ba14771bcb7b9b3b8d9272dbcf3edd451c63",
        "songUrl": ""
    },
    {
        "songId": 4,
        "songName": "Y no hago más na'",
        "time": "4:58",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "La Universidad de la Salsa",
        "genre": "Salsa",
        "starRating": 4.8,
        "imageUrl": "https://i.scdn.co/image/bd133f28a29442e2b420ca2fae2dca49abf24349",
        "songUrl": ""
    },
    {
        "songId": 5,
        "songName": "Brujería",
        "time": "3:24",
        "artist": "El Gran Combo de Puerto Rico",
        "album": "Aqui No Se Sienta Nadie",
        "genre": "Salsa",
        "starRating": 4.6,
        "imageUrl": "https://i.scdn.co/image/58433db130f8450f1e5ecd60a2b91aa062ff25bd",
        "songUrl": ""
    },
    {
        "songId": 6,
        "songName": "Así es mi Tierra",
        "time": "4:23",
        "artist": "Los Hispanos",
        "album": "15 Éxitos Navideños",
        "genre": "Folk",
        "starRating": 4.7,
        "imageUrl": "https://i.scdn.co/image/583eb7f7dacf70ca033f076228fe1021bebeee8a",
        "songUrl": ""
    },
    {
        "songId": 7,
        "songName": "Valió la pena",
        "time": "4:52",
        "artist": "Mark Anthony",
        "album": "Valió la pena",
        "genre": "Salsa",
        "starRating": 4.4,
        "imageUrl": "https://i.scdn.co/image/3529b62882eb34f27558d89c3df11c33f22b8a46",
        "songUrl": ""
    },
    {
        "songId": 8,
        "songName": "Perdóname",
        "time": "7:55",
        "artist": "Gilberto Santa Rosa",
        "album": "Punto de Vista",
        "genre": "Salsa",
        "starRating": 4.8,
        "imageUrl": "https://i.scdn.co/image/8de15a837f5006df898284000ce8574e2140b65a",
        "songUrl": ""
    },
    {
        "songId": 9,
        "songName": "Defensa al Jíbaro",
        "time": "3:58",
        "artist": "Tony Croatto y Quique Domenech",
        "album": "En Armonía",
        "genre": "Folk",
        "starRating": 4.2,
        "imageUrl": "https://i.scdn.co/image/7d34b5e4ec49e970f9f805f8036791878e796a46",
        "songUrl": ""
    },
    {
        "songId": 10,
        "songName": "Yambeque",
        "time": "6:22",
        "artist": "La Sonora Ponceña",
        "album": "Determination",
        "genre": "Salsa",
        "starRating": 4.5,
        "imageUrl": "https://i.scdn.co/image/74756fe2fb2fe68d1e7be3c8096391466b9232f5",
        "songUrl": ""
    },
  ];

//   toggleImage(): void {
//       this.showImage = !this.showImage;
//   }

}

// console.log("ListOfSongsComponent is working.");
