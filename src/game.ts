import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import DclSmartTracer from "./item";

const tracer = new DclSmartTracer()
const spawner = new Spawner(tracer)

spawner.spawn(
    'smartTracer'
)
