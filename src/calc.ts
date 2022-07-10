import {Const} from "./const";

export interface passengerInfo {
  roundTrip: boolean;
  bordingDate: string;
  isReserved: boolean;
  additionalCharge: boolean;
  depature: string;
  destination: string;
  adult: number;
  child: number;
  season: string;
}

export class Calc {
  basicFare: number;
  expressFare: number;
  freeSeat: number;
  seasonDiscount: number;
  group: number;
  amountFare: number;
  passengerInfo: passengerInfo;
  
  constructor(ticket: passengerInfo) {
    this.passengerInfo = ticket;
    this.basicFare = 0;
    this.expressFare = 0;
    this.freeSeat = 0;
    this.seasonDiscount = 0;
    this.group = ticket.adult + ticket.child;;
    this.amountFare = 0;
  }

  calcAmountFare() {
    this.calcBasicFare();
    this.calcExpressFare();
    this.amountFare = this.basicFare + this.expressFare + this.seasonDiscount;
    this.calcGroupFare();
    if (this.passengerInfo.roundTrip) { return this.amountFare  * 2 }
    return this.amountFare;
  }
  
  calcBasicFare() {
    if (this.passengerInfo.destination == 'shinosaka') {
      this.basicFare = Const.BASIC_FARE_TO_SHINOSAKA;
    } else if (this.passengerInfo.destination == 'himezi') {
      if (this.passengerInfo.roundTrip) {
        this.basicFare = Const.BASIC_FARE_TO_HIMEZI * 0.9;
      } else {
        this.basicFare = Const.BASIC_FARE_TO_HIMEZI;
      }
    }
  }

  calcExpressFare() {
    if (this.passengerInfo.destination == 'shinosaka') {
      this.expressFare = Const.EXPRESS_FARE_TO_SHINOSAKA;
      if (this.passengerInfo.additionalCharge) {
        this.expressFare += 320;
      }
    } else if (this.passengerInfo.destination == 'himezi') {
      this.expressFare = Const.EXPRESS_FARE_TO_HIMEZI;
      if (this.passengerInfo.additionalCharge) {
        this.expressFare += 530;
      }
    }

    if (this.passengerInfo.isReserved) {
      if (this.passengerInfo.season === 'peak') {
        this.expressFare += 200;
      } else if (this.passengerInfo.season === 'off-peak') {
        this.expressFare -= 200;
      }
    } else {
      this.expressFare -= Const.FREE_SHEET;
    }
  }

  calcGroupFare() {
    if (this.group <= 7) {
      this.amountFare = this.amountFare * this.group
    } else if (this.group <= 30) {
      if (this.passengerInfo.season === 'peak') {
        this.amountFare = this.amountFare * 0.9;
      } else {
        this.amountFare = this.amountFare * 0.85;
      }
      this.amountFare * this.group;
    } else if (this.group <= 50) {
      this.amountFare * (this.group - 1);
    } else {
      let discountPeople: number = this.group / 50
      this.amountFare * (this.group - discountPeople);
    }
  }

  calcChild() {

  }
}
