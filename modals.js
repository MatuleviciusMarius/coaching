function displayOtherText(object, objectId) {
  setTimeout(function () {
    otherText = document.getElementById(objectId);
    otherText.classList.remove("otherText");
    otherText.classList.add("textAppear");
    object.classList.add("otherText");
  }, 1000);
  object.classList.add("textDisappear");
}
