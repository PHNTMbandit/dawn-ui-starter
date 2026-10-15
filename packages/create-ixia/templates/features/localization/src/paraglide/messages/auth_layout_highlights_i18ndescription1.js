/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Highlights_I18ndescription1Inputs */

const en_auth_layout_highlights_i18ndescription1 = /** @type {(inputs: Auth_Layout_Highlights_I18ndescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type-safe, compiled messages for every locale.`)
};

const ja_auth_layout_highlights_i18ndescription1 = /** @type {(inputs: Auth_Layout_Highlights_I18ndescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`型安全なメッセージをコンパイルして利用できます。`)
};

/**
* | output |
* | --- |
* | "Type-safe, compiled messages for every locale." |
*
* @param {Auth_Layout_Highlights_I18ndescription1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_i18ndescription1 = /** @type {((inputs?: Auth_Layout_Highlights_I18ndescription1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_I18ndescription1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_highlights_i18ndescription1(inputs)
	return en_auth_layout_highlights_i18ndescription1(inputs)
});
export { auth_layout_highlights_i18ndescription1 as "auth.layout.highlights.i18nDescription" }