document.addEventListener("DOMContentLoaded", function() {
    function copyTextAndShowMessage(copyText, element) {
      navigator.clipboard.writeText(copyText).then(function() {
        // Temporarily replace the text content with "Text copied"
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