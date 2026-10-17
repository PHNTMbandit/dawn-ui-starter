/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_AlexInputs */

const en_dashboard_activity_alex = /** @type {(inputs: Dashboard_Activity_AlexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`signed in from a new device`)
};

const ja_dashboard_activity_alex = /** @type {(inputs: Dashboard_Activity_AlexInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいデバイスからサインインしました`)
};

/**
* | output |
* | --- |
* | "signed in from a new device" |
*
* @param {Dashboard_Activity_AlexInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_alex = /** @type {((inputs?: Dashboard_Activity_AlexInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_AlexInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_alex(inputs)
	return en_dashboard_activity_alex(inputs)
});
export { dashboard_activity_alex as "dashboard.activity.alex" }