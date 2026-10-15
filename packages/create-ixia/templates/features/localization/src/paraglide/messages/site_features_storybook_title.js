/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Storybook_TitleInputs */

const en_site_features_storybook_title = /** @type {(inputs: Site_Features_Storybook_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storybook ready`)
};

const ja_site_features_storybook_title = /** @type {(inputs: Site_Features_Storybook_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storybook 対応`)
};

/**
* | output |
* | --- |
* | "Storybook ready" |
*
* @param {Site_Features_Storybook_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_storybook_title = /** @type {((inputs?: Site_Features_Storybook_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Storybook_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_storybook_title(inputs)
	return en_site_features_storybook_title(inputs)
});
export { site_features_storybook_title as "site.features.storybook.title" }