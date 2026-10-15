/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Toolchain_DescriptionInputs */

const en_site_features_toolchain_description = /** @type {(inputs: Site_Features_Toolchain_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vite+ unifies dev, build, test, lint, and format behind a single CLI.`)
};

const ja_site_features_toolchain_description = /** @type {(inputs: Site_Features_Toolchain_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発、ビルド、テスト、Lint、フォーマットを Vite+ の CLI に統合しています。`)
};

/**
* | output |
* | --- |
* | "Vite+ unifies dev, build, test, lint, and format behind a single CLI." |
*
* @param {Site_Features_Toolchain_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_toolchain_description = /** @type {((inputs?: Site_Features_Toolchain_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Toolchain_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_toolchain_description(inputs)
	return en_site_features_toolchain_description(inputs)
});
export { site_features_toolchain_description as "site.features.toolchain.description" }