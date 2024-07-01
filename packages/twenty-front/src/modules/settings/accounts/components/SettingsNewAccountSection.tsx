import { useTranslation } from 'react-i18next';
import { H2Title } from 'twenty-ui';

import { SettingsAccountsListEmptyStateCard } from '@/settings/accounts/components/SettingsAccountsListEmptyStateCard';
import { Section } from '@/ui/layout/section/components/Section';

export const SettingsNewAccountSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <H2Title
        title={t('new_account')}
        description={t('new_account_description')}
      />
      <SettingsAccountsListEmptyStateCard label={t('sync_google')} />
    </Section>
  );
};
