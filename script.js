const moodData = {
  chill: {
    genre: "Deep House",
    artist: "Try: Black Coffee"
  },
  energetic: {
    genre: "Afro House",
    artist: "Try: Black Coffee - Live Sets"
  },
  focus: {
    genre: "Melodic / Organic House",
    artist: "Try: Bicep"
  },
  melancholic: {
    genre: "Melodic House",
    artist: "Try: Bicep - Isles"
  }
};

const buttons = document.querySelectorAll(".mood-btn");
const result = document.getElementById("result");
const resultGenre = document.getElementById("result-genre");
const resultArtist = document.getElementById("result-artist");

const backgrounds = {
  chill: "linear-gradient(135deg, #3a684f, #0f6048)",
  energetic: "linear-gradient(135deg, #ff512f, #dd2476)",
  focus: "linear-gradient(135deg, #c892ce, #7c4787)",
  melancholic: "linear-gradient(135deg, #2c3e50, #4b6cb7)"
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    const data = moodData[mood];

    resultGenre.textContent = data.genre;
    resultArtist.textContent = data.artist;
    result.classList.remove("hidden");

    document.body.style.background = backgrounds[mood];
  });
});