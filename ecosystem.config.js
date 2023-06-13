module.exports = {
	apps: [{
		name: "site (main)",
		script: "./src/loaders/webserver.js",
		env_production: {
			NODE_ENV: "production"
		},
		env_development: {
			NODE_ENV: "development"
		},
		watch_delay: 1000,
		ignore_watch: ["node_modules"],
		max_memory_restart: "512M",
		out_file: "./logfile.txt",
		error_file: "./errorfile.txt"
	}]
}
