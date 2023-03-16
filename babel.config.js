module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@app/config": "./app/config",
            "@app/context": "./app/context",
            "@app/constants": "./app/constants",
            "@app/layout": "./app/layout",
            "@app/navigation": "./app/navigation",
            "@app/screens": "./app/screens",
            "@app/theme": "./app/theme",
            "@app/utils": "./app/utils",
          },
        },
      ],
    ],
  };
};
