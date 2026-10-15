/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Highlights_Toolingtitle1Inputs */

const en_auth_layout_highlights_toolingtitle1 = /** @type {(inputs: Auth_Layout_Highlights_Toolingtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fast by default`)
};

const ja_auth_layout_highlights_toolingtitle1 = /** @type {(inputs: Auth_Layout_Highlights_Toolingtitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`高速な開発環境`)
};

/**
* | output |
* | --- |
* | "Fast by default" |
*
* @param {Auth_Layout_Highlights_Toolingtitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_toolingtitle1 = /** @type {((inputs?: Auth_Layout_Highlights_Toolingtitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Toolingtitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_highlights_toolingtitle1(inputs)
	return en_auth_layout_highlights_toolingtitle1(inputs)
});
export { auth_layout_highlights_toolingtitle1 as "auth.layout.highlights.toolingTitle" }