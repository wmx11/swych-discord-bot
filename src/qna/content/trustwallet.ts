import { Qna } from "../../../types";

export default {
  id: "trustwallet",
  keywords: [
    ">tw",
    "trustwallet issues",
    "trust wallet issues",
    "0 tokens",
    "0 tokens",
  ],
  enabled: true,
  reactions: [],
  allowUserTag: true,
  answers: `
**TrustWallet currently has issues pulling data for the Swych Staking dApp**

Your initial deposits are not affected.

Your staked tokens are not affected.

You can check your values on DeBank (Just by entering your wallet address).

If you have to interact with your tokens, consider importing your TrustWallet into MetaMask.
  `,
} as Qna;
