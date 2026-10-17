/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_TitleInputs */

const en_auth_layout_title = /** @type {(inputs: Auth_Layout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you need to ship your next product.`)
};

const ja_auth_layout_title = /** @type {(inputs: Auth_Layout_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のプロダクトを届けるために必要なものを、すべてここに。`)
};

/**
* | output |
* | --- |
* | "Everything you need to ship your next product." |
*
* @param {Auth_Layout_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_title = /** @type {((inputs?: Auth_Layout_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_title(inputs)
	return en_auth_layout_title(inputs)
});
export { auth_layout_title as "auth.layout.title" }