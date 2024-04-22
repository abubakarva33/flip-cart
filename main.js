document.addEventListener("DOMContentLoaded", function() {
  var getDemoBtns = document.querySelectorAll('.get-demo-btn');
  var flippedCard = null;

  getDemoBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var card = this.closest('.flip-card');
      if (flippedCard && flippedCard !== card) {
        flippedCard.classList.remove('flipped');
      }
      card.classList.toggle('flipped');
      flippedCard = card;
    });
  });

  function copyTextAndShowMessage(copyText, element) {
    navigator.clipboard.writeText(copyText).then(function() {
      var originalText = element.textContent;
      element.textContent = "Text copied";
      setTimeout(function() {
        element.textContent = originalText;
      }, 1000);
    }, function(err) {
      console.error('Unable to copy: ', err);
    });
  }

  var copyIcons = document.querySelectorAll(".copyicon");
  copyIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      var copyText = this.previousElementSibling.textContent;
      copyTextAndShowMessage(copyText, this.previousElementSibling);
    });
  });
});
