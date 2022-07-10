export class Ticket {
  roundTrip: boolean;
  bordingDate: string;
  isReserved: boolean;
  additionalCharge: boolean;
  depature: string;
  destination: string;
  adult: number;
  child: number;
  season: string;
  
  constructor() {
    this.roundTrip = false;
    this.bordingDate = '';
    this.isReserved = false;
    this.additionalCharge = false;
    this.depature = '';
    this.destination = '';
    this.adult = 0;
    this.child = 0;
    this.season = '';
  }

  setRoundTrip(arg: boolean) {
    this.roundTrip = arg;
  }

  getRoundTrip() {
    return this.roundTrip;
  }

  setBordongDate(date: string) {
    this.bordingDate = date;
  }

  getBordongDate() {
    return this.bordingDate;
  }

  setIsReserved(arg: boolean) {
    this.isReserved = arg;
  }

  getIsReserved() {
    return this.isReserved;
  }

  setAdditionalCharge(arg: boolean) {
    this.additionalCharge = arg;
  }

  getAdditionalCharge() {
    return this.additionalCharge;
  }

  setDeparture(arg: string) {
    this.depature = arg;
  }

  getDeparture() {
    return this.depature
  }

  setDestination(arg: string) {
    this.destination = arg;
  }

  getDestination() {
    return this.destination;
  }

  setAdult(arg: number) {
    this.adult = arg;
  }

  getAdult() {
    return this.adult;
  }

  setChild(arg: number) {
    this.child = arg;
  }

  getChild() {
    return this.child;
  }

  setSeason(arg: string) {
    this.season = arg;
  }

  getSeason() {
    return this.season;
  }

}
