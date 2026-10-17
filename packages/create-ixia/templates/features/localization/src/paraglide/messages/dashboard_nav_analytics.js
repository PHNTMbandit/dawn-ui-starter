/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Nav_AnalyticsInputs */

const en_dashboard_nav_analytics = /** @type {(inputs: Dashboard_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Analytics`)
};

const ja_dashboard_nav_analytics = /** @type {(inputs: Dashboard_Nav_AnalyticsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分析`)
};

/**
* | output |
* | --- |
* | "Analytics" |
*
* @param {Dashboard_Nav_AnalyticsInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_analytics = /** @type {((inputs?: Dashboard_Nav_AnalyticsInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_AnalyticsInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_nav_analytics(inputs)
	return en_dashboard_nav_analytics(inputs)
});
export { dashboard_nav_analytics as "dashboard.nav.analytics" }