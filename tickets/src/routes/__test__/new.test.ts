import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';

import { natsWrapper } from '../../nats-wrapper';

it('has a route handle listening to /api/tickets for post requests', async () => {
  const res = await request(app).post('/api/tickets').send({});

  expect(res.status).not.toEqual(404);
});

it('can only be accessed if the user is signed', async () => {
  const res = await request(app).post('/api/tickets').send({});

  expect(res.status).toEqual(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const res = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({});

  expect(res.status).not.toEqual(401);
});

it('returns an error if an invalid title is provided', async () => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: '',
      price: 10,
    })
    .expect(400);

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      price: 10,
    })
    .expect(400);
});

it('returns an error if an invalid price is provided', async () => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'ticket-title',
      price: -10,
    })
    .expect(400);

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'ticket-title',
    })
    .expect(400);
});

it('create a ticket with valid inputs', async () => {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);

  const title = 'ticket-title';

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title, price: 20 })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].price).toEqual(20);
  expect(tickets[0].title).toEqual(title);
});

it('published an event', async () => {
  const title = 'ticket-title';

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title, price: 20 })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
