import { Sala } from "./sala.model";
import { Trening } from "./trening.info.model";

export class ZakazaniTrening {
    constructor(
        public scheduledGroupTraining: Trening,
        public hall: Sala) {
        }
}