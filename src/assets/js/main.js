import { calcWindowVh } from './helpers/calc-vh.js';
import { useResizeDebounce } from './helpers/resize-debounce.js';
import { initLocale } from './i18n.js';
import { controlSubscriptionOptions } from './subscription-options.js';

initLocale();
calcWindowVh();
useResizeDebounce(calcWindowVh, 200);
controlSubscriptionOptions();
