import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@klinton-org/ticketing-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
