### About

Zero-config TypeScript compilation for web browsers. Sped substantially thanks to web workers and service workers, ts-browser is equipped for production use in small projects. Beyond its speed, the minified build is less than 10kb!

### About

```html
<!-- include ts-browser -->
<script type="text/javascript" src="http://unpkg.com/ts-browser@latest" />

<!-- include your TypeScript file -->
<script type="text/typescript" src="your/typescript/file.ts" />
```

### Note

Web Workers are––at the time of writing this README––supported by 92.74% of web browsers. Blobs (another API used by ts-browser) are supported by 93.02% of browsers. That being said, don't give too much weight to supporting the absent 7%!
