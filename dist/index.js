const tsTranspiledEvent = new Event('tsTranspiled');
const workerFile = window.URL.createObjectURL(new Blob([`
        importScripts('https://unpkg.com/typescript@latest')

        const load = sourceUrl => {
          const xhr = XMLHttpRequest
            ? new XMLHttpRequest()
            : ActiveXObject
            ? new ActiveXObject('Microsoft.XMLHTTP')
            : null

          if (!xhr) return ''

          xhr.open('GET', sourceUrl, false)
          xhr.overrideMimeType && xhr.overrideMimeType('text/plain')
          xhr.send(null)
          return xhr.status == 200 ? xhr.responseText : ''
        }

        onmessage = ({data: sourceUrl}) => {
          const raw = load(sourceUrl)
          const transpiled = ts.transpile(raw)
          postMessage(transpiled)
        }
      `], {
  type: 'text/javascript'
}));
window.addEventListener('DOMContentLoaded', async () => {
  const scripts = document.getElementsByTagName('script');
  let pending = [];

  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].type === 'text/typescript') {
      const src = scripts[i].src;
      pending.push(new Promise(resolve => {
        const w = new Worker(workerFile);
        w.postMessage(src);

        w.onmessage = (_ref) => {
          let transpiled = _ref.data;
          const newScript = document.createElement('script');
          newScript.innerHTML = `window.addEventListener('tsTranspiled', function() {
              ${transpiled}
            })`;
          scripts[i].replaceWith(newScript);
          resolve();
        };
      }));
    }
  }

  await Promise.all(pending);
  window.dispatchEvent(tsTranspiledEvent);
});