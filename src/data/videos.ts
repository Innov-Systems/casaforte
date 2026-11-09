export type ProjectVideo = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  src: string;
  type: "mp4" | "youtube";
};
// MP4: coloque o arquivo em public/videos e use src: '/videos/arquivo.mp4'.
// YouTube: use a URL completa do vídeo. Cadastre apenas trabalhos reais autorizados.
export const videos: ProjectVideo[] = [];
