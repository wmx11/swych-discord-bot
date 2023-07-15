// EXAMPLE
// export default {
//   id: 'contract-address',
//   keywords: [
//     'contract address',
//     'token address',
//     'swych address',
//     'new address',
//   ],
//   enabled: true,
//   reactions: [],
//   allowUserTag: true,
//   answers: [
//     `
// **Swych Contract Address:**
// 0x9334e37faD7c41Cd6C9565Bff3A97CE31CEE52a3
//   `,
//   ],
// } as Qna;

export type Qna = {
  id: string;
  keywords: string[];
  enabled: boolean;
  reactions?: string[];
  answers: string[] | string;
  allowUserTag?: boolean;
};

export const COMMANDS = 'commands';
