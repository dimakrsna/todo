import memoizeOne from 'memoize-one';
import isDeepEqual from 'lodash.isequal';

const editDataSelector = (data) => data;
export const mTasksSelector = memoizeOne(editDataSelector, isDeepEqual);

