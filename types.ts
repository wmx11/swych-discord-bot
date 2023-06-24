export type Qna = {
  id: string;
  keywords: string[];
  enabled: boolean;
  reactions?: string[];
  answers: string[] | string;
};
