$(function() {
	"use strict";

	$.getJSON("data/data.json", function(json) {
		for(var i in json) {
			console.log(json[i]);
		}
	});

});