import { EPropertyValue } from "./eproperty";
import { HCard } from "./h-card";

export interface HEntry {
  type: "h-entry"[];
  properties: {
    name?: string[];
    summary?: string[];
    content?: EPropertyValue[];
    category?: string[];
    published?: string[];
    updated?: string[];
    author?: string[];
    url?: string[];
    iod?: string[];
    location?: (HCard | HAdr | HGeo)[];
  };
}
