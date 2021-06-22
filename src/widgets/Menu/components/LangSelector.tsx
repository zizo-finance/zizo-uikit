import React from "react";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
import { Language } from "../types";
import MenuButton from "./MenuButton";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  isDark?: boolean;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang, isDark }) => (
  <Dropdown
    position="top-right"
    target={
      <Button variant="text" startIcon={<LanguageIcon color={isDark ? "textSubtle" : "#F04D92"} width="24px" />}>
        <Text color={isDark ? "textSubtle" : "#F04D92"}>{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
