import { Qna } from 'types';

export default {
  id: 'impact',
  keywords: ['>price impact', '>impact', "can't buy", 'price impact too high'],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: `
  **If you cannot buy Swych, try the following tips**
    • Make sure you use BNB to buy Swych tokens
    • If you see a message "Price impact too high", go to the settings tab and toggle the Multihops setting
    • If you see that the USD value is incorrect, try swapping anyway. It's a visual glitch which won't affect your trade
    • If you are still experiencing issues, please open a new <#908073304261287965>
    `,
} as Qna;
