/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Nav_SettingsInputs */

const en_dashboard_nav_settings = /** @type {(inputs: Dashboard_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings`)
};

const ja_dashboard_nav_settings = /** @type {(inputs: Dashboard_Nav_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Dashboard_Nav_SettingsInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_settings = /** @type {((inputs?: Dashboard_Nav_SettingsInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_SettingsInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_nav_settings(inputs)
	return en_dashboard_nav_settings(inputs)
});
export { dashboard_nav_settings as "dashboard.nav.settings" }