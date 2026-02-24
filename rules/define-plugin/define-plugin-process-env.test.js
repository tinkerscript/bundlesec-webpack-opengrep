const webpack = require("webpack");

// ruleid: define-plugin-process-env
new webpack.DefinePlugin({
  "process.env": process.env,
});

// ruleid: define-plugin-process-env
new webpack.DefinePlugin({
  BUILD_VERSION: "1.0",
  "process.env": process.env,
});

// ruleid: define-plugin-process-env
new webpack.DefinePlugin({
  ENV: process.env
});

// ruleid: define-plugin-process-env
new webpack.DefinePlugin({
  a: 1,
  b: process.env
});

// ruleid: define-plugin-process-env
new webpack.DefinePlugin(process.env);

// ok: define-plugin-process-env
new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  "process.env.API_URL": JSON.stringify(process.env.API_URL),
});

// ok: define-plugin-process-env
new webpack.DefinePlugin({
  VERSION: JSON.stringify("1.2.3"),
});
