export type TArticle = IArticle[];

export interface IArticle {
  title: string;
  author: string;
  category: string;
  image: string;
  views: number;
}

export type TActivities = IActivities[];

export interface IActivities {
  name: string;
  category: string;
  short_desc: string;
  image: string;
  moment: string;
}

export type Tchannels = Ichannels[];

export interface Ichannels {
  name: string;
  image: string;
}
