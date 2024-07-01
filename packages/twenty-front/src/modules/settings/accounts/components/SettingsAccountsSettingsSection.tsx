import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { H2Title, IconCalendarEvent, IconMailCog } from 'twenty-ui';

import { SettingsNavigationCard } from '@/settings/components/SettingsNavigationCard';
import { getSettingsPagePath } from '@/settings/utils/getSettingsPagePath';
import { SettingsPath } from '@/types/SettingsPath';
import { Section } from '@/ui/layout/section/components/Section';
import { UndecoratedLink } from '@/ui/navigation/link/components/UndecoratedLink';

const StyledCardsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const SettingsAccountsSettingsSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <H2Title
        title={t('settings')}
        description="Configure your emails and calendar settings."
      />
      <StyledCardsContainer>
        <UndecoratedLink to={getSettingsPagePath(SettingsPath.AccountsEmails)}>
          <SettingsNavigationCard Icon={IconMailCog} title={t('emails')}>
            Set email visibility, manage your blocklist and more.
          </SettingsNavigationCard>
        </UndecoratedLink>
        <UndecoratedLink
          to={getSettingsPagePath(SettingsPath.AccountsCalendars)}
        >
          <SettingsNavigationCard Icon={IconCalendarEvent} title=={t('calendar')}>
            Configure and customize your calendar preferences.
          </SettingsNavigationCard>
        </UndecoratedLink>
      </StyledCardsContainer>
    </Section>
  );
};