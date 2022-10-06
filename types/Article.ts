export interface IArticle {
  id: number;
  attributes: {
    title: string;
    content: string;
    author: string;
  };
}
