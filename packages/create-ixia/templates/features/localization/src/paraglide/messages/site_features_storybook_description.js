/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Storybook_DescriptionInputs */

const en_site_features_storybook_description = /** @type {(inputs: Site_Features_Storybook_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Develop and document components in isolation with Storybook, plus ready-made example stories.`)
};

const ja_site_features_storybook_description = /** @type {(inputs: Site_Features_Storybook_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storybook でコンポーネントを分離して開発・ドキュメント化でき、サンプルストーリーも用意済みです。`)
};

/**
* | output |
* | --- |
* | "Develop and document components in isolation with Storybook, plus ready-made example stories." |
*
* @param {Site_Features_Storybook_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_storybook_description = /** @type {((inputs?: Site_Features_Storybook_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Storybook_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_storybook_description(inputs)
	return en_site_features_storybook_description(inputs)
});
export { site_features_storybook_description as "site.features.storybook.description" }