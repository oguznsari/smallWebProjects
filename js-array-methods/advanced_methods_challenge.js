//Map, Filter, Reduce, and FlatMap
const movies = [
  {
    title: 'Avatar',
    year: '2009',
    rating: 'PG-13',
  },
  {
    title: 'I Am Legend',
    year: '2007',
    rating: 'PG-13',
  },
  {
    title: '300',
    year: '2006',
    rating: 'R',
  },
  {
    title: 'The Avengers',
    year: '2012',
    rating: 'PG-13',
  },
  {
    title: 'The Wolf of Wall Street',
    year: '2013',
    rating: 'R',
  },
];

//Challenge Question #1
//Create a new array that just contains the movie titles.
const titles = movies.map((movie) => movie.title);
console.log(titles);

//Challenge Question #2
//Create a new array that contains only those movies that are PG-13.
const filtered13 = movies.filter((movie) => movie.rating === 'PG-13');
console.log(filtered13);

//Challenge Question #3
//Determine how many of the movies are rating R.
const rCount = movies.reduce((acc, movie) => {
  if (movie.rating === 'R') {
    acc++;
  }
  return acc;
}, 0);
console.log(rCount);