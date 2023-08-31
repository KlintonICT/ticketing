import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@klinton-org/ticketing-common';

export class TicketCreatePublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
