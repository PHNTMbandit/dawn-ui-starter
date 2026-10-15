/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Docs_Githubactions1Inputs */

const en_site_docs_githubactions1 = /** @type {(inputs: Site_Docs_Githubactions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Actions`)
};

const ja_site_docs_githubactions1 = /** @type {(inputs: Site_Docs_Githubactions1Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub Actions`)
};

/**
* | output |
* | --- |
* | "GitHub Actions" |
*
* @param {Site_Docs_Githubactions1Inputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_docs_githubactions1 = /** @type {((inputs?: Site_Docs_Githubactions1Inputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Docs_Githubactions1Inputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_docs_githubactions1(inputs)
	return en_site_docs_githubactions1(inputs)
});
export { site_docs_githubactions1 as "site.docs.githubActions" }