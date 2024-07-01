import { useRecoilValue } from 'recoil';

import { viewableActivityIdState } from '@/activities/states/viewableActivityIdState';

import { RightDrawerActivity } from '../RightDrawerActivity';

export const RightDrawerCreatePhoneCall = () => {
  const viewableActivityId = useRecoilValue(viewableActivityIdState);

  return (
    <>
      {viewableActivityId && (
        <RightDrawerActivity
          activityId={viewableActivityId}
          showComment={false}
          fillTitleFromBody={true}
        />
      )}
    </>
  );
};
