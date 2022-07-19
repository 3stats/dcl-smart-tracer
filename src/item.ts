import { customEvents } from './tracer'

export default class DclSmartTracer {

    init() {
        log('Hello from init!!!')

        customEvents({
            eventType: 'smartEvent'
        })
    }

    spawn() {}
}
