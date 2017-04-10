OPENCHARITY WEB DEVELOPMENT INSTRUCTION AND METHEDOLOGY

file Included:
index.php
images folder
css folder
javascript folder


I'd like to first mention that the challenge i experienced while putting this together is the creation of responsive columns. previously i often used bootstrap and it came with pre-built grid layout. but overall this has been a nice experience.

Anyway, my implementation of this test is what I call the "lazy way".  In other words, I tried to make my life as easy as possible while still maintaining the guidelines. i tried to avoid messy codes which can be seen when the codes have been inspected.

Creating the INDEX Page

While creating the index i tried to ensure that the code were simple and possible, while being easy to understand and reuse. However i feel i should have done a better job with the navigation menu i which i personally feel is okay but my concern is the responsiv menu. i feel i should have done something classy.

And for the carousel i created one from scratch the challenge and it built solely on css, html and javasrcipt but the outlook wasnt what i would have wanted so i opted for the owl carousel. I realized that having two seperate sliders on one page has it challenges to devised a way to ensure that both exist on the page with it different controls, all thanks to the use of ID's 

CSS

Firstly, i need to mention that while i  initially started this test i wrote my css in sass, scss in particular
 i had this code below and for some reason i didnt work so i opted for the standard css coding 


$font-stack:    'Lato', sans-serif;
$primary-color: #61c0bd;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

The methodology used for this test is obviously Object Oriented CSS which is the widely used methodolgy. This methodology makes a class distinctions between content and its containers, and the style rule are written exclusively using class selectors.

which personally is okay for me as you write css block code for each class and id as you go but the only downside of this methodology is the fact that at the end you write a ton of css code. however one goal of the OOCSS methodology is to reduce duplication of the same properties throughout your various style rules. I feel like one can be real lazy with preprocessors, but with an approach such as this, it forces you to really think about the project as a whole, before you start, and attach it in a very methodical order.

It is worth noting that this project has a clear code base as everything section is written after a block comment to specify each section.