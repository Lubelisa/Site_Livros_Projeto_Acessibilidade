$('input[role="checkbox"]').change(function() {
    if(this.checked) {
      this.setAttribute('aria-checked', "true");
    }
    else {
      this.setAttribute('aria-checked', "false");
    }
});

$('select').change(function() {
  for (var i = 0; i < this.options.length; i++) {
    if(i == this.selectedIndex) {
      this.options[i].setAttribute('aria-selected', "true");
    }
    else {
       this.options[i].setAttribute('aria-selected', "false");
    }
  }
});

$('select').on({    
  'change': function() {
    $(this).blur();
  },

  'focus': function() {
    this.setAttribute('aria-expanded', "true");
  },

  'blur': function() {
    this.setAttribute('aria-expanded', "false");
  },

  'keyup': function(e) {
    if (e.keyCode == 27)
      this.setAttribute('aria-expanded', "true");
  }
});