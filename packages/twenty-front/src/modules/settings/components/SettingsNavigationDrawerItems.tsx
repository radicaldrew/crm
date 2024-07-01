import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import {
  IconApps,
  IconAt,
  IconCalendarEvent,
  IconCode,
  IconColorSwatch,
  IconCurrencyDollar,
  IconHierarchy2,
  IconMail,
  IconSettings,
  IconUserCircle,
  IconUsers,
} from 'twenty-ui';

import { billingState } from '@/client-config/states/billingState';
import { SettingsNavigationDrawerItem } from '@/settings/components/SettingsNavigationDrawerItem';
import { SettingsPath } from '@/types/SettingsPath';
import { NavigationDrawerItemGroup } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerItemGroup';
import { NavigationDrawerSection } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerSection';
import { NavigationDrawerSectionTitle } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerSectionTitle';

export const SettingsNavigationDrawerItems = () => {
  const { t } = useTranslation();
  const billing = useRecoilValue(billingState);

  return (
    <>
      <NavigationDrawerSection>
        <NavigationDrawerSectionTitle label={t('user')} />
        <SettingsNavigationDrawerItem
          label={t('profile')}
          path={SettingsPath.ProfilePage}
          Icon={IconUserCircle}
        />
        <SettingsNavigationDrawerItem
          label={t('appearance')}
          path={SettingsPath.Appearance}
          Icon={IconColorSwatch}
        />

        <NavigationDrawerItemGroup>
          <SettingsNavigationDrawerItem
            label={t('accounts')}
            path={SettingsPath.Accounts}
            Icon={IconAt}
          />
          <SettingsNavigationDrawerItem
            level={2}
            label={t('emails')}
            path={SettingsPath.AccountsEmails}
            Icon={IconMail}
            matchSubPages
          />
          <SettingsNavigationDrawerItem
            level={2}
            label={t('calendar')}
            path={SettingsPath.AccountsCalendars}
            Icon={IconCalendarEvent}
            matchSubPages
          />
        </NavigationDrawerItemGroup>
      </NavigationDrawerSection>
      <NavigationDrawerSection>
        <NavigationDrawerSectionTitle label={t('workspace')} />
        <SettingsNavigationDrawerItem
          label={t('general')}
          path={SettingsPath.Workspace}
          Icon={IconSettings}
        />
        <SettingsNavigationDrawerItem
          label={t('members')}
          path={SettingsPath.WorkspaceMembersPage}
          Icon={IconUsers}
        />
        {billing?.isBillingEnabled && (
          <SettingsNavigationDrawerItem
            label="Billing"
            path={SettingsPath.Billing}
            Icon={IconCurrencyDollar}
          />
        )}
        <SettingsNavigationDrawerItem
          label={t('data model')}
          path={SettingsPath.Objects}
          Icon={IconHierarchy2}
          matchSubPages
        />
        <SettingsNavigationDrawerItem
          label={t('developers')}
          path={SettingsPath.Developers}
          Icon={IconCode}
        />
        <SettingsNavigationDrawerItem
          label={t('integrations')}
          path={SettingsPath.Integrations}
          Icon={IconApps}
        />
      </NavigationDrawerSection>
    </>
  );
};
