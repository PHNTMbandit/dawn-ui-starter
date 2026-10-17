/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Themes_LightInputs */

const en_common_themes_light = /** @type {(inputs: Common_Themes_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
};

const ja_common_themes_light = /** @type {(inputs: Common_Themes_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライト`)
};

/**
* | output |
* | --- |
* | "Light" |
*
* @param {Common_Themes_LightInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const common_themes_light = /** @type {((inputs?: Common_Themes_LightInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Themes_LightInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_common_themes_light(inputs)
	return en_common_themes_light(inputs)
});
export { common_themes_light as "common.themes.light" }