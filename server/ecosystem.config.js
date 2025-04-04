module.exports = {
    apps: [
      {
        name: "apartments",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };