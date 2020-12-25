export class Korisnici {
    constructor(
        public clientId: number,
        public name: string,
        public lastName: string,
        public userName: string,
        public password: string,
        public phoneNumber: string,
        public email: string,
        public birthDate: string) {
        }
}