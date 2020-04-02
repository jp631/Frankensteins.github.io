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



menu_bar.addEventListener('click', ()=>{
  document.querySelector("#first_bar").classList.toggle("hid_div");
  document.querySelector("#second_bar").classList.toggle("rotate_bar2");
  document.querySelector("#third_bar").classList.toggle("rotate_bar3");
  menu_text.classList.toggle("no_move");
  menu_ul.classList.toggle("appear");
});
