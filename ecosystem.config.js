module.exports = {
  apps: [
    {
      name: "web",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./apps/web",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "docs",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "./apps/docs",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
