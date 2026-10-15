/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Languages_EnInputs */

const en_common_languages_en = /** @type {(inputs: Common_Languages_EnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

const ja_common_languages_en = /** @type {(inputs: Common_Languages_EnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`英語`)
};

/**
* | output |
* | --- |
* | "English" |
*
* @param {Common_Languages_EnInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_languages_en = /** @type {((inputs?: Common_Languages_EnInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Languages_EnInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_common_languages_en(inputs)
	return en_common_languages_en(inputs)
});
export { common_languages_en as "common.languages.en" }