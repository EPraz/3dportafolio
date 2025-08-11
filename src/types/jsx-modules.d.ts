// src/types/jsx-modules.d.ts
declare module "*.jsx" {
  import type { ComponentType } from "react";
  const C: ComponentType<any>;
  export default C;
}
