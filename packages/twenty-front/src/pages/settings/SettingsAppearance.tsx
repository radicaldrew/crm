import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { H1Title, H2Title, IconSettings } from 'twenty-ui';

import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { ColorSchemePicker } from '@/ui/input/color-scheme/components/ColorSchemePicker';
import { Select } from '@/ui/input/components/Select';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Section } from '@/ui/layout/section/components/Section';
import { useColorScheme } from '@/ui/theme/hooks/useColorScheme';

const StyledH1Title = styled(H1Title)`
  margin-bottom: 0;
`;

export const SettingsAppearance = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { t, i18n } = useTranslation();
  let language = '';
  const languages = [
    { label: 'en-US', value: 'en-US' },
    { label: 'he-IL', value: 'he-IL' },
  ];
  const changeLanguage = (lang: string) => {
    language = lang;
    i18n.changeLanguage(lang);
  };

  return (
    <SubMenuTopBarContainer Icon={IconSettings} title={t('settings')}>
      <SettingsPageContainer>
        <StyledH1Title title={t('appearance')} />
        <Section>
          <H2Title title={t('theme')} />
          <ColorSchemePicker value={colorScheme} onChange={setColorScheme} />
        </Section>
        <Section>
          <H2Title title={t('language')} />
          <Select
            label={t('selectlanguage')}
            dropdownId="language-type-select"
            fullWidth
            value={language}
            options={languages}
            onChange={changeLanguage}
          />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
