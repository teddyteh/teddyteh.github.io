(function ($) {
  $(function () {
    var contactForm = $("#contact-form");
    var loader = contactForm.find(".ajax-loader");

    contactForm.on("submit", function () {
      $("#contact-form *").fadeOut(500);
      contactForm.prepend(
        "<p>Thank you for contacting me. I'll reply back soon I promise!<p/>"
      );
      //   loader.hide();
      //   $(".alert").fadeIn().delay(2000).fadeOut();
    });

    contactForm.submit(function () {
      if (contactForm.valid()) {
        loader.css("display", "block");

        return true;
      }

      return false;
    });
  });

  $.fn.clearForm = function () {
    return this.each(function () {
      var type = this.type,
        tag = this.tagName.toLowerCase();
      if (tag == "form") return $(":input", this).clearForm();
      if (type == "text" || type == "password" || tag == "textarea")
        this.value = "";
      else if (type == "checkbox" || type == "radio") this.checked = false;
      else if (tag == "select") this.selectedIndex = -1;
    });
  };
})(jQuery);
