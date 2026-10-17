/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Activity_SamInputs */

const en_dashboard_activity_sam = /** @type {(inputs: Dashboard_Activity_SamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`invited 3 new team members`)
};

const ja_dashboard_activity_sam = /** @type {(inputs: Dashboard_Activity_SamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チームメンバーを3人招待しました`)
};

/**
* | output |
* | --- |
* | "invited 3 new team members" |
*
* @param {Dashboard_Activity_SamInputs} inputs
* @param {{ locale?: "en" | "ja" }} options
* @returns {LocalizedString}
*/
const dashboard_activity_sam = /** @type {((inputs?: Dashboard_Activity_SamInputs, options?: { locale?: "en" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Activity_SamInputs, { locale?: "en" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "ja") return ja_dashboard_activity_sam(inputs)
	return en_dashboard_activity_sam(inputs)
});
export { dashboard_activity_sam as "dashboard.activity.sam" }