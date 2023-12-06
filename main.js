var messages = [
  /* Array of 300 messages*/
  " You are my motivation, my muse, the one person I would never want to lose at any cost. I love you with all my heart because you have made life worth living every day.",

  " Every time I see your face, I cannot help but feel so blessed that you have graced me with your love. You are my dream come true and I will always cherish you forever.",

  " You are the most beautiful creature ever to have lived in this world, your eyes are like the night sky, your lips as sweet as candy, and your voice is more melodic than any song ever written. You are simply perfection itself and I love you.",
  " There is no one else in this world that I would rather spend the rest of my life with than you. You are my everything, my whole entire world. I love you beyond words.",
  " Out of every day, in every way, I get better and better because you are always by my side. I love you.",
  " I have traveled across dozens of countries and have seen the most beautiful places ever but none of these can compare to the beauty of your eyes, the wonder of your smile, and the melody of your voice. You are unparalleled to anything and everything else in this world. I love you beyond any measure",
  ,
  " You have brought so much joy to my life, I don’t know where I would be without you. You illuminate my days and brighten up all the dark spots. I love you.",

  " I will love you until the stars no longer shine in the sky. I will love you as each new day dawns. I will love you until the end of time itself.",

  " Every hour, every minute, every second that passes I love you more and more. I could spend a thousand lifetimes with you and still want more because your love is like a bottomless well. I can never get enough of you my love.",

  " I want you, I need you, I yearn for you, I lust for you, and most importantly I love you. You are the other half of my heart and the better half of my soul. You make me whole.",

  " My dearest, I don’t know where I would be without your love. You bring out the best in me and give me strength when I am feeling low. You are everything that is right in this world. I love you.",
  "You are my shining star, my beautiful angel, and my amazing queen. You are the most wonderful person that I have ever met and the best thing that has ever happened to me. I cherish you always",

  "I don’t feel so close to heaven when we are together. Just being in your presence makes me think I can touch the sky. You are the reason why I want to live life to the fullest",

  "Your voice is like an angel’s song. You are the most beautiful creature that I have ever laid my eyes upon. You are perfect in every way. I love everything about you",

  "I try to list your best qualities and still cannot do justice to your magnificence. You are the love of my life and my reason for everything that I do. I cherish you forever and always",

  "I will always love you. Wherever you are, whatever happens, I will always love you. I promise you this",

  "Let us love each day as if there was no tomorrow because today is the day I have found you. You are the one that I want to be with from here on out",

  "When you smiled at me for the first time, I felt like I was flying higher than any bird. When you kissed me for the first time, I felt like I was drowning in a sea of pure bliss. When you embraced me for the first time, I felt truly blessed to have your love",

  "I want to hold you forever. I want to feel your touch deep within my soul. I want to be with you always. I want to smell your hair, feel your skin, and let your scent consume me. For without you, I am nothing",

  "You are my whole world. Those three words are not enough to describe my love for you. There just aren’t enough words to describe how wonderful you make me feel",

  "I feel your love in each and every touch. Every time I see you, I feel warm inside, like the sun shining down upon me. I love you with all of my heart and soul",

  "You are my soul mate, my one and only. I want to be with you for all of eternity. I will love you until the end of time",

  "Every time I think about you my heart skips more than a few beats. Your eyes, your smile, your hair, everything is beautiful to me. I want to hold you close each and every night when we go to sleep",

  "You are my heart, you are my soul, you are everything to me. I love you",

  "I want to stay with you forever and always. I want to hold your hand in the street. I want to sleep with you every night. I want to feel your lips on mine. You are the one for me. I love you",

  "Let’s run away together and leave all this behind. All we need is each other. I promise to love, honor and cherish you for as long as I live",

  "I never thought that I could ever fall in love like this again. You are so kind, so loving and so understanding. Your eyes show me the light at the end of the tunnel. I want to be with you forever, until the end of time",

  "There is nobody else in this world that I want rather than you. You mean the whole world to me. You are the love of my life and always will be",

  "I never believed in true love until I met you. Now I see that there is an absolute, never-ending love out there. It’s beautiful. I want you to be my partner in crime",

  "You are the first thing that I think of when I wake up and the last thing that I think of before I fall asleep. You are on my mind constantly. There is no escape from the fact that I love you",

  "I don’t want a life without you in it. Each day I spend away from you is a torment. I need you by my side. I want you by my side. You complete me",

  "In your eyes, I see something that I’ve never seen before. It’s love and it’s looking directly at me. I will never hurt you, I will be there for you no matter what happens and I will always give you the support that you need and deserve",

  "Every day I want to be with you. Every month I need to be by your side. Every year I yearn to hold you tightly in my arms. You are my world",

  "For you, I would do anything. I would walk a thousand miles. I would swim a raging river. I would climb to the highest mountain and jump off just because you were asked me to",

  "You are the most special person in my life and I want you to know that you are loved more than words can describe",

  "I can’t imagine spending one day without you by my side. I need you with me",

  "My life was a dark tunnel before you came into it. Everything changed once I saw you for the first time. Now, each day is brighter and more colorful",

  "We make a good team, you and me. You have brought new meaning into my life and for that I will always be grateful to you",

  "Meeting you was fate, becoming your friend was a choice but falling in love with you was out of my control",

  "I want to be wrapped in your arms forever as we look upon the stars together. Just you and me",

  "My heart beats for you, my life depends on you and my blood flows because of you. I love you. Everything I am is because of you",

  "I don’t want the world. I just want you to be mine",
  "You are my special angel sent from up above. I love you",
];

function displayRandomMessage() {
  // Get a random index from the messages array
  var randomIndex = Math.floor(Math.random() * messages.length);

  // Display the random message
  document.getElementById("messageDisplay").innerHTML = messages[randomIndex];
}

// Display a random message every 10 seconds
setInterval(displayRandomMessage, 1000);

// Initial display
displayRandomMessage();

// Uncomment the line below if you want to stop displaying messages after a certain time (e.g., 5 minutes)
// setTimeout(() => clearInterval(messageInterval), 300000); // 300,000 milliseconds = 5 minutes

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
document.body.addEventListener("load", getJoke);

btn.addEventListener("click", getJoke);
getJoke();

//make background image her picture in ASCI
