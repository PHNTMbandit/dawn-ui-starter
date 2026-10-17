/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_NavigationInputs */

const en_dashboard_navigation = /** @type {(inputs: Dashboard_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Navigation`)
};

const ja_dashboard_navigation = /** @type {(inputs: Dashboard_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ナビゲーション`)
};

/**
* | output |
* | --- |
* | "Navigation" |
*
* @param {Dashboard_NavigationInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_navigation = /** @type {((inputs?: Dashboard_NavigationInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_NavigationInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_navigation(inputs)
	return en_dashboard_navigation(inputs)
});
export { dashboard_navigation as "dashboard.navigation" }