const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const filter = { size: [], color: [], release_date: [] };

function filtered(evt) {
  evt.preventDefault();
  const chosen = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  );
  chosen.forEach(el => {
    filter[el.name].push(el.value);
  });
  chosen.map(el => el.checked === false);
  // console.log(chosen);
  // console.log(filter);
  // const keys = Object.keys(filter);
  // const o = keys.forEach(el => filter[el]);
  // console.log(o);

  // if (laptops.map(el => Object.values(el)).includes(filter.size[0])){
  //   console.log('works');
  // }
  // laptops.map(el => console.log(Object.values(el)));
  // if (laptops.map(el => Object.values(el)).includes(13)){
  //   console.log('hey');
  // }
  const gu = [];
  // const res = filter.size.forEach(size =>{
  //   const lapSize = laptops.forEach(laptop =>{
  //   const sizeToNumb = parseInt(size);
  //   if(laptop.size === sizeToNumb){
  //     gu.push(laptop);
  //     console.log(gu);
  //   }
  //   return gu
  // })
  // console.log(lapSize);
  // })
  // const res = laptops.filter(el => {
  //   let res;
  //   if (filter.size) {
  //     const sizeFilt = filter.size.forEach(size => {
  //       const sizeToNumb = parseInt(size);
  //       // return sizeToNumb;
  //       if (el.size === sizeToNumb) {
  //         console.log(el);
  //         res = el
  //         return res;
  //       }
  //     });
  //     console.log(res);
  //     // return sizeFilt
  //   } if(filter.color){

  //   }
  //   // console.log(sizeFilt);
  // });
  // console.log(gu);

  // const res = laptops.filter(laptop => {
  //   const sizes = filter.size.forEach(size => {
  //     const sizeToNumb = parseInt(size);
  //     return sizeToNumb;
  //   })
  //   return laptop.size === sizes
  //   // console.log(sizes);
  // })

  // console.log(res);

  const res = Object.keys(filter).reduce(
    (a, e) => a.filter(elem => console.log(a)),
    laptops
  );

  console.log(res);
}

const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector(".form");
console.log(form);
form.addEventListener("submit", filtered);

const elem = document.getElementById("laptops-template").innerHTML.trim();

const template = Handlebars.compile(elem);
// console.log(template);

const result = template(laptops);
// console.log(result);
const container = document.querySelector(".result");
container.innerHTML = result;
