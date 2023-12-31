module.exports = {
    presets: [
      [
        "next/babel",
        {
          "preset-react": {
            runtime: "automatic",
            importSource: "@emotion/react",
          },
        },
      ],
    ],
    plugins: [
      "babel-plugin-twin",
      "babel-plugin-macros",
      "@emotion/babel-plugin",
    ],
  };
  