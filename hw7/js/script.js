'use strict';

const createPostCard = function(post){
const movie = document.createElement('div');
movie.classList.add('movie');
const body = document.body;
console.log(body);
body.prepend(movie);
const movieImage = document.createElement('img');
movieImage.classList.add('movie__image');
movieImage.setAttribute('src', post.img);
movieImage.setAttribute('alt', 'movie image');
movie.prepend(movieImage);
const movieBody = document.createElement('div');
movieBody.classList.add('movie__body');
movie.after(movieBody);
const movieTitle = document.createElement('h2');
movieTitle.classList.add('movie__title');
movieTitle.textContent = post.title;
movieBody.prepend(movieTitle);
const movieDescription = document.createElement('p');
movieDescription.classList.add('movie__description');
movieDescription.textContent = post.text;
movieTitle.after(movieDescription);
const movieLink = document.createElement('a');
movieLink.classList.add('movie__link');
movieLink.setAttribute('href', post.link);
movieLink.textContent = 'Movie link';
movieDescription.after(movieLink);
}


const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];


const createCards = function(posts){
    let i = posts.length - 1;
    // createPostCard(posts[i]);
    while(i >= 0){
    createPostCard(posts[i]);
    i--
    }
}
 createCards(posts);