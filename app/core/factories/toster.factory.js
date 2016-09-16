export default function ToasterFactory (toaster) {
	'ngInject';

	const messageTimeout = 3000;
	return {
		success,
		error,
		info,
		wait,
		warning
	};
	
	function success (title, body, timeout) {
		toaster.clear('*');
		return toaster.pop('success', title, body,
			timeout || messageTimeout);
	}

	function error (title, body, timeout) {
		toaster.clear('*');
		return toaster.pop({
			type: 'error',
			title: title,
			body: body,
			timeout: timeout || messageTimeout
		});
	}

	function info (title, body, timeout) {
		toaster.clear('*');
		return toaster.pop({
			type: 'info',
			title: title,
			body: body,
			timeout: timeout || messageTimeout
		});
	}

	function wait (title, body, timeout) {
		toaster.clear('*');
		return toaster.pop({
			type: 'wait',
			title: title,
			body: body,
			timeout: timeout || messageTimeout
		});
	}
	
	function warning (title, body, timeout) {
		toaster.clear('*');
		return toaster.pop({
			type: 'warning',
			title: title,
			body: body,
			timeout: timeout || messageTimeout
		});
	}
}
