#!/usr/bin/env node

/* eslint-disable no-console */

const getVersions = require("./index");

(async function main() {
  try {
    const versions = await getVersions();
    console.log(JSON.stringify(versions, null, 2));
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}());
