/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Highlights_I18ntitle1Inputs */

const en_auth_layout_highlights_i18ntitle1 = /** @type {(inputs: Auth_Layout_Highlights_I18ntitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`i18n ready`)
};

const ja_auth_layout_highlights_i18ntitle1 = /** @type {(inputs: Auth_Layout_Highlights_I18ntitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多言語対応`)
};

/**
* | output |
* | --- |
* | "i18n ready" |
*
* @param {Auth_Layout_Highlights_I18ntitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_i18ntitle1 = /** @type {((inputs?: Auth_Layout_Highlights_I18ntitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_I18ntitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_highlights_i18ntitle1(inputs)
	return en_auth_layout_highlights_i18ntitle1(inputs)
});
export { auth_layout_highlights_i18ntitle1 as "auth.layout.highlights.i18nTitle" }