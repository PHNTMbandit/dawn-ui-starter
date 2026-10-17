/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Nav_TeamInputs */

const en_dashboard_nav_team = /** @type {(inputs: Dashboard_Nav_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const ja_dashboard_nav_team = /** @type {(inputs: Dashboard_Nav_TeamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チーム`)
};

/**
* | output |
* | --- |
* | "Team" |
*
* @param {Dashboard_Nav_TeamInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_nav_team = /** @type {((inputs?: Dashboard_Nav_TeamInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Nav_TeamInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_nav_team(inputs)
	return en_dashboard_nav_team(inputs)
});
export { dashboard_nav_team as "dashboard.nav.team" }