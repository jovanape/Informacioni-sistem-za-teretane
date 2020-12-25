import { ZakazaniTrening } from "./zakazani.trening.model";

export class TrenerovTrening {
    constructor(
        public capacity: number,
        public scheduledGroupTraining: ZakazaniTrening) {
        }
}