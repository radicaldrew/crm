import { atom } from 'recoil';

import { RecordGqlOperationVariables } from '@/object-record/graphql/types/RecordGqlOperationVariables';

export const currentPhoneCallsQueryVariablesState =
  atom<RecordGqlOperationVariables | null>({
    default: null,
    key: 'currentPhoneCallsQueryVariablesState',
  });
