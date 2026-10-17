/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Signin1Inputs */

const en_site_signin1 = /** @type {(inputs: Site_Signin1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Get started`)
};

const ja_site_signin1 = /** @type {(inputs: Site_Signin1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`始める`)
};

/**
* | output |
* | --- |
* | "Get started" |
*
* @param {Site_Signin1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_signin1 = /** @type {((inputs?: Site_Signin1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Signin1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_signin1(inputs)
	return en_site_signin1(inputs)
});
export { site_signin1 as "site.signIn" }