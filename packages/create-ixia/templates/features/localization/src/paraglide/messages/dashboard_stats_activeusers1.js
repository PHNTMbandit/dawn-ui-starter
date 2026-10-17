/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stats_Activeusers1Inputs */

const en_dashboard_stats_activeusers1 = /** @type {(inputs: Dashboard_Stats_Activeusers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active users`)
};

const ja_dashboard_stats_activeusers1 = /** @type {(inputs: Dashboard_Stats_Activeusers1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクティブユーザー`)
};

/**
* | output |
* | --- |
* | "Active users" |
*
* @param {Dashboard_Stats_Activeusers1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_stats_activeusers1 = /** @type {((inputs?: Dashboard_Stats_Activeusers1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_Activeusers1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_stats_activeusers1(inputs)
	return en_dashboard_stats_activeusers1(inputs)
});
export { dashboard_stats_activeusers1 as "dashboard.stats.activeUsers" }