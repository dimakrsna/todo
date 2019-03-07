import memoizeOne from 'memoize-one';
import isDeepEqual from 'lodash.isequal';

const dataSelector = (data) => data;
export default memoizeOne(dataSelector, isDeepEqual);

