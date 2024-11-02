import { calcWindowVh } from './helpers/calc-vh.js';
import { useResizeDebounce } from './helpers/resize-debounce.js';
import { controlSubscriptionOptions } from './subscription-options.js';

calcWindowVh();
useResizeDebounce(calcWindowVh, 200);
controlSubscriptionOptions();
