import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@klinton-org/ticketing-common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
