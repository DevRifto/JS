function ticketPrice(ticket) {
  const firstTicketPrice = 100;
  const secTicketPrice = 90;
  const extraTicketPrice = 70;

  if (ticket <= 100) {
    let price = firstTicketPrice * ticket;
    return price;
  } else if (ticket <= 200) {
    let first100TicketPrice = 100 * firstTicketPrice;
    let restTicket = ticket - 100;
    let restTicketPrice = restTicket * secTicketPrice;
    let totalTicketPrice = first100TicketPrice + restTicketPrice;
    return totalTicketPrice;
  } else {
    let first100TicketPrice = 100 * firstTicketPrice;
    let second100TicketPrice = 100 * secTicketPrice;
    let restTicket = ticket - 200;
    let restTicketPrice = restTicket * extraTicketPrice;
    let totalTicketPrice = first100TicketPrice + second100TicketPrice + restTicketPrice;
    return totalTicketPrice;
  }
}
let totalTicketPrice = ticketPrice(101);
console.log(totalTicketPrice);
