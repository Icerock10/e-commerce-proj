import uk_Flag from "../assets/images/flag-uk.png";
import fr_Flag from "../assets/images/flag-france.png";

interface LanguageMap {
  [key: string]: string;
}

export const languages: LanguageMap = {
  French: fr_Flag,
  English: uk_Flag,
};
