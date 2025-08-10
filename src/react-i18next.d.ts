// src/react-i18next.d.ts
import "react-i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      merits: {
        championTitle: string;
        championDesc: string;
        grid: MeritItem[];
      };
      // Lägg till andra översättningsnycklar här vid behov
    };
  }
}
