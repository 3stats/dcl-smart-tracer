# dcl-smart-tracer
A free smart item for tracking users in Decentraland. After adding this smart item to your scene you will be able to 
see the stats of your land on our [free dashboard](https://3stats.xyz)

Whenever possible, please prefer our [SDK](https://www.npmjs.com/package/@3stats/dcl-tracer) (not compatible with the Dcl builder)

# Installation

To integrate the smart item in your scene, simply download [this](https://github.com/3stats/dcl-smart-tracer/blob/main/dist/dclSmartTracer.zip)
file and import it in your builder.


# Advanced

If you are creating your own smart item, and you want to add our tracking, you can copy `src/item.ts`:

- Install the package:
`npm install @3stats/dcl-tracer`

- Use symbolic links because the builder doesn't follow the node modules folder:
`ln -s node_modules/@3stats/dcl-tracer/index.js src/tracer.js`

- Use the code from your smart item:

```javascript
import { customEvents } from './tracer'

export default class MySmartItem {

    init() {
        customEvents({
            eventType: 'smartEvent'
        })
    }

    spawn() {}
}
```

You can fire the event wherever you want, but early is better.
