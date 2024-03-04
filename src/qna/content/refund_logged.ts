import { Qna } from '../../../types';

export default {
  id: 'refund_logged',
  keywords: ['>rl'],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  deleteCallerMessage: true,
  answers: `
  Wallet noted. Please wait for a refund announcement. You don't need to do anything else. Meanwhile, we'll close the ticket. Thank you!
  Refunds will be sent within a couple of weeks.
  `,
} as Qna;
