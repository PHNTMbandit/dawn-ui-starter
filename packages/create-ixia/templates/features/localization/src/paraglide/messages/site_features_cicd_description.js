/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Features_Cicd_DescriptionInputs */

const en_site_features_cicd_description = /** @type {(inputs: Site_Features_Cicd_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A GitHub Actions test workflow and Vite+ Git hooks run checks before every commit, push, and pull request.`)
};

const ja_site_features_cicd_description = /** @type {(inputs: Site_Features_Cicd_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Actions のテストワークフローと Vite+ の Git フックが、コミット・プッシュ・プルリクエストのたびにチェックを実行します。`)
};

/**
* | output |
* | --- |
* | "A GitHub Actions test workflow and Vite+ Git hooks run checks before every commit, push, and pull request." |
*
* @param {Site_Features_Cicd_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_features_cicd_description = /** @type {((inputs?: Site_Features_Cicd_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Features_Cicd_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_features_cicd_description(inputs)
	return en_site_features_cicd_description(inputs)
});
export { site_features_cicd_description as "site.features.cicd.description" }