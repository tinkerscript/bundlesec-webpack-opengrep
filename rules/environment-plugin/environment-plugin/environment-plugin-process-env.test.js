// ruleid: environment-plugin-process-env
new webpack.EnvironmentPlugin(process.env);

// ok: environment-plugin-process-env
new webpack.EnvironmentPlugin(["NODE_ENV", "API_URL"]);

// ok: environment-plugin-process-env
new webpack.EnvironmentPlugin({
  NODE_ENV: "development",
  API_URL: null,
});
