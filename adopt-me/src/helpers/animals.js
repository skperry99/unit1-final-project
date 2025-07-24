import gp from "../assets/images/guinea-pig.jpg";
import gp2 from "../assets/images/guinea-pig-2.jpg";
import goat from "../assets/images/goat.jpg";
import snake from "../assets/images/snake.png";
import cat1 from "../assets/images/cat1.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import dog from "../assets/images/dog.jpg";
import dog2 from "../assets/images/dog2.jpg";
import dog3 from "../assets/images/dog3.png";
import dog4 from "../assets/images/dog4.jpg";
import dog5 from "../assets/images/dog5.jpg";

export const animals = [
  {
    name: "Ralphie",
    image: gp2,
    type: "other",
    blurb: `The "Fire-Breathing Demon": Ralphie is a terror in a somewhat small package. He may be a "whole jerk," but he's our jerk, and we believe in him.`,
    id: 1,
  },

  {
    name: "Eddie the Terrible",
    image: gp,
    type: "other",
    blurb: `He's cute, fluffy, and a "little bit tubby," but don't be fooled. Eddie is socially awkward and has specific sleeping demands that involve absolutely no crates.`,
    id: 2,
  },

  {
    name: "Billy",
    image: goat,
    type: "other",
    blurb: `This little escape artist is tired of boring fences. Offer a forever home with exciting challenges and a well-stocked snack bar, and you'll have a friend for life!`,
    id: 3,
  },

  {
    name: "Fluffy",
    image: snake,
    type: "other",
    blurb: `Forget the stereotypes; this slithery friend just wants to wrap you in a warm embrace (literally!). Plus, think of the money you'll save on dog walkers!
`,
    id: 4,
  },

  {
    name: "Astro",
    image: dog3,
    type: "dog",
    blurb: `This is Astro, a professional food critic and part-time cuddler. He has a discerning palate when it comes to kibble, but will settle for anything remotely edible. Also, he dreams of squirrels and has mastered the art of the puppy-dog eyes.`,
    id: 5,
  },

  {
    name: "Stitch",
    image: dog4,
    type: "dog",
    blurb: `Meet Stitch, a furry vacuum cleaner with a PhD in counter-surfing. He's a master of disguise (when it comes to hiding his treats) and has a talent for turning socks into chew toys. Proceed with caution (and extra treats).`,
    id: 6,
  },

  {
    name: "Pluto",
    image: dog,
    type: "dog",
    blurb: `Warning: Pluto may spontaneously combust into zoomies at any given moment. He's a professional napper, a connoisseur of belly rubs, and believes all shoes are rightfully his. Proceed with a sense of humor.`,
    id: 7,
  },

  {
    name: "Brian",
    image: dog2,
    type: "dog",
    blurb: `If there were an Olympic sport for snoring, Brian would be a gold medalist. This pup also enjoys long walks on the beach (followed by a nap in the sun), and is always up for a game of fetch... with himself.`,
    id: 8,
  },
  {
    name: "Dug",
    image: dog5,
    type: "dog",
    blurb: `This is Dug, a professional beggar with a heart of gold (and a stomach of steel). He's a master of the "sad eyes" technique, and can sniff out cheese from a mile away. Proceed with caution, and hide the snacks!`,
    id: 9,
  },
  {
    name: "Garfield",
    image: cat3,
    type: "cat",
    blurb: `I believe in living life to the fullest, which for me means eating, sleeping, and occasionally batting at dangling string.`,
    id: 10,
  },

  {
    name: "Lucifer",
    image: cat4,
    type: "cat",
    blurb: `My hobbies include judging your life choices and napping in sunbeams. I'm also very good at making you feel guilty when I don't get enough treats.`,
    id: 11,
  },

  {
    name: "Oliver",
    image: cat1,
    type: "cat",
    blurb: `I'm a tiny, furry tornado of mischief and naps. Proceed with caution... and treats.`,
    id: 12,
  },
];
