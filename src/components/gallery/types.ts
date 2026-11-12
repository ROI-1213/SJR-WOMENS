
export interface Photo {
  id: number;
  src: string;
  previewSrc?: string;
  title: string;
  category: string;
}

export interface Video {
  id: number;
  youtubeId: string;
  title: string;
}

export type ViewMode = 'grid' | 'list';
export type ActiveTab = 'photos' | 'videos';
