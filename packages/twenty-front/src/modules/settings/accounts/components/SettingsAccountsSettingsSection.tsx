import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { H2Title, IconCalendarEvent, IconMailCog } from 'twenty-ui';

import { SettingsNavigationCard } from '@/settings/components/SettingsNavigationCard';
import { getSettingsPagePath } from '@/settings/utils/getSettingsPagePath';
import { SettingsPath } from '@/types/SettingsPath';
import { Section } from '@/ui/layout/section/components/Section';

const StyledCardsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const SettingsAccountsSettingsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Section>
      <H2Title title={t('calendar')} description={t('calendar_description')} />
      <StyledCardsContainer>
        <SettingsNavigationCard
          Icon={IconMailCog}
          title={t('emails')}
          onClick={() =>
            navigate(getSettingsPagePath(SettingsPath.AccountsEmails))
          }
        >
          {t('emails_description')}
        </SettingsNavigationCard>
        <SettingsNavigationCard
          Icon={IconCalendarEvent}
          title={t('settings')}
          onClick={() =>
            navigate(getSettingsPagePath(SettingsPath.AccountsCalendars))
          }
        >
          {t('calendar_description')}
        </SettingsNavigationCard>
      </StyledCardsContainer>
    </Section>
  );
};
