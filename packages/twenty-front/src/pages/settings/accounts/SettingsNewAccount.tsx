import { useTranslation } from 'react-i18next';
import { IconSettings } from 'twenty-ui';

import { SettingsNewAccountSection } from '@/settings/accounts/components/SettingsNewAccountSection';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { SubMenuTopBarContainer } from '@/ui/layout/page/SubMenuTopBarContainer';
import { Breadcrumb } from '@/ui/navigation/bread-crumb/components/Breadcrumb';

export const SettingsNewAccount = () => {
  const { t } = useTranslation();
  return (
    <SubMenuTopBarContainer Icon={IconSettings} title={t('settings')}>
      <SettingsPageContainer>
        <Breadcrumb
          links={[
            { children: t('accounts'), href: '/settings/accounts' },
            { children: t('new') },
          ]}
        />
        <SettingsNewAccountSection />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
