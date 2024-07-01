import { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { useActivities } from '@/activities/hooks/useActivities';
import { FIND_MANY_TIMELINE_ACTIVITIES_ORDER_BY } from '@/activities/timeline/constants/FindManyTimelineActivitiesOrderBy';
import { PhoneCall } from '@/activities/types/PhoneCall';
import { RecordGqlOperationVariables } from '@/object-record/graphql/types/RecordGqlOperationVariables';
import { isDeeplyEqual } from '~/utils/isDeeplyEqual';

import { ActivityTargetableObject } from '../../types/ActivityTargetableEntity';
import { currentPhoneCallsQueryVariablesState } from '../states/currentPhoneCallsQueryVariablesState';

export const usePhoneCalls = (targetableObject: ActivityTargetableObject) => {
  const phoneCallQueryVariables = useMemo(
    () =>
      ({
        filter: {
          type: { eq: 'Phone Call' },
        },
        orderBy: FIND_MANY_TIMELINE_ACTIVITIES_ORDER_BY,
      }) as RecordGqlOperationVariables,
    [],
  );

  const { activities, loading } = useActivities({
    activitiesFilters: phoneCallQueryVariables.filter ?? {},
    activitiesOrderByVariables: phoneCallQueryVariables.orderBy ?? {},
    targetableObjects: [targetableObject],
  });

  const [currentPhoneCallsQueryVariables, setCurrentPhoneCallsQueryVariables] =
    useRecoilState(currentPhoneCallsQueryVariablesState);

  // TODO: fix useEffect, remove with better pattern
  useEffect(() => {
    if (
      !isDeeplyEqual(phoneCallQueryVariables, currentPhoneCallsQueryVariables)
    ) {
      setCurrentPhoneCallsQueryVariables(phoneCallQueryVariables);
    }
  }, [
    phoneCallQueryVariables,
    currentPhoneCallsQueryVariables,
    setCurrentPhoneCallsQueryVariables,
  ]);

  return {
    phonecalls: activities as PhoneCall[],
    loading,
  };
};
