var TxtRotate = function(el) {
  this.textArray = ['Software Developer', 'Innovative Creator', 'Life-long Student'];
  this.el = el;
  this.n = 0;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  	var fullTxt = this.textArray[this.n % this.textArray.length];

 	this.txt = fullTxt.substring(0, this.txt.length + 1);

  	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	if (this.txt === fullTxt) {
	  	this.n++;
	  	this.txt = '';
	}

	var delta = 200;
	var that = this;
  	setTimeout(function() {
    	that.tick();
  	}, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('attributes');

  for (var i = 0; i < elements.length; i++) {
    new TxtRotate(elements[i]);
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};