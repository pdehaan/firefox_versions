const got = require("got");

const FIREFOX_VERSIONS_URL =
  "https://product-details.mozilla.org/1.0/firefox_versions.json";

module.exports = () => {
  return got(FIREFOX_VERSIONS_URL, { json: true })
    .then(({ body }) => body);
};

module.exports.FIREFOX_VERSIONS_URL = FIREFOX_VERSIONS_URL;
