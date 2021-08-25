### About

Zero-config TypeScript compilation for web browsers. Sped substantially thanks to web workers and service workers, ts-browser is equipped for production use in small projects. Beyond its speed, the minified build is ~4kb gzipped!

### Usage

```html
<!-- include ts-browser -->
<script type="text/javascript" src="https://unpkg.com/ts-browser"></script>

<!-- include your TypeScript file -->
<script type="text/typescript" src="your/typescript/file.ts"></script>
```

### Can I use?

Web Workers are––at the time of writing this README––supported by 92.74% of web browsers. Blobs (another API used by ts-browser) are supported by 93.02% of browsers. [Here's a common opinion on this debate](https://web.archive.org/web/20190125051607/https://twitter.com/jamiebuilds/status/1022568918949408768), in case you're undecided.
