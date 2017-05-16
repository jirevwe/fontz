(function (exports) {
	'use strict';

	//To show notification
	function toast(msg, options) {
		if (!msg) return;

		let toastContainer = document.getElementById('toast');

		options = options || 3000; //3 seconds

		toastContainer.innerHTML = msg;
		toastContainer.classList.remove('toast__msg--hide');

		//Show toast for 3secs and hide it
		setTimeout(function () {
			toastContainer.classList.add('toast__msg--hide');
		}, options);
	}

	exports.toast = toast; //Make this method available in global
})(typeof window === 'undefined' ? module.exports : window);