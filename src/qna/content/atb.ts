import { Qna } from '../../../types';

export default {
  id: 'atb',
  keywords: [
    "why can't I sell",
    'how do I sell',
    'it gives me an error',
    'gives me an error',
    "can't swap swych",
    "can't swap my tokens",
    'how to sell',
    "why I can't sell",
    "can't sell",
    'the input token cannot be transferred',
    '>atb',
    "can't swap on swych",
    'issues selling',
  ],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: `
  **If you cannot swap your tokens, double check your slippage**
  
  • Make sure you **have slippage set to 12%** and that you are swapping **Swych tokens to BNB**.

  If that doesn't work, try increasing your gas limit.
  `,
} as Qna;
