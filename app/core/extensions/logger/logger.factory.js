export default function LoggerFactory($log, toaster) {
	"ngInject";
	const DEFAULT_TIMEOUT = 3000;
	return {
		success: logMessage,
		error: logMessage,
		warning: logMessage,
		info: logMessage,
		debug: logMessage
	};

	function logMessage (options) {
		const { type, title, body, message, data } = options;
		const timeout = options.timeout || DEFAULT_TIMEOUT;
		let consoleType;
		switch(options.type) {
		case options.type === 'success':
			consoleType = 'log';
			return consoleType;
		case options.type === 'wait':
			consoleType = 'debug';
			return consoleType;
		default:
			consoleType = options.type;
			return consoleType;
		}

		$log[consoleType](`${type.toUpperCase()}: [${title} - ${message}]`, data);
		toaster.clear('*');
		return toaster.pop({ type, title, body, timeout });
	}
};

