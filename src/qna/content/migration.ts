import { Qna } from '../../../types';

export default {
  id: 'migration',
  keywords: [
    'what happened to titano',
    'is titano still alive',
    'where is titano',
    'titano to swych',
    'how to swap titano',
    'how to trade titano',
    'migrate titano',
    'what happened to my titano tokens',
    '>migration',
  ],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: [
    `
  **Titano is no longer - Welcome SWYCH!**
  • You cannot sell Titano tokens. Their value has been transferred over to Swych tokens that you may already have in your wallet.
  • You don't need to do anything with your Titano tokens other than hide them.
  • Titano to Swych migration was automated and based on the USD value of your holdings.

  • To see your Swych tokens please add the new contract address to your wallet. Please follow the instructions if you don't know how:
  https://support.ledger.com/hc/en-us/articles/6375103346077-Add-custom-tokens-to-MetaMask?docs=true

  • The new contract address is: **0x9334e37faD7c41Cd6C9565Bff3A97CE31CEE52a3**`,
    'You cannot swap your Titano tokens for Swych - Titano is no more. All you have to do is import the new Swych contract address **0x9334e37faD7c41Cd6C9565Bff3A97CE31CEE52a3** to your wallet.',
  ],
} as Qna;
