export default function LoggerFactory($log, ToasterFactory) {
	"ngInject";

	return {
		error,
		warning,
		success,
		info,
		debug
	};

	function error (options) {
		ToasterFactory.error(options.title, options.message);
		$log.error(`Error: [${options.title} - ${options.message}] `, options.data);
	}

	function warning (options) {
		ToasterFactory.warning(options.title, options.message);
		$log.warn(`Warning: [${options.title} - ${options.message}] `, options.data);
	}

	function success (options) {
		ToasterFactory.success(options.title, options.message);
		$log.log(`Success: [${options.title} - ${options.message}] `, options.data);
	}

	function info (title, message, data) {
		ToasterFactory.info(options.title, options.message);
		$log.info(`Info: [${title} - ${message}] `, data);
	}

	function debug (title, message, data) {
		$log.debug(`Debug: [${title} - ${message}] `, data);
	}
};

