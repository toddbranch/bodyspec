exports.gramsToPounds = function(grams) {
	return grams * 0.00220462;
}

exports.stringToFloat = function(string) {
	string = string.replace(/,/g,'');
	return parseFloat(string);
}
