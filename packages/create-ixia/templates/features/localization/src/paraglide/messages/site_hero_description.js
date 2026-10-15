/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Hero_DescriptionInputs */

const en_site_hero_description = /** @type {(inputs: Site_Hero_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authentication, theming, type-safe data, and internationalization are already wired up on TanStack Start — so you can skip the boilerplate and ship your product faster.`)
};

const ja_site_hero_description = /** @type {(inputs: Site_Hero_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証、テーマ設定、型安全なデータ連携、多言語対応を TanStack Start 上に構成済み。ボイラープレートを省いて、プロダクトの開発に集中できます。`)
};

/**
* | output |
* | --- |
* | "Authentication, theming, type-safe data, and internationalization are already wired up on TanStack Start — so you can skip the boilerplate and ship your prod..." |
*
* @param {Site_Hero_DescriptionInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const site_hero_description = /** @type {((inputs?: Site_Hero_DescriptionInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Hero_DescriptionInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_site_hero_description(inputs)
	return en_site_hero_description(inputs)
});
export { site_hero_description as "site.hero.description" }