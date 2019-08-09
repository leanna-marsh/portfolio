var words = ["a UX/UI Designer.", "a Baker.", "a Cheese Connoisseur.", "fluent in German.", "a hopeless wanderer.", "friendly.", "driven.", "creative.", "an avid camper.", "an auntie.", "a critical thinker", "always looking for new shows to watch.", "a doer.", "always asking why", "ready for my next adventure."]
var w = 0
var interval

var container = document.querySelector(".greeting")
var word = container.querySelector("span")

container.addEventListener("mouseover", function() {
  interval = setInterval(function() {
    word.textContent = words[w = (w + 1) % words.length]
  }, 400)
});
container.addEventListener("mouseout", () => clearInterval(interval))
