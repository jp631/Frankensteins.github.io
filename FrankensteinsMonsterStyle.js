"use strict";

let container = document.querySelector(".container");
let menu = document.querySelector(".menu");
let main = document.querySelector(".cards_container");
let cards = document.querySelectorAll(".card");
let search = document.getElementById("search");
let add_voter = document.getElementById("add");
let v_first_name = document.getElementById("first_name");
let v_last_name = document.getElementById("last_name_initial");
let v_age = document.getElementById("age");
let v_get_party = document.getElementById("party_name");
let menu_bar = document.querySelector(".menu_bar");
let menu_ul = document.getElementById("menu_ul");
let menu_text = document.getElementById("menu_text");
let elements = [
  {
    earth: "url('https://images.unsplash.com/photo-1444065933550-8dbbf6cd69cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80')",
    water: "url('https://images.unsplash.com/photo-1563566019199-854467dad6ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80')",
    air: "url('https://images.unsplash.com/photo-1558899059-2827c63263f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80')",
    fire: "url('https://images.unsplash.com/photo-1512059013936-9e0023f737b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80)"
  }
]

let voters = [
  {
    first_name: "Waka Bowa",
    Last_Name: "J",
    age: 3225,
    photo: 'https://robohash.org/set_set2/',
    type: "earth"
  },
  {
    first_name: "Boba",
    Last_Name: "R",
    age: 4353,
    photo: 'https://robohash.org/set_set2/',
    type: "water"
  },
  {
    first_name: "Gangyla",
    Last_Name: "S",
    age: 4778,
    photo: 'https://robohash.org/set_set2/',
    type: "air"
  },
  {
    first_name: "Jibrissh",
    Last_Name: "Y",
    age: 84334,
    photo: 'https://robohash.org/set_set2/',
    type: "earth"
  },
  {
    first_name: "Phantom",
    Last_Name: "L",
    age: 3478,
    photo: 'https://robohash.org/set_set2/',
    type: "air"
  },
  {
    first_name: "Ghost",
    Last_Name: "J",
    age: 877,
    photo: 'https://robohash.org/set_set2/',
    type: "fire"
  },
  {
    first_name: "Billarda",
    Last_Name: "R",
    age: 7865,
    photo: 'https://robohash.org/set_set2/',
    type: "water"
  },
  {
    first_name: "Gahm",
    Last_Name: "B",
    age: 555,
    photo: 'https://robohash.org/set_set2/',
    type: "earth"
  },
  {
    first_name: "ZMW",
    Last_Name: "F",
    age: 5675,
    photo: 'https://robohash.org/set_set2/',
    type: "water"
  },
  {
    first_name: "AKEY",
    Last_Name: "L",
    age: 37,
    photo: 'https://robohash.org/set_set2/',
    type: "air"
  },
  {
    first_name: "DEAD ML",
    Last_Name: "D",
    age: 62,
    photo: 'https://robohash.org/set_set2/',
    type: "fire"
  },
  {
    first_name: "FUNNERALA",
    Last_Name: "P",
    age: 456,
    photo: 'https://robohash.org/set_set2/',
    type: "water"
  },
  {
    first_name: "MymyGhost",
    Last_Name: "G",
    age: 3232,
    photo: 'https://robohash.org/set_set2/',
    type: "earth"
  },
  {
    first_name: "Weak Mania",
    Last_Name: "Q",
    age: 2453,
    photo: 'https://robohash.org/set_set2/',
    type: "fire"
  },
  {
    first_name: "Daryl",
    Last_Name: "Z",
    age: 3224,
    photo: 'https://robohash.org/set_set2/',
    type: "air"
  }
]


let filtered_voters = voters.map(value =>{
  return value;
});


let card=(f_name, last_name, age, type, photo, a_id)=>{
  let card = document.createElement("div");
  let h1 = document.createElement("h3");
  let image = document.createElement("img");
  let text_for_name =  document.createTextNode(`${f_name} ${last_name}.`);
  let h12 =  document.createElement("h3");
  let text_for_age = document.createTextNode(`age: ${age} yrs`);
  let close_div = document.createElement("div");
  let x_tag = document.createTextNode("x");
  let image_box = document.createElement("div");
  let h_type = document.createElement("div");
  let the_type = document.createTextNode(`${type}`);
  close_div.appendChild(x_tag);
  card.setAttribute("id", `${a_id}`);
  close_div.className = "close";
  image_box.className ="monters_image_container";
  h1.appendChild(text_for_name);
  card.appendChild(h1);

  image.src=`${photo} ${a_id}?size=200x200`;
  image_box.appendChild(image);
  card.appendChild(image_box);
  h12.appendChild(text_for_age);
  card.appendChild(h12);
  h_type.appendChild(the_type);
  card.appendChild(h_type);
  card.className="card";
  h1.appendChild(close_div);
  image_box.style.backgroundSize = "cover";
  switch(type){
    case "earth":
    image_box.style.backgroundImage =`${elements[0].earth}`;
    break;
    case "water":
    image_box.style.backgroundImage =`${elements[0].water}`;
    break;
    case "air":
    image_box.style.backgroundImage =`${elements[0].air}`;
    break;
    case "fire":
    image_box.style.backgroundImage =`${elements[0].fire}`;
    break;
  }

  close_div.onclick =()=>{
    delete voters[card.id]
    console.log(voters);
    document.getElementById(a_id).remove();
  }

  return card;
}

let deleteAllCards =()=>{
  while(main.childElementCount != 0){
    let i = main.childElementCount;
    //  console.log(main.childElementCount);
    main.removeChild(main.childNodes[i]);
    i--;
  }
};


let allCards = (arrays = voters)=>{
  arrays.map((voter)=>{
    main.appendChild(card(voter.first_name, voter.Last_Name, voter.age, voter.type, voter.photo, arrays.indexOf(voter)));
    cards = document.querySelectorAll(".card");
  });
};

menu_bar.addEventListener('click', ()=>{
  document.querySelector("#first_bar").classList.toggle("rotate_bar1");
  document.querySelector("#first_bar").classList.toggle("move");
  document.querySelector("#second_bar").classList.toggle("rotate_bar2");
  document.querySelector("#third_bar").classList.toggle("rotate_bar3");
  menu_text.classList.toggle("no_move");
  menu_ul.classList.toggle("appear");
});
search.addEventListener("input", ()=>{
  filtered_voters = voters.filter((voter)=>{
    if(search.value.length > 0
      && voter.first_name.toLowerCase().includes(search.value.toLowerCase())){
        return voter;
      }else if(search.value.length <= 0){
        return voters;
      }
    });
    deleteAllCards();
    allCards(filtered_voters);
  });
  window.onload = ()=>{
    if(search.value.length === 0){
      allCards(filtered_voters);
    }
  }
