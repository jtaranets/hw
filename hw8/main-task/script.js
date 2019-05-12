const galleryItems = [
  {
    preview: "img/preview-1.jpg",
    fullview: "img/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpg",
    fullview: "img/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpg",
    fullview: "img/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpg",
    fullview: "img/fullview-4.jpg",
    alt: "alt text 4"
  }
];

const imageGallery = document.querySelector(".image-gallery");
const fullview = document.querySelector(".fullview");
const preview = document.querySelector(".preview");

fullview.innerHTML = `<img src=${galleryItems[0].fullview}>`;

const inPreview = galleryItems.reduce((acc, item) => acc + `<li>
<img
  src="${item.preview}"
  data-fullview="${item.fullview}"
  alt="${item.alt}"
/>
</li>`, '')

preview.innerHTML = inPreview;

const result = function(event){
    console.log(event.target.dataset.fullview);
    if(event.target.nodeName !== 'IMG') return;
    fullview.innerHTML = `<img src=${event.target.dataset.fullview}>`;
}

preview.addEventListener('click', result);


