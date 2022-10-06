import { IMediaFormat } from "./MediaFormat";
export interface IMedia {
  id: number;
  attributes: {
    formats?: {
      thumbnail?: IMediaFormat;
      large?: IMediaFormat;
      medium?: IMediaFormat;
      small?: IMediaFormat;
    } | null;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    url: string;
    previewUrl: string;
    provider: string;
    width: number;
    height: number;
    size: number;
  };
}
