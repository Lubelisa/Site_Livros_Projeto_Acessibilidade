$('input[role="checkbox"]').change(function() {
    if(this.checked) {
      this.setAttribute('aria-checked', "true");
    }
    else {
      this.setAttribute('aria-checked', "false");
    }
});

$('select[role="listbox"]').change(function() {
  for (var i = 0; i < this.options.length; i++) {
    if(i == this.selectedIndex) {
      this.options[i].setAttribute('aria-selected', "true");
    }
    else {
       this.options[i].setAttribute('aria-selected', "false");
    }
  }
});