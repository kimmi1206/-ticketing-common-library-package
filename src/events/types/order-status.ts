export enum OrderStatus {
  // When the order has been created, but
  // the ticket has not been reserved
  Created = 'created',

  // The ticket has already been reserved, or
  // the user has cancelled the order.
  // The order expires before payment
  Cancelled = 'cancelled',

  // The order has successfully reserved the ticket and
  // the payment is pending
  AwaitingPayment = 'awaiting:payment',

  // The order has reserved the ticket and the user
  // has provided payment successfully
  Complete = 'complete',
}
