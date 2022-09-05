istrav.pro
========
fleet management software

source code:
- library: https://github.com/trabur/fleet-optimizer
- server: https://github.com/trabur/pro.istrav.dev
- clients:
  - browser: https://github.com/trabur/istrav.pro
  - mobile: coming soon!

apps:
- osrm: https://osrm.istrav.dev
- database: https://couchdb.istrav.dev
- server: https://pro.istrav.dev
- clients:
  - browser: https://istrav.pro
  - mobile: coming soon!

browser tech:
- kit.svelte.dev
- materializecss.com
- rxdb.info
- mapbox.com
- socket.io

mobile tech:
- svelte-native.technology

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
