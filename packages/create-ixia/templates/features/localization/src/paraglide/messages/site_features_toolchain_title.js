/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Toolchain_TitleInputs */

const en_site_features_toolchain_title = /** @type {(inputs: Site_Features_Toolchain_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vite+ toolchain`)
};

const ja_site_features_toolchain_title = /** @type {(inputs: Site_Features_Toolchain_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vite+ ツールチェーン`)
};

/**
* | output |
* | --- |
* | "Vite+ toolchain" |
*
* @param {Site_Features_Toolchain_TitleInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_toolchain_title = /** @type {((inputs?: Site_Features_Toolchain_TitleInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Toolchain_TitleInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_toolchain_title(inputs)
	return en_site_features_toolchain_title(inputs)
});
export { site_features_toolchain_title as "site.features.toolchain.title" }