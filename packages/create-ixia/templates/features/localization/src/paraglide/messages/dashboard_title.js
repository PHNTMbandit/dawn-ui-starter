/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_TitleInputs */

const en_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const ja_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Dashboard_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_title = /** @type {((inputs?: Dashboard_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_title(inputs)
	return en_dashboard_title(inputs)
});
export { dashboard_title as "dashboard.title" }