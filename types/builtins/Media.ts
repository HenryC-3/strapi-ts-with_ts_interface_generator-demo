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
    name: string | null;
    alternativeText: string | null;
    caption: string | null;
    hash: string | null;
    ext: string | null;
    mime: string | null;
    url: string | null;
    previewUrl: string | null;
    provider: string | null;
    width: number | null;
    height: number | null;
    size: number | null;
  };
}
