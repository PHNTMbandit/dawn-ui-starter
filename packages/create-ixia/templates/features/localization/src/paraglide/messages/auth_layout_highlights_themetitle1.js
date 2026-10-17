/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Highlights_Themetitle1Inputs */

const en_auth_layout_highlights_themetitle1 = /** @type {(inputs: Auth_Layout_Highlights_Themetitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Themeable UI`)
};

const ja_auth_layout_highlights_themetitle1 = /** @type {(inputs: Auth_Layout_Highlights_Themetitle1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマ対応 UI`)
};

/**
* | output |
* | --- |
* | "Themeable UI" |
*
* @param {Auth_Layout_Highlights_Themetitle1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_themetitle1 = /** @type {((inputs?: Auth_Layout_Highlights_Themetitle1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Themetitle1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_highlights_themetitle1(inputs)
	return en_auth_layout_highlights_themetitle1(inputs)
});
export { auth_layout_highlights_themetitle1 as "auth.layout.highlights.themeTitle" }