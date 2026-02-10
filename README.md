The exploit stesp are in react2shellexp/simple-exploit.js. The vulnerable code is in poc/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-server.browser.development.js. 

To activate run
```
cd poc
npm run dev
```
To exploit, run
```
cd react2shellexp
node simple-exploit.js
```

You can uncomment the payloads in simple-exploit.js to see the different stages of the exploit. The final payload is the one that actually triggers the RCE.