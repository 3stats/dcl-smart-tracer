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
