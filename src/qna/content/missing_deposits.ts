import { Qna } from '../../../types';

export default {
  id: 'missing_deposits',
  keywords: [
    '>missing deposit',
    '>no deposit',
    '>0 deposit',
    'deposit disappeared',
    "can't see my deposit",
    'deposit shows 0',
    '0 deposit',
    'deposit is 0',
    'deposit is zero',
    'deposit amount is 0',
    'deposit amount is zero',
    'no deposit',
    'deposit showing 0',
    "don't see any deposit",
    'deposit has gone',
    'deposit is gone',
    'deposit has disappeared',
    '0 in deposit',
    '0 in "your deposits"',
  ],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: `
  **There is a UI (User Interface or Graphical) issue on the dApp**

  Your initial deposit is not affected.

  Your initial deposit is combined with the rewards and displayed in the "Your Earnings" section.
  `,
} as Qna;
