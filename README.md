# firefox_versions

Fetch latest Firefox versions

## Usage:

### CLI

```sh
$ npx pdehaan/firefox_versions

{
  "FIREFOX_NIGHTLY": "64.0a1",
  "FIREFOX_AURORA": "",
  "FIREFOX_ESR": "60.2.2esr",
  "FIREFOX_ESR_NEXT": "",
  "LATEST_FIREFOX_DEVEL_VERSION": "63.0b11",
  "FIREFOX_DEVEDITION": "63.0b11",
  "LATEST_FIREFOX_OLDER_VERSION": "3.6.28",
  "LATEST_FIREFOX_RELEASED_DEVEL_VERSION": "63.0b11",
  "LATEST_FIREFOX_VERSION": "62.0.3"
}
```

Or if you have the **pdehaan/firefox_versions** installed locally:

```sh
$ $(npm bin)/firefox_versions

{
  "FIREFOX_NIGHTLY": "64.0a1",
  "FIREFOX_AURORA": "",
  "FIREFOX_ESR": "60.2.2esr",
  "FIREFOX_ESR_NEXT": "",
  "LATEST_FIREFOX_DEVEL_VERSION": "63.0b11",
  "FIREFOX_DEVEDITION": "63.0b11",
  "LATEST_FIREFOX_OLDER_VERSION": "3.6.28",
  "LATEST_FIREFOX_RELEASED_DEVEL_VERSION": "63.0b11",
  "LATEST_FIREFOX_VERSION": "62.0.3"
}
```

### API

```sh
$ npm i pdehaan/firefox_versions -S
```

```js
const getVersions = require("firefox_versions");

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
```
