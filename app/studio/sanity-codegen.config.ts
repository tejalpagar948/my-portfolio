// studio/sanity-codegen.config.ts
import { schemaTypes } from "../../sanity/schemaTypes/schemaTypes";

export default {
  schema: schemaTypes,
  output: "../../sanity.types.ts",
};
