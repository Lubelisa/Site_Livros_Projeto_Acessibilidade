$('input[role="checkbox"]').change(function() {
    if(this.checked) {
      this.setAttribute('aria-checked', "true");
    }
    else {
      this.setAttribute('aria-checked', "false");
    }
});