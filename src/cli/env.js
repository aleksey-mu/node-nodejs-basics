const parseEnv = () => {
	const env = process.env;

	const searchingPrefix = 'RSS_';

	for (const key in env) {
		if (key.slice(0, 4) === searchingPrefix) {
			console.log(`${key}=${env[key]};`);
		}
	}
};

parseEnv();
