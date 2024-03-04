import { Qna } from '../../../types';

export default {
  id: 'refund',
  keywords: ['>refund'],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: `
    Please open a <#908073304261287965> and submit your wallet address.

    The team will check your eligibility and log your wallet. There are no additional actions required from your side. Please wait for the refund announcement. Thank you.
  `,
} as Qna;
