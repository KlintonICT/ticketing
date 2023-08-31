import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@klinton-org/ticketing-common';

export class TicketCreatePublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
