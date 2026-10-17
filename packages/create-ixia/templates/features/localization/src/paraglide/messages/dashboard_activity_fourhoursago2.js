/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_Fourhoursago2Inputs */

const en_dashboard_activity_fourhoursago2 = /** @type {(inputs: Dashboard_Activity_Fourhoursago2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`4h ago`)
};

const ja_dashboard_activity_fourhoursago2 = /** @type {(inputs: Dashboard_Activity_Fourhoursago2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`4時間前`)
};

/**
* | output |
* | --- |
* | "4h ago" |
*
* @param {Dashboard_Activity_Fourhoursago2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_fourhoursago2 = /** @type {((inputs?: Dashboard_Activity_Fourhoursago2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Fourhoursago2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_fourhoursago2(inputs)
	return en_dashboard_activity_fourhoursago2(inputs)
});
export { dashboard_activity_fourhoursago2 as "dashboard.activity.fourHoursAgo" }