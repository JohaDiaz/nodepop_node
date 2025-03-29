import i18n from "i18n";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18n.configure({
  locales: ["en", "es"],
  directory: path.join(__dirname, "..", "locales"),
  defaultLocale: "en",
  syncFiles: true,
  queryParameter: "lang",
  cookie: "nodepop-locale",
});

export default i18n;
