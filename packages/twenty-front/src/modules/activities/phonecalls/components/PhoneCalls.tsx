import styled from '@emotion/styled';

import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import AnimatedPlaceholder from '@/ui/layout/animated-placeholder/components/AnimatedPlaceholder';
import {
  AnimatedPlaceholderEmptyContainer,
  AnimatedPlaceholderEmptySubTitle,
  AnimatedPlaceholderEmptyTextContainer,
  AnimatedPlaceholderEmptyTitle,
} from '@/ui/layout/animated-placeholder/components/EmptyPlaceholderStyled';

import { usePhoneCalls } from '../hooks/usePhoneCalls';

import { PhoneCallRow } from './PhoneCallRow';

const StyledPhoneCallsContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 24px;
`;

const StyledTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  place-items: center;
  width: 100%;
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const StyledCount = styled.span`
  color: ${({ theme }) => theme.font.color.light};
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const StyledTaskRows = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.light};
  border-radius: ${({ theme }) => theme.border.radius.md};
  width: 100%;
`;

const title = 'All';

export const PhoneCalls = ({
  targetableObject,
}: {
  targetableObject: ActivityTargetableObject;
}) => {
  const { phonecalls } = usePhoneCalls(targetableObject);
  /**
  const openCreateActivity = useOpenCreateActivityDrawer();
  <Button
          Icon={IconPlus}
          title="New Phone Call"
          variant="secondary"
          onClick={() =>
            openCreateActivity({
              type: 'PhoneCall',
              targetableObjects: [targetableObject],
            })
          }
        />
  **/

  if (phonecalls?.length === 0) {
    return (
      <AnimatedPlaceholderEmptyContainer>
        <AnimatedPlaceholder type="noNote" />
        <AnimatedPlaceholderEmptyTextContainer>
          <AnimatedPlaceholderEmptyTitle>
            No Phone Calls
          </AnimatedPlaceholderEmptyTitle>
          <AnimatedPlaceholderEmptySubTitle>
            There are no associated phone calls with this record.
          </AnimatedPlaceholderEmptySubTitle>
        </AnimatedPlaceholderEmptyTextContainer>
      </AnimatedPlaceholderEmptyContainer>
    );
  }
  return (
    <StyledPhoneCallsContainer>
      <StyledTitleBar>
        {title && (
          <StyledTitle>
            {title} <StyledCount>{phonecalls.length}</StyledCount>
          </StyledTitle>
        )}
      </StyledTitleBar>
      <StyledTaskRows>
        {phonecalls.map((phonecall: any) => (
          <PhoneCallRow key={phonecall.id} phonecall={phonecall} />
        ))}
      </StyledTaskRows>
    </StyledPhoneCallsContainer>
  );
};
