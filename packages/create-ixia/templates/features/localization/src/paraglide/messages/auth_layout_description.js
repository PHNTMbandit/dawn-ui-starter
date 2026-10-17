/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_DescriptionInputs */

const en_auth_layout_description = /** @type {(inputs: Auth_Layout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication, theming, and internationalization come preconfigured so you can focus on the features that matter.`)
};

const ja_auth_layout_description = /** @type {(inputs: Auth_Layout_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証、テーマ設定、多言語対応を構成済み。大切な機能の開発に集中できます。`)
};

/**
* | output |
* | --- |
* | "Authentication, theming, and internationalization come preconfigured so you can focus on the features that matter." |
*
* @param {Auth_Layout_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const auth_layout_description = /** @type {((inputs?: Auth_Layout_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_auth_layout_description(inputs)
	return en_auth_layout_description(inputs)
});
export { auth_layout_description as "auth.layout.description" }