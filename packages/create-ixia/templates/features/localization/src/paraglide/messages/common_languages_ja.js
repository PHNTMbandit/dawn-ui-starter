/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Languages_JaInputs */

const en_common_languages_ja = /** @type {(inputs: Common_Languages_JaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Japanese`)
};

const ja_common_languages_ja = /** @type {(inputs: Common_Languages_JaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日本語`)
};

/**
* | output |
* | --- |
* | "Japanese" |
*
* @param {Common_Languages_JaInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_languages_ja = /** @type {((inputs?: Common_Languages_JaInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Languages_JaInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_common_languages_ja(inputs)
	return en_common_languages_ja(inputs)
});
export { common_languages_ja as "common.languages.ja" }