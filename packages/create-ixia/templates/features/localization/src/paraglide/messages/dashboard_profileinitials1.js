/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Profileinitials1Inputs */

const en_dashboard_profileinitials1 = /** @type {(inputs: Dashboard_Profileinitials1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`DU`)
};

const ja_dashboard_profileinitials1 = /** @type {(inputs: Dashboard_Profileinitials1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デ`)
};

/**
* | output |
* | --- |
* | "DU" |
*
* @param {Dashboard_Profileinitials1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_profileinitials1 = /** @type {((inputs?: Dashboard_Profileinitials1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Profileinitials1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_profileinitials1(inputs)
	return en_dashboard_profileinitials1(inputs)
});
export { dashboard_profileinitials1 as "dashboard.profileInitials" }