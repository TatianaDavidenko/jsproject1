'use strict';

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

// const personalMovDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genres: [],
//       privat: false
// };

// const lastOfFilms = prompt('Один из последних просмотренных фильмов?', ' '),
//       ratingOfFilms = +prompt('На сколько оцените его?', '10'),
//       lastOfFilms2 = prompt('Один из последних просмотренных фильмов?', ' '),
//       ratingOfFilms2 = +prompt('На сколько оцените его?', '10');

// personalMovDB.movies[lastOfFilms] = ratingOfFilms;
// personalMovDB.movies[lastOfFilms2] = ratingOfFilms2;

// console.log(personalMovDB);



// 2-е задание

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms <= 10){
      alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms <= 30 ){
      alert('Вы обычный зритель');   
} else if (numberOfFilms > 30){
      alert('Вы киноман');   
} else {
      alert('Произошла ошибка'); 
}

const personalMovDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

for (let i = 0; i < 2; i++) {
      const lastOfFilms = prompt('Один из последних просмотренных фильмов?', '');

      if (lastOfFilms == '' || lastOfFilms == null || lastOfFilms.length > 50){
       i--;
   
      }  else {
            const ratingOfFilms = +prompt('На сколько оцените его?', '10');
            personalMovDB.movies[lastOfFilms] = ratingOfFilms; 
      }
  }

  console.log(personalMovDB);

