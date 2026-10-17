/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_I18n_DescriptionInputs */

const en_site_features_i18n_description = /** @type {(inputs: Site_Features_I18n_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paraglide compiles type-safe messages, pre-configured for English and Japanese.`)
};

const ja_site_features_i18n_description = /** @type {(inputs: Site_Features_I18n_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paraglide で型安全なメッセージをコンパイル。英語と日本語を設定済みです。`)
};

/**
* | output |
* | --- |
* | "Paraglide compiles type-safe messages, pre-configured for English and Japanese." |
*
* @param {Site_Features_I18n_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_i18n_description = /** @type {((inputs?: Site_Features_I18n_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_I18n_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_i18n_description(inputs)
	return en_site_features_i18n_description(inputs)
});
export { site_features_i18n_description as "site.features.i18n.description" }