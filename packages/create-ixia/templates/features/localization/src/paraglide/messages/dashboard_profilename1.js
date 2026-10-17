/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Profilename1Inputs */

const en_dashboard_profilename1 = /** @type {(inputs: Dashboard_Profilename1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demo User`)
};

const ja_dashboard_profilename1 = /** @type {(inputs: Dashboard_Profilename1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デモユーザー`)
};

/**
* | output |
* | --- |
* | "Demo User" |
*
* @param {Dashboard_Profilename1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_profilename1 = /** @type {((inputs?: Dashboard_Profilename1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Profilename1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_profilename1(inputs)
	return en_dashboard_profilename1(inputs)
});
export { dashboard_profilename1 as "dashboard.profileName" }