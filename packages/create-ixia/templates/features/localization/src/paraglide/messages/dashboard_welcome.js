/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_WelcomeInputs */

const en_dashboard_welcome = /** @type {(inputs: Dashboard_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome back — here's what's happening today.`)
};

const ja_dashboard_welcome = /** @type {(inputs: Dashboard_WelcomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お帰りなさい。本日の状況はこちらです。`)
};

/**
* | output |
* | --- |
* | "Welcome back — here's what's happening today." |
*
* @param {Dashboard_WelcomeInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_welcome = /** @type {((inputs?: Dashboard_WelcomeInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_WelcomeInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_welcome(inputs)
	return en_dashboard_welcome(inputs)
});
export { dashboard_welcome as "dashboard.welcome" }