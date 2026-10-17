/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Highlights_Authtitle1Inputs */

const en_auth_layout_highlights_authtitle1 = /** @type {(inputs: Auth_Layout_Highlights_Authtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Secure auth`)
};

const ja_auth_layout_highlights_authtitle1 = /** @type {(inputs: Auth_Layout_Highlights_Authtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全な認証`)
};

/**
* | output |
* | --- |
* | "Secure auth" |
*
* @param {Auth_Layout_Highlights_Authtitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_authtitle1 = /** @type {((inputs?: Auth_Layout_Highlights_Authtitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Authtitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_highlights_authtitle1(inputs)
	return en_auth_layout_highlights_authtitle1(inputs)
});
export { auth_layout_highlights_authtitle1 as "auth.layout.highlights.authTitle" }