/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Languageselector1Inputs */

const en_common_languageselector1 = /** @type {(inputs: Common_Languageselector1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Language`)
};

const ja_common_languageselector1 = /** @type {(inputs: Common_Languageselector1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`言語`)
};

/**
* | output |
* | --- |
* | "Language" |
*
* @param {Common_Languageselector1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_languageselector1 = /** @type {((inputs?: Common_Languageselector1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Languageselector1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_common_languageselector1(inputs)
	return en_common_languageselector1(inputs)
});
export { common_languageselector1 as "common.languageSelector" }