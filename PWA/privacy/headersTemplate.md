# Headers directives

- cache-control: public, max-age=31536000, must-revalidate

- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  (how long the site is served over https)

- Content-Security-Policy:
    - default-src https:
    (is a great first goal, as it disables inline code and requires https)

It is recommended to start with a reasonably locked down policy and then add in sources as revealed during testing. More [sources](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

- default-src 'none';
- img-src 'self' https://i.imgur.com; (images from that link-example can be displayed as well)
- script-src 'self';

---

This will run a script specified with a sha-code. For older browsers or safari the original script will run on https:

    script-src 'sha256-' 'strict-dynamic' 'unsafe-inline' https:;

---

- style-src 'self';
- font-src https://fonts.gstatic.com; (fonts from google allowed)
- frame-ancestors 'none';
- object-src 'none'; (disable execution of plugins)
- base-uri 'none';

- Referrer-Policy: no-referrer, strict-origin-when-cross-origin

Disable referrers for browsers that don't support strict-origin-when-cross-origin. Uses strict-origin-when-cross-origin for browsers that do

- X-Content-Type-Options: nosniff
- x-frame-options DENY
- X-XSS-Protection: 1; mode=block

every script from cdn needs integrity='sha-numbers' and crossorigin="anonymous"
