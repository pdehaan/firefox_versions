/* eslint-disable no-console */

const getVersions = require("./index");

main();

async function main() {
  try {
    const versions = await getVersions();
    console.log(JSON.stringify(versions, null, 2));
    console.log(`-- via ${getVersions.FIREFOX_VERSIONS_URL}`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}
