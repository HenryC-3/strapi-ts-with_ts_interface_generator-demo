export interface IArticle {
  id: number;
  attributes: {
    title: string | null;
    content: string | null;
    author: string | null;
  };
}
