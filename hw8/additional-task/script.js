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

const newGalleryItems = [{
  preview: "img/new-gal/preview-1.jpg",
  fullview: "img/new-gal/fullview-1.jpg",
  alt: "alt text 1"
},
{
  preview: "img/new-gal/preview-2.jpg",
  fullview: "img/new-gal/fullview-2.jpg",
  alt: "alt text 2"
},
{
  preview: "img/new-gal/preview-3.jpg",
  fullview: "img/new-gal/fullview-3.jpg",
  alt: "alt text 3"
}
]

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
    this.preview = document.createElement('ul');
    this.fullview = document.createElement('div');
  }
  makeGallery() {
    const preview = this.preview;
    const fullview = this.fullview;
    this.parentNode.prepend(preview);
    this.parentNode.prepend(fullview);
    preview.classList.add('preview');
    const listItems = this.items.reduce(
      (acc, el) =>
        acc +
        `<li>
    <img
      src='${el.preview}'
      data-fullview="${el.fullview}"
      alt="${el.alt}"
    />
  </li>`,
      ""
    );
    preview.innerHTML = listItems;
    fullview.innerHTML = `<img src="${
      this.items[this.defaultActiveItem].fullview
    }" alt="${this.items[this.defaultActiveItem].alt}"/>`;
    preview.addEventListener("click", changeImg);
    function changeImg(event) {
      fullview.innerHTML = `<img src="${event.target.dataset.fullview}" alt="${
        event.target.alt
      }"/>`;
    }
  }
}

const gallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector(".image-gallery"),
  defaultActiveItem: 1
});

gallery.makeGallery();


const newImageGallery = document.createElement('div');
const imageGallery = document.querySelector(".image-gallery");
imageGallery.after(newImageGallery);
newImageGallery.classList.add('new-image-gallery');

const newGallery = new Gallery({items: newGalleryItems,
  parentNode: newImageGallery,
  defaultActiveItem: 2});

  newGallery.makeGallery();
