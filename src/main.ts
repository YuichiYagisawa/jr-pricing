import {Calc} from './calc';
import {Ticket} from './ticket'

function main(
  isRoundTrip: boolean,
  bordingDate: string,
  isReserved: boolean,
  additionalCharge: boolean,
  depature: string,
  destination: string,
  adult: number,
  child: number,
  season: string
) {
  const ticket = new Ticket();
  ticket.setRoundTrip(isRoundTrip);
  ticket.setBordongDate(bordingDate);
  ticket.setIsReserved(isReserved);
  ticket.setAdditionalCharge(additionalCharge);
  ticket.setDeparture(depature);
  ticket.setDestination(destination);
  ticket.setAdult(adult);
  ticket.setChild(child);
  ticket.setSeason(season);

  const calc = new Calc(ticket);
  return calc.calcAmountFare();
}

let isRoundTrip = true;
let bordingDate = '2022-07-01';
let isReserved = true;
let additionalCharge = true;
let depature = 'tokyo';
let destination = 'himezi';
let adult = 1;
let child = 0;
let season = 'peak';

main(
  isRoundTrip,
  bordingDate,
  isReserved,
  additionalCharge,
  depature,
  destination,
  adult,
  child,
  season
);