/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Stats_RevenueInputs */

const en_dashboard_stats_revenue = /** @type {(inputs: Dashboard_Stats_RevenueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revenue`)
};

const ja_dashboard_stats_revenue = /** @type {(inputs: Dashboard_Stats_RevenueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`売上`)
};

/**
* | output |
* | --- |
* | "Revenue" |
*
* @param {Dashboard_Stats_RevenueInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_stats_revenue = /** @type {((inputs?: Dashboard_Stats_RevenueInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Stats_RevenueInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_stats_revenue(inputs)
	return en_dashboard_stats_revenue(inputs)
});
export { dashboard_stats_revenue as "dashboard.stats.revenue" }