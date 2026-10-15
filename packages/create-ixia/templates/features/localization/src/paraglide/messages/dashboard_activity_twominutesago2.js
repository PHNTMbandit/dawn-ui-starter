/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_Twominutesago2Inputs */

const en_dashboard_activity_twominutesago2 = /** @type {(inputs: Dashboard_Activity_Twominutesago2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2m ago`)
};

const ja_dashboard_activity_twominutesago2 = /** @type {(inputs: Dashboard_Activity_Twominutesago2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2分前`)
};

/**
* | output |
* | --- |
* | "2m ago" |
*
* @param {Dashboard_Activity_Twominutesago2Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_twominutesago2 = /** @type {((inputs?: Dashboard_Activity_Twominutesago2Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_Twominutesago2Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_twominutesago2(inputs)
	return en_dashboard_activity_twominutesago2(inputs)
});
export { dashboard_activity_twominutesago2 as "dashboard.activity.twoMinutesAgo" }