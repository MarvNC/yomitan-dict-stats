interface Dict {
  title: string;
  revision: string;
  sequenced: boolean;
  version: number;
  importDate: number;
  author: string;
  url: string;
  description: string;
  attribution: string;
  prefixWildcardsSupported: boolean;
  counts: {
    terms: {
      total: number;
    };
    termMeta: {
      total: number;
    };
    kanji: {
      total: number;
    };
    kanjiMeta: {
      total: number;
    };
    tagMeta: {
      total: number;
    };
    media: {
      total: number;
    };
  };
}
