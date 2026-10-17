/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Nav_DashboardInputs */

const en_dashboard_nav_dashboard = /** @type {(inputs: Dashboard_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const ja_dashboard_nav_dashboard = /** @type {(inputs: Dashboard_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Dashboard_Nav_DashboardInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_dashboard = /** @type {((inputs?: Dashboard_Nav_DashboardInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_DashboardInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_nav_dashboard(inputs)
	return en_dashboard_nav_dashboard(inputs)
});
export { dashboard_nav_dashboard as "dashboard.nav.dashboard" }