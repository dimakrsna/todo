import memoizeOne from 'memoize-one';
import isDeepEqual from 'lodash.isequal';

const tasksSelector = (tasks) => tasks;
export const mTasksSelector = memoizeOne(tasksSelector, isDeepEqual);

