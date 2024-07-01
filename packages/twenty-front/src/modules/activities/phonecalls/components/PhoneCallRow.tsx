import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconComment, OverflowingTextWithTooltip } from 'twenty-ui';

import { useOpenActivityRightDrawer } from '@/activities/hooks/useOpenActivityRightDrawer';
import { Activity } from '@/activities/types/Activity';
import { getActivitySummary } from '@/activities/utils/getActivitySummary';
import { beautifyExactDateTime } from '~/utils/date-utils';

const StyledContainer = styled.div`
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
  cursor: pointer;
  display: inline-flex;
  height: ${({ theme }) => theme.spacing(12)};
  min-width: calc(100% - ${({ theme }) => theme.spacing(8)});
  padding: 0 ${({ theme }) => theme.spacing(4)};

  &:last-child {
    border-bottom: 0;
  }
`;

const StyledCallBody = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 1px;
`;

const StyledCallTitle = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;

const StyledCommentIcon = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.light};
  display: flex;
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const PhoneCallRow = ({ phonecall }: { phonecall: Activity }) => {
  const theme = useTheme();
  const openActivityRightDrawer = useOpenActivityRightDrawer();
  const body = getActivitySummary(phonecall.body);

  return (
    <StyledContainer
      onClick={() => {
        openActivityRightDrawer(phonecall.id);
      }}
    >
      {beautifyExactDateTime(phonecall.createdAt)}
      <StyledCallTitle>{phonecall.title}</StyledCallTitle>
      <StyledCallBody>
        <OverflowingTextWithTooltip text={body} />
        {phonecall.comments && phonecall.comments.length > 0 && (
          <StyledCommentIcon>
            <IconComment size={theme.icon.size.md} />
          </StyledCommentIcon>
        )}
      </StyledCallBody>
    </StyledContainer>
  );
};
