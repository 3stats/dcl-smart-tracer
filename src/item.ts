import { customEvents } from './tracer'

export default class DclSmartTracer {

    init() {
        customEvents({
            eventType: 'smartEvent'
        })
    }

    spawn() {}
}
