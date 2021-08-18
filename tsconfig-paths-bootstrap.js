const tsConfigPathFile = require("./tsconfig.paths.json");
const tsConfigPaths = require("tsconfig-paths");

tsConfigPaths.register({
    baseUrl: tsConfigPathFile.compilerOptions.outDir,
    paths: tsConfigPathFile.compilerOptions.paths,
});
