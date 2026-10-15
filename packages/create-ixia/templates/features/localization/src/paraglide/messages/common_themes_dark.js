/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Themes_DarkInputs */

const en_common_themes_dark = /** @type {(inputs: Common_Themes_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
};

const ja_common_themes_dark = /** @type {(inputs: Common_Themes_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダーク`)
};

/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Common_Themes_DarkInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_themes_dark = /** @type {((inputs?: Common_Themes_DarkInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Themes_DarkInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_common_themes_dark(inputs)
	return en_common_themes_dark(inputs)
});
export { common_themes_dark as "common.themes.dark" }