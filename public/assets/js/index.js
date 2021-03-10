"use strict";
//image object
const pictures = [
  {
    id: 1,
    title: "Banana",
    description: "Dog with a banana toy",
    width: 350,
    height: 500,
    path: "banana-gallery",
  },
  {
    id: 2,
    title: "bear",
    description: "Dog in a bear costume",
    width: 350,
    height: 500,
    path: "bear-gallery",
  },
  {
    id: 3,
    title: "Bow",
    description: "Dapper dog with a bowtie",
    width: 350,
    height: 500,
    path: "bow-gallery",
  },
  {
    id: 4,
    title: "Cow",
    description: "Dog with his favorite toy cow",
    width: 350,
    height: 500,
    path: "congee-cow",
  },
  {
    id: 5,
    title: "Happy",
    description: "A really happy dog",
    width: 350,
    height: 500,
    path: "happy-gallery",
  },
  {
    id: 6,
    title: "scarf",
    description: "A fashionable dog with a scarf",
    width: 350,
    height: 500,
    path: "scarf-gallery",
  },
  {
    id: 7,
    title: "Shapespeare",
    description: "Dog with a collar thing that looks like Shakespeare",
    width: 350,
    height: 500,
    path: "shakesp-gallery",
  },
  {
    id: 8,
    title: "Shoes",
    description: "Dog wearing shoes",
    width: 350,
    height: 500,
    path: "shoes-gallery",
  },
  {
    id: 9,
    title: "Sleeping",
    description: "Dog taking a bit of a snooze",
    width: 350,
    height: 500,
    path: "sleeping-gallery",
  },
];
// select gallery, assign as const
const gallery = document.querySelector(".gallery");

//create output string for html
let output = "";

//loop through each image and string together the html with object keys
pictures.forEach(function (image) {
  output += `<figure class="gallery-item">
  <img src="./assets/images/${image.path}.jpg" alt="${image.title}" style="max-width: ${image.width}px; max-height: ${image.height}px;" />
  <figcaption>${image.description}</figcaption>
  </figure>`;

  gallery.innerHTML = output;
});

/*
just to reference my old code from gallery assignment 
              <figure class="gallery-item">
                <img src="./Assets/Images/happy-gallery.jpg" alt="Happy dog" />
                <figcaption>Livin my best life</figcaption>
              </figure>
*/
