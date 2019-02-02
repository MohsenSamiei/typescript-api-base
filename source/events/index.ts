import { EventEmitter } from "events";
import logAppStarted from "./logappstarted";
import logAppCrashed from "./logappcrashed";

export const events = {
    on_app_started: "on_app_started",
    on_app_crashed: "on_app_crashed"
};

export const emitter = new EventEmitter();

emitter.on(events.on_app_started, logAppStarted);
emitter.on(events.on_app_crashed, logAppCrashed);
