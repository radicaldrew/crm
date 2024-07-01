import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IconCheckbox, IconSearch, IconSettings } from 'twenty-ui';

import { CurrentUserDueTaskCountEffect } from '@/activities/tasks/components/CurrentUserDueTaskCountEffect';
import { currentUserDueTaskCountState } from '@/activities/tasks/states/currentUserTaskCountState';
import { useCommandMenu } from '@/command-menu/hooks/useCommandMenu';
import { Favorites } from '@/favorites/components/Favorites';
import { ObjectMetadataNavItems } from '@/object-metadata/components/ObjectMetadataNavItems';
import { NavigationDrawerItem } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerItem';
import { NavigationDrawerSection } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerSection';
import { navigationMemorizedUrlState } from '@/ui/navigation/states/navigationMemorizedUrlState';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';

import { useIsTasksPage } from '../hooks/useIsTasksPage';

export const MainNavigationDrawerItems = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { toggleCommandMenu } = useCommandMenu();
  const isTasksPage = useIsTasksPage();
  const currentUserDueTaskCount = useRecoilValue(currentUserDueTaskCountState);
  const location = useLocation();
  const setNavigationMemorizedUrl = useSetRecoilState(
    navigationMemorizedUrlState,
  );

  return (
    <>
      {!isMobile && (
        <NavigationDrawerSection>
          <NavigationDrawerItem
            label={t('search')}
            Icon={IconSearch}
            onClick={toggleCommandMenu}
            keyboard={['⌘', 'K']}
          />
          <NavigationDrawerItem
            label={t('settings')}
            to={'/settings/profile'}
            onClick={() => {
              setNavigationMemorizedUrl(location.pathname + location.search);
            }}
            Icon={IconSettings}
          />
          <CurrentUserDueTaskCountEffect />
          <NavigationDrawerItem
            label={t('tasks')}
            to="/tasks"
            active={isTasksPage}
            Icon={IconCheckbox}
            count={currentUserDueTaskCount}
          />
        </NavigationDrawerSection>
      )}

      <Favorites />

      <ObjectMetadataNavItems isRemote={false} />
      <ObjectMetadataNavItems isRemote={true} />
      <NavigationDrawerSection>
        <NavigationDrawerSectionTitle label={t('workspace')} />
        <ObjectMetadataNavItems />
      </NavigationDrawerSection>
    </>
  );
};
