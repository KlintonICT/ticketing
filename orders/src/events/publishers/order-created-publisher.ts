import { Publisher, OrderCreatedEvent, Subjects } from "@klinton-org/ticketing-common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated
}
