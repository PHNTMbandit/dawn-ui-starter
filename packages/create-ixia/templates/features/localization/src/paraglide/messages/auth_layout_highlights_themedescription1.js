/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Highlights_Themedescription1Inputs */

const en_auth_layout_highlights_themedescription1 = /** @type {(inputs: Auth_Layout_Highlights_Themedescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light and dark themes with system sync built in.`)
};

const ja_auth_layout_highlights_themedescription1 = /** @type {(inputs: Auth_Layout_Highlights_Themedescription1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム設定に連動するライト・ダークテーマ。`)
};

/**
* | output |
* | --- |
* | "Light and dark themes with system sync built in." |
*
* @param {Auth_Layout_Highlights_Themedescription1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_highlights_themedescription1 = /** @type {((inputs?: Auth_Layout_Highlights_Themedescription1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Highlights_Themedescription1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_highlights_themedescription1(inputs)
	return en_auth_layout_highlights_themedescription1(inputs)
});
export { auth_layout_highlights_themedescription1 as "auth.layout.highlights.themeDescription" }