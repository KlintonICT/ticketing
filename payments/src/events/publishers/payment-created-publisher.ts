import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@klinton-org/ticketing-common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
