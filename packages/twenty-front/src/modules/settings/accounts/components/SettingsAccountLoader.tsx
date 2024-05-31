import { useTranslation } from 'react-i18next';

import { Loader } from '@/ui/feedback/loader/components/Loader';
import AnimatedPlaceholder from '@/ui/layout/animated-placeholder/components/AnimatedPlaceholder';
import {
  AnimatedPlaceholderEmptyContainer,
  AnimatedPlaceholderEmptyTextContainer,
  AnimatedPlaceholderEmptyTitle,
} from '@/ui/layout/animated-placeholder/components/EmptyPlaceholderStyled';

export const SettingsAccountLoader = () => {
  const { t } = useTranslation();
  return (
    <AnimatedPlaceholderEmptyContainer>
      <AnimatedPlaceholder type="loadingAccounts" />
      <AnimatedPlaceholderEmptyTextContainer>
        <AnimatedPlaceholderEmptyTitle>
          {t('loading_accounts')}
        </AnimatedPlaceholderEmptyTitle>
        <Loader />
      </AnimatedPlaceholderEmptyTextContainer>
    </AnimatedPlaceholderEmptyContainer>
  );
};
