/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Themes_SystemInputs */

const en_common_themes_system = /** @type {(inputs: Common_Themes_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const ja_common_themes_system = /** @type {(inputs: Common_Themes_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Common_Themes_SystemInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_themes_system = /** @type {((inputs?: Common_Themes_SystemInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Themes_SystemInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_common_themes_system(inputs)
	return en_common_themes_system(inputs)
});
export { common_themes_system as "common.themes.system" }