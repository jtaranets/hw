"use strict";

class LaptopFilter {
  constructor(laptops) {
    this.laptops = laptops;
    this.form = document.querySelector(".form");
    this.submit = document.querySelector('button[type="submit"]');
    this.elem = document.getElementById("laptops-template");
    this.container = document.querySelector(".result");
    this.filter = null;
    this.chosen = null;
    this.laptopsRes = null;
    this.form.addEventListener("submit",this.filterData);
    this.createPage();
    // console.log(this.laptops);
  }
  showLaptops(input, data, output) {
    const elem = input.innerHTML.trim();
    const template = Handlebars.compile(elem);
    const res = template(data);
    output.innerHTML = res;
    // console.log(this.laptops);
  }
  filterData(e) {
    e.preventDefault();
    console.log(this.laptops);
    this.chosen = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    console.log(this.chosen);
    this.filter = this.chosen.reduce((acc, el) => {
      acc[el.name] ? acc[el.name].push(el.value) : (acc[el.name] = [el.value]);
      return acc;
    }, {});
    // this.form.reset();
    console.log(this.filter);
    this.laptopsRes = Object.keys(this.filter).reduce(
      (acc, el) => {
          console.log(this.laptops);
        acc.filter(elem => this.filter[el].includes("" + elem[el]))
      },
      this.laptops
    );
  }
  createPage() {
    this.showLaptops(this.elem, this.laptops, this.container);
    if(this.laptopsRes){
        this.showLaptops(this.elem, this.laptopsRes, this.container)
    }
  }
}

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

  const laptopPage = new LaptopFilter(laptops);
  console.log(laptopPage);