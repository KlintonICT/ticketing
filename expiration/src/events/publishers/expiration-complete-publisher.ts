import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@klinton-org/ticketing-common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
