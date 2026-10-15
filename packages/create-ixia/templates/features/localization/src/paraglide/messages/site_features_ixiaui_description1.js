/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Ixiaui_Description1Inputs */

const en_site_features_ixiaui_description1 = /** @type {(inputs: Site_Features_Ixiaui_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Provides accessible, themeable components with light and dark modes.`)
};

const ja_site_features_ixiaui_description1 = /** @type {(inputs: Site_Features_Ixiaui_Description1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクセシブルでテーマ対応のコンポーネントを、ライト・ダークテーマで利用できます。`)
};

/**
* | output |
* | --- |
* | "Provides accessible, themeable components with light and dark modes." |
*
* @param {Site_Features_Ixiaui_Description1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_ixiaui_description1 = /** @type {((inputs?: Site_Features_Ixiaui_Description1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Ixiaui_Description1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_ixiaui_description1(inputs)
	return en_site_features_ixiaui_description1(inputs)
});
export { site_features_ixiaui_description1 as "site.features.ixiaUi.description" }