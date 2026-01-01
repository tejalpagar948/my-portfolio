import fs from "fs";
import path from "path";

const SCHEMA_ROOT = "./sanity/schemaTypes";
const OUTPUT_FILE = "./schema-types.ts";

const imports = [];
const exports = [];

function toCamelCase(file) {
  return file
    .replace(".ts", "")
    .split("-")
    .map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1)))
    .join("");
}

function scan(dir) {
  if (!fs.existsSync(dir)) return;

  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      scan(full);
      continue;
    }

    if (!file.endsWith(".ts") || file.endsWith(".d.ts")) continue;

    const exportName = toCamelCase(file);
    const importPath = full
      .replace(/^sanity/, "./sanity")
      .replace(/\\/g, "/")
      .replace(".ts", "");

    imports.push(`import { ${exportName} } from "${importPath}";`);
    exports.push(exportName);
  }
}

scan(path.join(SCHEMA_ROOT, "documents"));
scan(path.join(SCHEMA_ROOT, "objects"));

const content = `
${imports.join("\n")}

export const schemaTypes = [
  ${exports.join(",\n  ")}
];
`;

fs.writeFileSync(OUTPUT_FILE, content.trim());
console.log(`✅ schema-types.ts generated (${exports.length} schemas)`);
