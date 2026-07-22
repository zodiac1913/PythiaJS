//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/**
 * Replacement for Javascript Class (with prototype functions) utilities.js
 * This is the modular version.  utilities.js is the monolithic version and is not recommended for use.
 * Public Domain
 * Licensed Copyright Law of the United States of America, Section 105 (https://www.copyright.gov/title17/92chap1.html#105)
 * Per hoc, facies, scietis quod ille miserit me ut facerem universa quae cernitis et factis: Non est mecum!
 * Published by: Dominic Roche of OIT/IUSG/DASM on 03/13/2024
 * @class ccReporting
 */

"use strict";
import ccModal from './ccComponents/ccModal.js';
import ccDOMUtil from './ccDOMUtil.js';
//Export Values
// for all DOM
//      import { addJsScript, alterUnEncapse, apiPost, apiPostDirect, append, classAdd, css, elementHide, elementRemove,elementShow, getEle, getEles, getVal, isBool, isCheck, isElement, makeAlert, makeAlertJML,  off, on, placeAfter, placeBefore, unbind} from '/Scripts/Views/Shared/ccComponents/ccUtilities.js';
//
// for all code
//      import {asAlphaNumeric, asBool, alterUnEncapse,apiPost, apiPostDirect, asElementId, asFieldNotationString, asHtml5DateFormat, asInt, asPascalCase, asPropertyNotation, asString, camelToTitle, checkSetDefault, chunkString, clip, disableScroll, enableScroll, endsWith, errorLog, fillFrom, findAllIndexesOf, formClear, formEnabled, formFill, formToJson, functionCall, getIndicesOf, getType, guid, htmlDecode, htmlEncode, htmlEncodedStrip, htmlToJML, imageFix, isBool, isEmpty, isHtml, isJson, isNode, isNotEmpty, isNumeric, jmlToHtml, logError, objectKeysToCamelCase, placeAfter, placeBefore, repeatGuidFunc, reportErrorObject, startsWith, stringifyNumber, toTitle, trim, modalBox, makeICS, setICSFunc, adjustPopupToKey, functionCallAsync, get, openUrlClean, set, setWhereWasI, simpleCall, simpleCallQuiet, takeMeBack, timeOfDay, textBetween, toString, whereWasI, commsResponseStatusHandle, delay, apiPostDirect} from '/Scripts/Views/Shared/ccComponents/ccUtilities.js';
//
//
//      --Export Properties: whereWasI
//      --DOM related: append, classAdd, css, elementHide, elementRemove,
//              elementShow, getEle, getEles, getVal, isCheck, isElement, makeAlert, makeAlertJML, off, on,
//              placeAfter, placeBefore, unbind
//      --Code related: asAlphaNumeric, asBool, asElementId, asFieldNotationString,
//                      asHtml5DateFormat, asInt, asPascalCase, asPropertyNotation, asString,
//                      camelToTitle, checkSetDefault, chunkString, disableScroll, enableScroll,
//                      endsWith, errorLog, fillFrom, formClear, formEnabled, formFill,
//                      formToJson, functionCall, getIndicesOf, getType, guid, simpleCall, simpleCallQuiet,
//                      htmlDecode, htmlEncode, htmlEncodedStrip, htmlToJML, imageFix, isBool
//                      isEmpty, isHtml, isJson, isNode, isNotEmpty, isNumeric, jmlToHtml,
//                      logError, objectKeysToCamelCase, repeatGuidFunc, replaceLast, reportErrorObject,
//                      startsWith, stringifyNumber, textBetween, toTitle, trim, unobtrusiveWait, unobtrusiveWaitOff
//      --External Functions: modalBox
//      --Create Files Functions: makeICS, setICSFunc
//      --Page Functions: adjustPopupToKey, functionCallAsync, get, openUrlClean, set,
//                          setWhereWasI, takeMeBack, timeOfDay, toString, whereWasI
//      --Comms Function: commsResponseStatusHandle,dispatch, delay, apiPostDirect

// Not for Export
//      --Support Functions: classAddForMulti, classRemoveForMulti, guidS4, repeatGuidFunc, replaceLast


//------------------------------------------------------Export Properties
const controller = new AbortController();
export let whereWasI = null;
export let quietComms = false;
export let trackId =0;
export const signal = controller.signal;
//------------------------------------------------------Export Functions
//                  ~~~~~~~~~~~~~~~~~~~~ DOM Functions ~~~~~~~~~~~~~~~~~~~~~                   \\


/**
 * Adds a CSS file to the page.
 *
 * @export
 * @param {string} cssId - The ID to assign to the <link> element.
 * @param {string} url - The URL of the CSS file.
 * @param {object} [opts] - Optional: integrity, crossorigin, etc.
 * @memberof ccUtilities
 * @example
 * addCSSLink('mainStyles', '/css/main.css');
 */
export function addCSSLink(cssId, url, opts) {
    if (!document.getElementById(cssId)) {
        let head = document.getElementsByTagName("head")[0];
        if (!head) {
            console.error("addCSSLink: <head> element not found.");
            return;
        }
        let link = document.createElement("link");
        link.id = cssId;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        link.media = "all";
        // Optional: support integrity and crossorigin for CDN security
        if (opts && typeof opts === "object") {
            if (opts.integrity) link.integrity = opts.integrity;
            if (opts.crossorigin) link.crossOrigin = opts.crossorigin;
        }
        head.appendChild(link);
    }
}
/**
 * Adds a JavaScript file to the page.
 *
 * @export
 * @param {string} jsId - The ID to assign to the <script> element.
 * @param {string} url - The URL of the JavaScript file.
 * @param {string} [type='text/javascript'] - The type attribute for the script.
 * @param {boolean} [isAsync=false] - Whether to load the script asynchronously.
 * @param {object} [opts] - Optional: integrity, crossorigin, onload callback.
 * @memberof ccUtilities
 * @example
 * addJsScript('mainScript', '/js/main.js');
 */
export function addJsScript(jsId, url, type = "text/javascript", isAsync = false, opts) {
    if (!document.getElementById(jsId)) {
        let head = document.getElementsByTagName("head")[0];
        if (!head) {
            let htmlTag = document.getElementsByTagName("html")[0];
            if (!htmlTag) {
                console.error("addJsScript: <html> element not found.");
                return;
            }
            head = document.createElement("head");
            htmlTag.insertBefore(head, htmlTag.firstChild);
        }
        let script = document.createElement("script");
        script.id = jsId;
        script.type = type;
        script.src = url;
        if (isAsync) script.async = true;
        // Optional: support integrity, crossorigin, and onload callback
        if (opts && typeof opts === "object") {
            if (opts.integrity) script.integrity = opts.integrity;
            if (opts.crossorigin) script.crossOrigin = opts.crossorigin;
            if (typeof opts.onload === "function") script.onload = opts.onload;
        }
        head.appendChild(script);
    }
}
/**
 * Appends HTML or an element to the target element as the last child.
 *
 * @export
 * @param {HTMLElement} element - The target element to append to.
 * @param {string|HTMLElement} htmlOrElement - HTML string or HTMLElement to add.
 * @memberof ccUtilities
 * @example
 * append(document.body, "<div>Hi</div>");
 * append(someDiv, anotherDivElement);
 */
export function append(element, htmlOrElement) {
    if (typeof htmlOrElement === 'string' || htmlOrElement instanceof String) {
        element.insertAdjacentHTML("beforeend", htmlOrElement);
    } else if (typeof htmlOrElement === 'object' && htmlOrElement instanceof HTMLElement) {
        element.insertAdjacentElement("beforeend", htmlOrElement);
    }
}
/**
 * Hides element(s) by adding Bootstrap's `d-none` class and, if applicable, `collapse`.
 * Supports single elements, NodeLists, and arrays.
 *
 * @export
 * @param {HTMLElement|NodeList|Array} eles - Element(s) to hide.
 * @returns {HTMLElement|Array} The element(s) for chaining.
 * @memberof ccUtilities
 * @example
 * elementHide(someDiv);
 * elementHide(document.querySelectorAll(".item"));
 */
export function elementHide(eles) {
    if (eles === undefined || eles === null) return eles;
    if (NodeList.prototype.isPrototypeOf(eles)) eles = Array.from(eles);
    if (!Array.isArray(eles)) eles = [eles];
    for (const ele of eles) {
        if (!ele) continue;
        ele.style.display = "none";
        ele.classList.add("d-none");
        if (ele.classList.contains("panel-collapse")) {
            ele.classList.add("collapse");
        }
    }
    return eles;
}
/**
 * Shows element(s) by removing Bootstrap's `d-none` and `collapse` classes and resetting display.
 * Supports single elements, NodeLists, and arrays.
 *
 * @export
 * @param {HTMLElement|NodeList|Array} eles - Element(s) to show.
 * @returns {HTMLElement|Array} The element(s) for chaining.
 * @memberof ccUtilities
 * @example
 * elementShow(someDiv);
 * elementShow(document.querySelectorAll(".item"));
 */
export function elementShow(eles) {
    if (eles === undefined || eles === null) return eles;
    if (NodeList.prototype.isPrototypeOf(eles)) eles = Array.from(eles);
    if (!Array.isArray(eles)) eles = [eles];
    for (const ele of eles) {
        if (!ele) continue;
        ele.style.display = "";
        ele.classList.remove("d-none", "collapse");
    }
    return eles;
}
/**
 * Gets the first DOM element matching a query selector.
 * - If only `src` is provided and `q` is undefined/null, treats `src` as the query and searches from `document`.
 * - If no match is found, returns a placeholder <div id="ElementNotFound">.
 *
 * @export
 * @param {Element|string} [src] - Source element to search from, or query string if `q` is not provided.
 * @param {string} [q] - Query selector string.
 * @returns {Element} The first matching DOM element, or a placeholder if not found.
 * @memberof ccUtilities
 * @example
 * getEle(document, ".my-class");
 * getEle("#myId");
 */
export function getEle(src, q) {
    if (!q) {
        if (!src) return document.body;
        q = src;
        src = document;
    }
    const result = getEles(src, q)[0];
    if (result === undefined) {
        // Return a placeholder element if not found
        const notFound = document.createElement("div");
        notFound.id = "ElementNotFound";
        return notFound;
    }
    return result;
}
/**
 * Gets all DOM elements matching a query selector.
 * - If only `src` is provided and `q` is undefined/null, treats `src` as the query and searches from `document`.
 * - Supports the pseudo-selector `:input` (expands to input, select, checkbox, textarea).
 * - Returns a NodeList of matching elements.
 *
 * @export
 * @param {Element|string} [src] - Source element to search from, or query string if `q` is not provided.
 * @param {string} [q] - Query selector string.
 * @returns {NodeList|Element} NodeList of matching elements, or document.body if no query is provided.
 * @memberof ccUtilities
 * @example
 * getEles(document, ".my-class");
 * getEles("#myId");
 * getEles(document, ":input");
 */
export function getEles(src, q) {
    if (!q) {
        if (!src) return document.body;
        q = src;
        src = document;
    }
    if (q === undefined) return document;
    // Expand :input pseudo-selector to standard input types
    q = q.replaceAll(":input", "input, select, checkbox, textarea");
    return src.querySelectorAll(q);
}

/**
 * Gets or sets the value of an input, select, textarea, or other element.
 * - If `val` is undefined, returns the value:
 *   - For SELECT: returns selected value(s) (multiple returns comma-separated labels).
 *   - For TEXTAREA/INPUT: returns value, or checked state for checkboxes.
 *   - For other elements: returns innerHTML.
 * - If `val` is provided, sets the value:
 *   - For SELECT: sets selected value.
 *   - For DIV: sets innerHTML.
 *   - For INPUT (checkbox): sets checked state.
 *   - For other inputs: sets value.
 * Returns the element for chaining when setting.
 *
 * @export
 * @param {HTMLElement} ele - The DOM element.
 * @param {*} [val] - Value to set (omit to get).
 * @returns {*} Value (if getting) or the element (if setting).
 * @memberof ccUtilities
 * @example
 * getVal(inputEl); // get value
 * getVal(inputEl, "new value"); // set value
 * getVal(checkboxEl, true); // set checked
 */
export function getVal(ele, val) {
    if (val === undefined) {
        switch (ele.nodeName) {
            case "SELECT":
                if (ele.hasAttribute("multiple")) {
                    return Array.from(ele.selectedOptions).map(o => o.label).join(',');
                }
                return ele.selectedIndex < 0 ? "" : ele[ele.selectedIndex].value;
            case "TEXTAREA":
                return ele.value;
            case "INPUT":
                return (ele.type || "").toUpperCase() === "CHECKBOX" ? ele.checked : ele.value;
            case "SML-FORM-FIELD":
                return ele.querySelector("input").value;
            default:
                return ele.innerHTML;
        }
    } else {
        switch (ele.nodeName) {
            case "SELECT":
                if (val === null || val === "") {
                    ele.value = "";
                } else {
                    [...ele.options].some((option, index) => {
                        if (option.value == val) {
                            ele.selectedIndex = index;
                        }
                    });
                }
                break;
            case "DIV":
                ele.innerHTML = val;
                break;
            default:
                if ((ele.type || "").toUpperCase() === "CHECKBOX") {
                    ele.checked = val === true ||
                        (val || "").toLowerCase() === "true" ||
                        (val || "").toLowerCase() === "on";
                } else {
                    ele.value = val;
                }
                break;
        }
        return ele;
    }
}

/**
 * Checks the state or type of a DOM element.
 * - For `:checked`: returns the checked state of a checkbox/radio input.
 * - For `:visible`: returns true if the element(s) are visible (not display:none, not d-none/collapse).
 *   - Supports single elements, NodeLists, and arrays.
 * - For other values: compares the element's nodeName (case-insensitive).
 *
 * @export
 * @param {HTMLElement|NodeList|Array} ele - The DOM element(s) to check.
 * @param {string} checkType - The check type (":checked", ":visible", or node name like "DIV").
 * @returns {boolean} True if the check passes, false otherwise.
 * @memberof ccUtilities
 * @example
 * isCheck(checkboxEl, ":checked"); // true/false
 * isCheck(divEl, ":visible"); // true/false
 * isCheck(divEl, "DIV"); // true
 */
export function isCheck(ele, checkType) {
    switch (checkType) {
        case ":checked":
            return !!ele.checked;
        case ":visible":
            if (NodeList.prototype.isPrototypeOf(ele)) ele = Array.from(ele);
            if (Array.isArray(ele)) {
                return ele.some(e =>
                    e.style.display !== "none" &&
                    !e.classList.contains("d-none") &&
                    !e.classList.contains("collapse")
                );
            } else {
                return ele.style.display !== "none" &&
                    !ele.classList.contains("d-none") &&
                    !ele.classList.contains("collapse");
            }
        default:
            return ele.nodeName &&
                ele.nodeName.toUpperCase() === checkType.toUpperCase();
    }
}
/**
 * Removes an event listener from element(s).
 * - Supports single elements, NodeLists, and arrays.
 * - Returns true if successful, false if input is invalid.
 *
 * @export
 * @param {HTMLElement|NodeList|Array} eles - Element(s) to remove the event from.
 * @param {string} event - Event type (e.g., "click", "input").
 * @param {Function} func - The event handler function to remove.
 * @returns {boolean} True if successful, false otherwise.
 * @memberof ccUtilities
 * @example
 * off(buttonEl, "click", handler);
 * off(document.querySelectorAll(".item"), "input", handler);
 */
export function off(eles, event, func) {
    if (!eles) return false;
    if (NodeList.prototype.isPrototypeOf(eles)) {
        eles = Array.from(eles);
    } else if (!Array.isArray(eles)) {
        eles = [eles];
    }
    for (const ele of eles) {
        if (ele && typeof ele.removeEventListener === "function") {
            ele.removeEventListener(event, func, false);
        }
    }
    return true;
}
/**
 * Adds an event listener to element(s).
 * - Supports single elements, NodeLists, and arrays.
 * - Returns true if successful, false if input is invalid.
 *
 * @export
 * @param {HTMLElement|NodeList|Array} eles - Element(s) to attach the event to.
 * @param {string} event - Event type (e.g., "click", "input").
 * @param {Function} func - The event handler function to add.
 * @returns {boolean} True if successful, false otherwise.
 * @memberof ccUtilities
 * @example
 * on(buttonEl, "click", handler);
 * on(document.querySelectorAll(".item"), "input", handler);
 */
export function on(eles, event, func) {
    if (!eles) return false;
    if (NodeList.prototype.isPrototypeOf(eles)) {
        eles = Array.from(eles);
    } else if (!Array.isArray(eles)) {
        eles = [eles];
    }
    for (const ele of eles) {
        if (ele && typeof ele.addEventListener === "function") {
            ele.addEventListener(event, func, false);
        }
    }
    return true;
}
/**
 * Prepends HTML or an element to the target element as the first child.
 *
 * @export
 * @param {HTMLElement} element - The target element to prepend to.
 * @param {string|HTMLElement} htmlOrElement - HTML string or HTMLElement to add.
 * @memberof ccUtilities
 * @example
 * prepend(document.body, "<div>Hi</div>");
 * prepend(someDiv, anotherDivElement);
 */
export function prepend(element, htmlOrElement) {
    if (typeof htmlOrElement === 'string' || htmlOrElement instanceof String) {
        element.insertAdjacentHTML("afterbegin", htmlOrElement);
    } else if (typeof htmlOrElement === 'object' && htmlOrElement instanceof HTMLElement) {
        element.insertAdjacentElement("afterbegin", htmlOrElement);
    }
}


/**
 * Removes all event listeners from element(s) by replacing each with a clone.
 * - Supports single elements, NodeLists, and arrays.
 * - Note: This does not preserve event listeners or custom properties.
 *
 * @export
 * @param {HTMLElement|NodeList|Array} eles - Element(s) to unbind.
 * @memberof ccUtilities
 * @example
 * unbind(buttonEl);
 * unbind(document.querySelectorAll(".item"));
 */
export function unbind(eles) {
    if (NodeList.prototype.isPrototypeOf(eles)) {
        eles = Array.from(eles);
    } else if (!Array.isArray(eles)) {
        eles = [eles];
    }
    for (const ele of eles) {
        if (ele && ele.parentNode) {
            const clone = ele.cloneNode(true);
            ele.parentNode.replaceChild(clone, ele);
        }
    }
}

//                  ~~~~~~~~~~~~~~~~~~~~ DOM Functions END~~~~~~~~~~~~~~~~~~                   \\

//                  ~~~~~~~~~~~~~~~~~~~~ Code Functions ~~~~~~~~~~~~~~~~~~~~                   \\


/**
 * Replaces all occurrences of a specified encapsulation character in a string with a replacement.
 * Useful for safely encoding quotes or other delimiters before transport/storage.
 *
 * @export
 * @param {string} str - The input string to process.
 * @param {string} [encapseOne='"'] - The character to replace (default: double quote).
 * @param {string} [encapseOneReplace='^~^'] - The replacement string (default: ^~^).
 * @returns {string} The processed string, prefixed with "::ALTERENCAPSE::".
 * @memberof ccUtilities
 * @example
 * alterEncapse('He said "hello"', '"', '^~^'); // "::ALTERENCAPSE::He said ^~^hello^~^"
 */
export function alterEncapse(str, encapseOne = '"', encapseOneReplace = '^~^') {
    if (!str) return "{}";
    return "::ALTERENCAPSE::" + str.replaceAll(encapseOne, encapseOneReplace);
}

/**
 * Reverses the effect of alterEncapse, restoring the original encapsulation character.
 * Removes the "::ALTERENCAPSE::" prefix and replaces the replacement string with the original character.
 *
 * @export
 * @param {string} str - The string to restore.
 * @param {string} [encapseOne='^~^'] - The replacement string to revert (default: ^~^).
 * @param {string} [encapseOneReplace='"'] - The original encapsulation character (default: double quote).
 * @returns {string} The restored string.
 * @memberof ccUtilities
 * @example
 * unAlterEncapse('::ALTERENCAPSE::He said ^~^hello^~^', '^~^', '"'); // 'He said "hello"'
 */
export function unAlterEncapse(str, encapseOne = '^~^', encapseOneReplace = '"') {
    if (!str) return "{}";
    return str.replaceAll("::ALTERENCAPSE::", "").replaceAll(encapseOne, encapseOneReplace);
}


/**
 * Removes all non-alphanumeric characters from a string.
 * Returns only letters (A-Z, a-z), numbers (0-9), and underscores.
 *
 * @export
 * @param {string} str - The string to clean.
 * @returns {string} The cleaned alphanumeric string.
 * @memberof ccUtilities
 * @example
 * asAlphaNumeric("Hello, world! 123."); // "Helloworld123"
 * asAlphaNumeric("A_B-C@D#1$2%3"); // "A_BCD123"
 */
export function asAlphaNumeric(str) {
    if (!str) return "";
    return str.replace(/[^\w]/gi, '');
}
/**
 * Converts a value to a boolean, supporting common string and numeric representations.
 * - Strings: "true", "1", "y", "on" → true; "false", "0", "off", "" → false.
 * - Numbers: 1 → true; 0 → false.
 * - Arrays: always false.
 * - Null/undefined: false.
 * - Otherwise: uses JS Boolean coercion.
 *
 * @export
 * @param {*} value - Value to convert.
 * @returns {boolean} Boolean representation.
 * @memberof ccUtilities
 * @example
 * asBool("true") // true
 * asBool("1") // true
 * asBool("y") // true
 * asBool([]) // false
 * asBool("false") // false
 * asBool(1) // true
 * asBool(0) // false
 */
export function asBool(value) {
    if (value === true) return true;
    if (value === false || value === null || value === undefined) return false;
    if (Array.isArray(value)) return false;
    if (typeof value === "string") {
        const v = value.trim().toLowerCase();
        if (v === "true" || v === "1" || v === "y" || v === "on") return true;
        if (v === "false" || v === "0" || v === "off" || v === "") return false;
        return false //Javascript is a liar Boolean(v);
    }
    if (typeof value === "number") return value === 1;
    return Boolean(value);
}
/**
 * Ensures a string is a valid CSS ID selector by prepending a "#" if missing.
 * Collapses double hashes to a single hash and converts to string.
 *
 * @export
 * @param {string} id - The element ID to normalize.
 * @returns {string} The normalized ID selector (e.g., "#myId").
 * @memberof ccUtilities
 * @example
 * asElementId("myId"); // "#myId"
 * asElementId("#myId"); // "#myId"
 * asElementId("##myId"); // "#myId"
 */
export function asElementId(id) {
    if (!id) return "";
    id = startsWith(id, "#") ? id : "#" + id;
    id = id.replaceAll("##", "#");
    return asString(id);
}
/**
 * Converts a string to camel (field) notation for property names.
 * - If the string contains spaces, each word is lowercased and joined.
 * - If the string starts with a lowercase letter, prefixes with "_".
 * - If the string is a single character, lowercases it.
 * - Otherwise, lowercases the first character.
 *
 * @export
 * @param {string} str - The string to convert.
 * @returns {string} The field notation string.
 * @memberof ccUtilities
 * @example
 * asFieldNotationString("Some Property Name"); // "_somePropertyName"
 * asFieldNotationString("somePropertyName");   // "_somePropertyName"
 * asFieldNotationString("PropertyName");       // "propertyName"
 * asFieldNotationString("A");                  // "a"
 */
export function asFieldNotationString(str) {
    if (!str) return "";
    if (str.length < 1) return "";
    if (str.indexOf(" ") > -1) {
        str = str.split(" ").map(s => s.substring(0, 1).toLowerCase() + s.substring(1)).join("");
    }
    str = str.replaceAll(" ", "");
    if (str.length === 1) return str.toLowerCase();
    if (str.substring(0, 1) === str.substring(0, 1).toLowerCase()) return "_" + str;
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}
/**
 * Converts a JavaScript Date object to an HTML5 date string ("YYYY-MM-DD").
 * Useful for setting the value of <input type="date"> elements.
 *
 * @export
 * @param {Date|string|number} date - The date to format (Date object, ISO string, or timestamp).
 * @returns {string} The formatted date string ("YYYY-MM-DD"), or "" if input is invalid.
 * @memberof ccUtilities
 * @example
 * asHtml5DateFormat(new Date(2025, 11, 1)); // "2025-12-01"
 * asHtml5DateFormat("2025-12-01T10:00:00Z"); // "2025-12-01"
 */
export function asHtml5DateFormat(date) {
    const d = (date instanceof Date) ? date : new Date(date);
    if (isNaN(d.getTime())) return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}


/**
 * Breaks a date into its component parts: day, month, year, hours, minutes, seconds.
 * Accepts Date objects, ISO strings, or timestamps.
 *
 * @export
 * @param {Date|string|number} dateIn - The date to break into parts.
 * @returns {Object} An object with { day, month, year, hours, minutes, seconds } as strings.
 * @memberof ccUtilities
 * @example
 * asDateParts(new Date(2025, 11, 1, 14, 5, 9));
 * // { day: "01", month: "Dec", year: "2025", hours: "14", minutes: "05", seconds: "09" }
 */
export function asDateParts(dateIn) {
    const date = (dateIn instanceof Date) ? dateIn : new Date(dateIn);
    if (isNaN(date.getTime())) {
        return { day: "", month: "", year: "", hours: "", minutes: "", seconds: "" };
    }
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.toLocaleString('en-US', { year: 'numeric' });
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return { day, month, year, hours, minutes, seconds };
}

/**
 * Converts a value to an integer if it is numeric.
 * Returns -1 for non-numeric values (null, undefined, NaN, empty string, etc).
 *
 * @export
 * @param {*} value - The value to convert to integer.
 * @returns {number} The integer value, or -1 if not numeric.
 * @memberof ccUtilities
 * @example
 * asInt("42");      // 42
 * asInt(3.14);      // 3
 * asInt("abc");     // -1
 * asInt(null);      // -1
 * asInt("");        // -1
 */
export function asInt(value) {
    if (!isNumeric(value)) return -1;
    return parseInt(value, 10);
}

/**
 * Converts a value to a floating-point number if it is numeric.
 * Returns -1 for non-numeric values (null, undefined, NaN, empty string, etc).
 *
 * @export
 * @param {*} value - The value to convert to float.
 * @returns {number} The float value, or -1 if not numeric.
 * @memberof ccUtilities
 * @example
 * asFloat("3.14");   // 3.14
 * asFloat(42);       // 42
 * asFloat("abc");    // -1
 * asFloat(null);     // -1
 * asFloat("");       // -1
 */
export function asFloat(value) {
    if (!isNumeric(value)) return -1;
    return parseFloat(value);
}

/**
 * Converts a string to PascalCase.
 * - Each word is capitalized and concatenated (spaces, underscores, hyphens are treated as word boundaries).
 * - Handles single-character strings and empty/null/undefined input.
 *
 * @export
 * @param {string} str - The string to convert.
 * @returns {string} The PascalCase string.
 * @memberof ccUtilities
 * @example
 * asPascalCase("some property name"); // "SomePropertyName"
 * asPascalCase("some_property-name"); // "SomePropertyName"
 * asPascalCase("a");                  // "A"
 * asPascalCase("");                   // ""
 */
export function asPascalCase(str) {
    if (typeof str !== "string" || str.length < 1) return "";
    return str
        .split(/[\s_\-]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}
/**
 * Converts a string to Pascal property notation.
 * - Each word is capitalized and concatenated (spaces, underscores, hyphens are treated as word boundaries).
 * - Handles single-character strings and empty/null/undefined input.
 *
 * @export
 * @param {string} str - The string to convert.
 * @returns {string} The Pascal property notation string.
 * @memberof ccUtilities
 * @example
 * asPropertyNotation("some property name"); // "SomePropertyName"
 * asPropertyNotation("some_property-name"); // "SomePropertyName"
 * asPropertyNotation("a");                  // "A"
 * asPropertyNotation("");                   // ""
 */
export function asPropertyNotation(str) {
    if (typeof str !== "string" || str.length < 1) return "";
    return str
        .split(/[\s_\-]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

/**
 * Converts any value to a string, with optional radix for numbers.
 * - Returns an empty string for null, undefined, or empty input.
 * - If `size` is provided and the value is a number, uses it as the radix/base.
 * - Otherwise, calls the object's native `toString()` method.
 *
 * @export
 * @param {*} value - The value to convert to string.
 * @param {number} [size] - Optional radix/base for number conversion.
 * @returns {string} The string representation of the value.
 * @memberof ccUtilities
 * @example
 * asString(42);         // "42"
 * asString(255, 16);    // "ff"
 * asString(null);       // ""
 * asString([1,2,3]);    // "1,2,3"
 */
export function asString(value, size) {
    if (value === null || value === undefined || value === "") return "";
    if (typeof value === "number" && size !== undefined) {
        return value.toString(size);
    }
    return value.toString();
}
/**
 * Converts a camelCase or PascalCase string to a human-readable title.
 * - Inserts spaces before uppercase letters.
 * - Capitalizes the first character.
 * - Trims leading/trailing spaces.
 * - Returns an empty string for null/undefined/empty input.
 *
 * @export
 * @param {string} str - The camelCase or PascalCase string to convert.
 * @returns {string} The title-cased string.
 * @memberof ccUtilities
 * @example
 * camelToTitle("someCoolTitle"); // "Some Cool Title"
 * camelToTitle("SomeCoolTitle"); // "Some Cool Title"
 * camelToTitle("aTitle");        // "A Title"
 * camelToTitle("");              // ""
 */
export function camelToTitle(str) {
    if (!str || typeof str !== "string") return "";
    // Insert space before each uppercase letter, capitalize first character, trim
    return str
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, s => s.toUpperCase())
        .trim();
}
/**
 * Given an object and a default this sets the property (after creating it)
 *
 * @param {*} obj Object to work on
 * @param {*} props Comma Delimited list of Properties to create and set default value
 * @param {*} setTo default value
 * @returns
 * @memberof ccUtilities
 */
export function checkSetDefault(obj,props,setTo){
    if(!obj || !props || !setTo) return null;
    if(!Array.isArray(props)) props = props.split(',');
    for(const p of props){
        if(Array.isArray(setTo) && setTo.length===0){
            if(!obj[p]) obj[p]=new Array();
        }else{
            if(!obj[p]) obj[p]=setTo;
        }
    }
    return obj;
}

/**
 * Clips a string to a maximum length.
 * - Returns an empty string for null/undefined/empty input.
 * - If maxLength < 1, returns the original string.
 * - If the string exceeds maxLength, returns the substring up to maxLength.
 *
 * @export
 * @param {string} text - The string to clip.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {string} The clipped string.
 * @memberof ccUtilities
 * @example
 * clip("Hello World", 5); // "Hello"
 * clip("Short", 10);      // "Short"
 * clip("", 5);            // ""
 */
export function clip(text, maxLength) {
    if (typeof text !== "string" || !text.trim()) return "";
    if (typeof maxLength !== "number" || maxLength < 1) return text;
    return text.length > maxLength ? text.slice(0, maxLength) : text;
}


/**
 * Returns a Promise that resolves after a specified delay in milliseconds.
 * - Useful for async/await workflows and debouncing.
 * - Defaults to 1000ms if no value is provided.
 *
 * @export
 * @param {number} [ms=1000] - Milliseconds to wait before resolving.
 * @returns {Promise<void>} Promise that resolves after the delay.
 * @memberof ccUtilities
 * @example
 * await delay(500); // Waits 500ms
 * await delay();    // Waits 1000ms (default)
 */
export async function delay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/** 
 * Creates a debounced version of a function that delays its execution.
 * - The function will only execute after the specified wait time has elapsed since the last call.
 * - Useful for limiting the rate of function calls (e.g., during window resizing or input events).
 */
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
/**
 * Disables page scrolling by locking the current scroll position.
 * - Stores the current scroll position and prevents scrolling.
 * - Useful for modals, overlays, or preventing background scroll.
 *
 * @export
 * @memberof ccUtilities
 * @example
 * disableScroll(); // Locks scroll position
 */
export function disableScroll() {
    const scrollTop = window.pageYOffset;
    const scrollLeft = window.pageXOffset;
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

/**
 * Re-enables page scrolling by restoring the default scroll behavior.
 * - Removes any scroll lock set by disableScroll().
 * - Useful for closing modals, overlays, or restoring background scroll.
 *
 * @export
 * @memberof ccUtilities
 * @example
 * enableScroll(); // Restores normal scroll behavior
 */
export function enableScroll() {
    window.onscroll = null;
}

/**
 * Copies properties from the `fill` object to the `base` object.
 * - If a property name in `fill` starts with an uppercase letter, it is converted to field notation (camelCase with leading underscore).
 * - If a property is missing in `fill`, tries to use its property notation variant.
 * - Returns the updated `base` object.
 *
 * @export
 * @param {Object} base - The object to fill properties into.
 * @param {Object} fill - The object to copy properties from.
 * @returns {Object} The updated base object.
 * @memberof ccUtilities
 * @example
 * fillFrom({}, {FirstName: "John", LastName: "Doe"});
 * // { _firstName: "John", _lastName: "Doe" }
 */
export function fillFrom(base, fill) {
    if (!base || !fill || typeof base !== "object" || typeof fill !== "object") return base;
    for (const key of Object.keys(fill)) {
        let targetKey = key;
        if (key.charAt(0) === key.charAt(0).toUpperCase() && typeof asFieldNotationString(key) === "function") {
            targetKey =asFieldNotationString(key);
        }
        base[targetKey] = fill[key] !== undefined ? fill[key] : fill[asPropertyNotation(key)?.()];
    }
    return base;
}

/**
 * Finds all indexes of a substring within a string.
 * - Returns an array of all starting indexes where `search` occurs in `text`.
 * - Returns an empty array if no matches are found.
 *
 * @export
 * @param {string} text - The string to search within.
 * @param {string} search - The substring to search for.
 * @returns {number[]} Array of starting indexes of each occurrence.
 * @memberof ccUtilities
 * @example
 * findAllIndexesOf("banana", "a"); // [1, 3, 5]
 * findAllIndexesOf("hello world", "l"); // [2, 3, 9]
 * findAllIndexesOf("abc", "x"); // []
 */
export function findAllIndexesOf(text, search) {
    if (typeof text !== "string" || typeof search !== "string" || !search.length) return [];
    const indexes = [];
    let index = text.indexOf(search);
    while (index !== -1) {
        indexes.push(index);
        index = text.indexOf(search, index + 1);
    }
    return indexes;
}

/**
 * Gets all starting indexes of a substring within a string.
 * - Optionally performs a case-insensitive search.
 * - Returns an array of indexes where `searchFor` occurs in `searchIn`.
 *
 * @export
 * @param {string} searchIn - The string to search within.
 * @param {string} searchFor - The substring to search for.
 * @param {boolean} [caseSensitive=true] - Whether the search is case-sensitive.
 * @returns {number[]} Array of starting indexes of each occurrence.
 * @memberof ccUtilities
 * @example
 * getIndicesOf("Banana", "a"); // [1, 3, 5]
 * getIndicesOf("Banana", "A", false); // [1, 3, 5]
 * getIndicesOf("hello world", "l"); // [2, 3, 9]
 * getIndicesOf("abc", "x"); // []
 */
export function getIndicesOf(searchIn, searchFor, caseSensitive = true) {
    if (typeof searchIn !== "string" || typeof searchFor !== "string" || !searchFor.length) return [];
    let source = searchIn;
    let target = searchFor;
    if (!caseSensitive) {
        source = source.toLowerCase();
        target = target.toLowerCase();
    }
    const indices = [];
    let index = source.indexOf(target);
    while (index !== -1) {
        indices.push(index);
        index = source.indexOf(target, index + target.length);
    }
    return indices;
}
/**
 * Gets the type name of an object, similar to .NET style.
 * - For primitives, returns their type (e.g., "String", "Number").
 * - For objects, returns the constructor name if available, otherwise the internal [[Class]].
 *
 * @export
 * @param {*} obj - The object to get the type from.
 * @returns {string} The type name (capitalized).
 * @memberof ccUtilities
 * @example
 * getType("abc"); // "String"
 * getType(123); // "Number"
 * getType([]); // "Array"
 * getType({}); // "Object"
 * getType(new Date()); // "Date"
 */
export function getType(obj) {
    if (obj === null) return "Null";
    if (obj === undefined) return "Undefined";
    const type = typeof obj;
    if (type === "object") {
        if (obj.constructor && obj.constructor.name) {
            return obj.constructor.name;
        }
        // Fallback to internal [[Class]]
        const match = Object.prototype.toString.call(obj).match(/\[object (\w+)\]/);
        if (match && match[1]) return match[1];
        return "Object";
    }
    // Capitalize primitive type
    return type.charAt(0).toUpperCase() + type.slice(1);
}

/**
 * Generates a random GUID (Globally Unique Identifier).
 * - Returns a string in the format: xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx (with dashes) or xxxxxxxxxxxxxxxxxxxxxxxx (no dashes).
 * - Uses random hexadecimal digits.
 *
 * @export
 * @param {boolean} [nodash=false] - If true, omits dashes from the GUID.
 * @returns {string} The generated GUID string.
 * @memberof ccUtilities
 * @example
 * guid(); // "e4f1c2a3-8b7d-4e2a-9f1b-2c3d4e5f6a7b"
 * guid(true); // "e4f1c2a38b7d4e2a9f1b2c3d4e5f6a7b"
 */
export function guid(nodash = false) {
    function s4() {
        return crypto.randomUUID();//Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    const sep = nodash ? "" : "-";
    return (
        s4() + s4() + sep +
        s4() + sep +
        s4() + sep +
        s4() + s4() + s4()
    );
}
/**
 * Decodes HTML entities in a string back to their corresponding characters.
 * - Handles common entities: &amp;, &lt;, &gt;, &quot;, &apos;.
 * - Returns an empty string for null/undefined/empty input.
 *
 * @export
 * @param {string} value - The encoded HTML string to decode.
 * @returns {string} The decoded HTML string.
 * @memberof ccUtilities
 * @example
 * htmlDecode("&lt;div&gt;Hello &amp; World&lt;/div&gt;"); // "<div>Hello & World</div>"
 * htmlDecode("&quot;Test&apos;"); // "\"Test'"
 */
export function htmlDecode(value) {
    if (!value) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = value;
    return txt.value;
}
/**
 * Encodes a string to HTML entities to make it safe for rendering in HTML.
 * - Converts characters like <, >, &, ", ' to their HTML entity equivalents.
 * - Returns an empty string for null/undefined/empty input.
 *
 * @export
 * @param {string} value - The string to encode.
 * @returns {string} The encoded HTML string.
 * @memberof ccUtilities
 * @example
 * htmlEncode("<div>Hello & 'World'</div>"); // "&lt;div&gt;Hello &amp; &#39;World&#39;&lt;/div&gt;"
 */
export function htmlEncode(value) {
    if (!value) return "";
    const txt = document.createElement("textarea");
    txt.textContent = value;
    return txt.innerHTML;
}
/**
 * Decodes HTML entities and strips all HTML tags, returning only plain text.
 * - Useful for extracting readable text from encoded or HTML content.
 * - Returns an empty string for null/undefined/empty input.
 *
 * @export
 * @param {string} value - The encoded or HTML string to process.
 * @returns {string} The plain text content.
 * @memberof ccUtilities
 * @example
 * htmlEncodedStrip("&lt;div&gt;Hello &amp; World&lt;/div&gt;"); // "Hello & World"
 * htmlEncodedStrip("<b>Bold</b> &amp; <i>Italic</i>"); // "Bold & Italic"
 */
export function htmlEncodedStrip(value) {
    if (!value) return "";
    // Decode HTML entities
    const txt = document.createElement("textarea");
    txt.innerHTML = value;
    // Strip HTML tags
    const div = document.createElement("div");
    div.innerHTML = txt.value;
    return div.textContent || "";
}
/**
 * Converts a DOM element (and its children) to a JSON Markup Language (JML) object.
 * - Captures attributes, text content, node name, and children recursively.
 * - Useful for serializing DOM structure to JSON.
 *
 * @export
 * @param {HTMLElement} htmlEle - The DOM element to convert.
 * @returns {Object} The JML representation of the element.
 * @memberof ccUtilities
 * @example
 * htmlToJML(document.getElementById("myDiv"));
 * // { n: "DIV", id: "myDiv", class: "someClass", t: "Text", b: [ ...children... ] }
 */
export function htmlToJML(htmlEle) {
    if (!(htmlEle instanceof HTMLElement)) return {};
    const jml = { b: [] };

    // Copy attributes
    for (const attr of htmlEle.attributes) {
        jml[attr.name] = attr.value || "";
    }

    // Get text content (only direct text nodes)
    const text = Array.from(htmlEle.childNodes)
        .filter(node => node.nodeType === Node.TEXT_NODE)
        .map(node => node.textContent)
        .join("")
        .trim();
    if (text) jml.t = text;

    // Node name
    jml.n = htmlEle.nodeName;

    // ID fallback
    if (!jml.i && !jml.id) {
        jml.i = htmlEle.id || (htmlEle.nodeName + "_" + Math.random().toString(16).slice(2));
    }

    // Children
    for (const child of htmlEle.children) {
        jml.b.push(htmlToJML(child));
    }

    return jml;
}

/**
 * Determines if a value is strictly a boolean (true or false).
 * - Returns true only for the primitive values true or false.
 * - Returns false for all other types, including Boolean objects.
 *
 * @export
 * @param {*} obj - The value to check.
 * @returns {boolean} True if the value is a boolean primitive, false otherwise.
 * @memberof ccUtilities
 * @example
 * isBool(true); // true
 * isBool(false); // true
 * isBool("true"); // false
 * isBool(0); // false
 * isBool(new Boolean(true)); // false
 */
export function isBool(obj) {
    return asBool(obj);
}


/**
 * Determines if the given object is a DOM Element.
 * - Returns true for HTMLElement instances.
 * - Returns false for null, undefined, or non-element objects.
 *
 * @export
 * @param {*} obj - The object to check.
 * @returns {boolean} True if the object is a DOM Element, false otherwise.
 * @memberof ccUtilities
 * @example
 * isElement(document.body); // true
 * isElement(document.createElement("div")); // true
 * isElement({}); // false
 * isElement(null); // false
 */
export function isElement(obj) {
    return obj instanceof HTMLElement;
}
/**
 * Determines if an object, array, or string is empty.
 * - Returns true for null, undefined, empty arrays, or empty strings.
 * - For other types, returns true if their string representation is empty.
 *
 * @export
 * @param {*} obj - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 * @memberof ccUtilities
 * @example
 * isEmpty([]); // true
 * isEmpty(""); // true
 * isEmpty(null); // true
 * isEmpty(undefined); // true
 * isEmpty([1,2]); // false
 * isEmpty("abc"); // false
 * isEmpty({}); // false (object's toString is "[object Object]")
 */
export function isEmpty(obj) {
    if (obj === undefined || obj === null) return true;
    if (Array.isArray(obj)) return obj.length === 0;
    if (typeof obj === "string") return obj.trim().length === 0;
    return obj.toString().length === 0;
}

/**
 * Determines if a string contains HTML tags.
 * - Returns true if the string contains any HTML-like tags.
 * - Returns false for null, undefined, or non-string input.
 *
 * @export
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string contains HTML tags, false otherwise.
 * @memberof ccUtilities
 * @example
 * isHtml("<div>Hello</div>"); // true
 * isHtml("Just text"); // false
 * isHtml("<b>Bold</b>"); // true
 * isHtml(""); // false
 */
export function isHtml(str) {
    if (typeof str !== "string" || !str) return false;
    // Simple regex: matches any <tag> or </tag>
    return /<[^>]+>/.test(str);
}

/**
 * Determines if a value is valid JSON.
 * - Returns true for valid JSON strings or plain objects/arrays.
 * - Returns false for invalid JSON, null, or undefined.
 *
 * @export
 * @param {*} str - The value to check (string or object).
 * @returns {boolean} True if the value is valid JSON, false otherwise.
 * @memberof ccUtilities
 * @example
 * isJson('{"a":1}'); // true
 * isJson('[1,2,3]'); // true
 * isJson({a:1}); // true
 * isJson([1,2,3]); // true
 * isJson("not json"); // false
 * isJson(""); // false
 */
export function isJson(str) {
    // Your excellent initial checks remain. They are perfect.
    if (str === null || str === undefined) return false;
    if (typeof str === "object") return true;
    if (typeof str !== "string" || !str.trim()) return false;

    // We'll work with the trimmed version of the string.
    let potentialJson = str.trim();
    // --- The Core Logic ---
    try {
        JSON.parse(potentialJson);
        return true;
    } catch {
        return false;
    }
}

/**
 * 
 * Determines if a string is valid JSON or can be repaired to valid JSON.
 * - Returns true for valid JSON strings or plain objects/arrays.
 * - If the string is not valid JSON but looks like an object (starts with { and ends with }), it attempts to repair it by:
 *   1. Replacing single quotes with double quotes.
 *   2. Wrapping unquoted keys in double quotes.
 * @param {*} str 
 * @returns {[boolean, string]} Array of [isValid, jsonString] if repairable, or false if not
 */
export function isJsonRepaired(str) {
    // Your excellent initial checks remain. They are perfect.
    if (str === null || str === undefined) return [false,str];
    if (typeof str === "object") return [true,str];
    if (typeof str !== "string" || !str.trim()) return [false,str];

    // We'll work with the trimmed version of the string.
    let potentialJson = str.trim();
    // --- The Core Logic ---
    try {
        // First, we try to parse it as-is. If it's perfect JSON, this will
        // succeed, and we'll return true immediately.
        JSON.parse(potentialJson);
        return [true,potentialJson];
    } catch (strictParseError) {
        // The first attempt failed. This is where your string lands.
        // Now, we'll try to repair it, but only if it looks like an object.
        console.log("Not valid JSON, attempting repair:", strictParseError.message);
        if (potentialJson.startsWith('{') && potentialJson.endsWith('}')) {
            try {
                // Repair Step 1: Replace all single quotes with double quotes.
                let repaired = potentialJson.replaceAll("'", '"');

                // Repair Step 2: Wrap any unquoted keys in double quotes.
                // This finds ` {key: ` or `,key: ` and changes it to ` {"key": `
                repaired = repaired.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');

                // Second attempt: Try parsing the repaired string.
                JSON.parse(repaired);
                
                return [true,repaired]; // Success! It was repairable.

            } catch (repairError) {
                // The repair attempt also failed. It's truly not valid.
                console.log("Not valid JSON, failed repair", repairError);
                return [false,repaired];
            }
        }
        
        // It failed the strict parse and doesn't look like a repairable object.
        return [false,repaired];
    }
}




/**
 * Determines if the given object is a DOM Node.
 * - Returns true for Node instances (elements, text nodes, etc.).
 * - Returns false for null, undefined, or non-node objects.
 *
 * @export
 * @param {*} obj - The object to check.
 * @returns {boolean} True if the object is a DOM Node, false otherwise.
 * @memberof ccUtilities
 * @example
 * isNode(document.body); // true
 * isNode(document.createTextNode("abc")); // true
 * isNode({}); // false
 * isNode(null); // false
 */
export function isNode(obj) {
    return obj instanceof Node;
}

/**
 * Determines if an object, array, or string is not empty.
 * - Returns true for non-empty arrays, non-empty strings, and non-null/undefined objects.
 * - Returns false for null, undefined, empty arrays, or empty strings.
 *
 * @export
 * @param {*} obj - The object to check.
 * @returns {boolean} True if the object is not empty, false otherwise.
 * @memberof ccUtilities
 * @example
 * isNotEmpty([1,2]); // true
 * isNotEmpty("abc"); // true
 * isNotEmpty({}); // true (object's toString is not empty)
 * isNotEmpty([]); // false
 * isNotEmpty(""); // false
 * isNotEmpty(null); // false
 * isNotEmpty(undefined); // false
 */
export function isNotEmpty(obj) {
    return !isEmpty(obj);
}
/**
 * Determines if a value is numeric (finite number or numeric string).
 * - Returns true for numbers and numeric strings (e.g., "42", "3.14").
 * - Returns false for NaN, Infinity, non-numeric strings, null, or undefined.
 *
 * @export
 * @param {*} obj - The value to check.
 * @returns {boolean} True if the value is numeric, false otherwise.
 * @memberof ccUtilities
 * @example
 * isNumeric(42); // true
 * isNumeric("3.14"); // true
 * isNumeric("abc"); // false
 * isNumeric(NaN); // false
 * isNumeric(null); // false
 * isNumeric(undefined); // false
 */
export function isNumeric(obj) {
    return typeof obj === "number"
        ? isFinite(obj)
        : typeof obj === "string" && obj.trim() !== "" && !isNaN(obj);
}


/**
 * Improved JML to HTML converter with error handling and corrective actions.
 * - Recursively translates JML to HTML.
 * - Logs errors/warnings with console.log only (never throws).
 * - Textifies null, undefined, or object values for attributes.
 * - Attempts to recover from malformed JML.
 *
 * @export
 * @param {*} jsonIn - The JML object or array to convert.
 * @param {number} [tabs=2] - Indentation level (for pretty output, not used in final string).
 * @returns {string} HTML string.
 * @memberof ccUtilities
 * @example
 * jmlToHtml v2({ n: "button", id: "btn1", t: "Click" })
 */
export function jmlToHtml(jsonIn, tabs = 2) {
  try {
    if (Array.isArray(jsonIn)) {
      return jsonIn.map(jObj => jmlToHtml(jObj, 1)).join("");
    }
    if (typeof jsonIn !== "object" || jsonIn === null) {
      console.log("[jmlToHtml v2] Non-object input:", jsonIn);
      return String(jsonIn);
    }

        const nodeType = (jsonIn.nodeType || jsonIn.node || jsonIn.n || "div").toLowerCase();
        const inputType = String(jsonIn.type || "").toLowerCase();
        const isNativeButtonControl =
            nodeType === "button" ||
            (nodeType === "input" && ["button", "submit", "reset", "image"].includes(inputType));
    let openTag = `<${nodeType}`;
    let children = "";

    // --- CHILDREN (flatten one accidental nesting level)
    const flatten1 = (arr) => {
      if (!Array.isArray(arr)) return null;
      return typeof arr.flat === "function" ? arr.flat(1) : [].concat(...arr);
    };
    const childArray = flatten1(jsonIn.b) || flatten1(jsonIn.babies);
    if (childArray) {
      children = childArray.map(obj => jmlToHtml(obj, tabs + 1)).join("");
    }

    // --- ATTRIBUTES
    const SKIP_ATTR_KEYS = new Set([
      "nodeType","node","n",
      "b","babies",
      "t","text","innerText","innerHTML",
      "event","e"
    ]);
    const ATTR_MAP = {
      c: "class", i: "id", v: "value", o: "onclick", s: "style", h: "href", r: "role",
      ttl: "title", p: "placeholder",
      acon: "aria-controls", aexp: "aria-expanded", ahdr: "aria-header", ahid: "aria-hidden",
      alab: "aria-label", albb: "aria-labelledby", alvl: "aria-level", areq: "aria-required", arol: "aria-role"
    };

    for (const key in jsonIn) {
      if (!jsonIn.hasOwnProperty(key)) continue;
      if (SKIP_ATTR_KEYS.has(key)) continue;

      const val = jsonIn[key];
      if (typeof val === "object" && val !== null) {
        console.log(`[jmlToHtml v2] Unexpected object for key '${key}':`, val);
        openTag += ` ${key}="[Object]"`;
        continue;
      }
      if (val === null || val === undefined) {
        openTag += ` ${key}="${String(val)}"`;
        continue;
      }
      const fullKey = ATTR_MAP[key] || key;
      let safeVal = String(val).replace(/\"/g, "'");
      if (safeVal === "[object Object]") safeVal = "Object";
            if (fullKey === "role" && safeVal.toLowerCase() === "button" && isNativeButtonControl) {
                continue;
            }
      const q = safeVal.includes('"') ? "'" : '"';
      openTag += ` ${fullKey}=${q}${safeVal}${q}`;

      if (fullKey === "title" && !jsonIn.hasOwnProperty("alab") && !jsonIn.hasOwnProperty("aria-label")) {
        openTag += ` aria-label=${q}${safeVal}${q}`;
      }
    }

    // --- TEXT CONTENT
    let innerTxt = "";
    if (jsonIn.hasOwnProperty("innerHTML")) {
      innerTxt = jsonIn.innerHTML || "";
    } else if (jsonIn.hasOwnProperty("t") || jsonIn.hasOwnProperty("text") || jsonIn.hasOwnProperty("innerText")) {
      innerTxt = jsonIn.t || jsonIn.text || jsonIn.innerText || "";
      // Optional: escape text
      // innerTxt = String(innerTxt).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    }

    // --- END MARKER
    const endMarker = (jsonIn.hasOwnProperty("id") || jsonIn.hasOwnProperty("i"))
      ? `<!-- data-end="${jsonIn.id || jsonIn.i}" -->`
      : "";

    // --- VOID ELEMENTS
    const VOID = new Set(["area","base","br","col","embed","hr","img","input","link","meta","source","track","wbr"]);

    openTag += ">";

    const hasContent = (children && children.length) || (innerTxt && innerTxt.length);

    if (!hasContent) {
      if (VOID.has(nodeType)) {
        // HTML5 style for void element
        return `${openTag.slice(0, -1)}>${endMarker}`;
      }
      // Non-void: close explicitly
      return `${openTag}</${nodeType}>${endMarker}`;
    }

    return `${openTag}${innerTxt}${children}</${nodeType}>${endMarker}`;
  } catch (e) {
    console.log("[jmlToHtml v2] Exception:", e, jsonIn);
    return `<div class='jml-error'>Error rendering JML: ${e && e.message ? e.message : e}</div>`;
  }
}

/**
 * Compiles an error object and sends it to the logError function for server logging.
 * - Fills in default values for missing parameters.
 * - Intended for structured error reporting from client-side code.
 *
 * @export
 * @param {string} logMessage - Error subject (less verbose).
 * @param {string} [logException] - Exception thrown (if available).
 * @param {string} [className] - Name of JS class or file where the error occurred.
 * @param {string} [methodName] - Name of the method/function the error occurred in.
 * @param {number} [logSeverity=1] - Severity (0-9).
 * @param {string} [logType="Error"] - Type (Info, Warning, Error, Security).
 * @param {string} [logApp="_globalJavascript"] - App or file name.
 * @param {string} [server=""] - Server (for clusters).
 * @param {number} [taskDefinitionIdentifier=-1] - Task definition identifier.
 * @param {string} [taskDefinitionTitle=""] - Task definition title.
 * @memberof ccUtilities
 * @example
 * errorLog("Failed to load data", e, "MyClass", "loadData", 5, "Error", "MyApp");
 */
export function errorLog(
    logMessage,
    logException,
    className,
    methodName,
    logSeverity = 1,
    logType = "Error",
    logApp = "_globalJavascript",
    server = "",
    taskDefinitionIdentifier = -1,
    taskDefinitionTitle = ""
) {
    const errorObj = {
        LogMessage: logMessage || "ERROR?",
        LogException: logException || "No Exception Given",
        ClassName: className || "UnknownClass",
        MethodName: methodName || "UnknownMethod",
        LogSeverity: logSeverity,
        LogType: logType,
        LogApp: logApp,
        Server: server,
        TaskDefinitionIdentifier: taskDefinitionIdentifier,
        TaskDefinitionTitle: taskDefinitionTitle,
        AddUserIdentifier: typeof currentUserId !== "undefined" ? currentUserId : -1
    };
    logError(errorObj);
}
/**
 * Sends a structured error log object to the server asynchronously.
 * - Displays a standby/wait message while logging.
 * - Handles server response and optionally calls a callback.
 *
 * @export
 * @param {Object} error - The error log object compiled by errorLog.
 * @returns {Promise<void>} Resolves when logging is complete.
 * @memberof ccUtilities
 * @example
 * await logError({ LogMessage: "Failed", LogException: "e", ... });
 */
export async function logError(error) {
    if (!error || typeof error !== "object") return;
    const messageMethod = "/TaskSec/LogEntry";
    unobtrusiveWait("Standby. Logging an Error");
    try {
        const data = await apiPostDirect(messageMethod, error);
        if (data && data.errorObject) {
            // Optionally handle errorObject from server
        } else {
            // Optionally handle success
        }
    } catch (e) {
        // Optionally handle network/server errors
    }
}

/**
 * Checks for errors from the server and logs them.
 * - Optionally sends the error log back to the server.
 * - Optionally calls a callback function on error.
 * - Uses modalBox for user notifications.
 *
 * @export
 * @param {*} data - Data received from the server.
 * @param {boolean} [toDb=false] - True to send the error log back to the server.
 * @param {Function} [call] - Function to call on error.
 * @memberof ccUtilities
 * @example
 * await reportErrorObject(response, true, () => { ... });
 */
export async function reportErrorObject(data, toDb = false, call) {
    if (!data) return;
    if ((data.fireRob || false) === true) {
        const errorObject = data.errorObject;
        if (toDb && errorObject) {
            await logError(errorObject);
        }
        if (typeof call === "function") {
            call(errorObject);
        }
        // Show error to user using modalBox
        if (errorObject && errorObject.LogMessage) {
            modalBox(errorObject.LogMessage, "Error", "danger");
        }
    }
}
/**
 * Creates a Bootstrap 5 alert element as a JML object.
 * - Supports alert text, identifier, and type (e.g., danger, warning, info, success).
 *
 * @export
 * @param {string} alert - The alert text to display.
 * @param {string} [alias] - Identifier for this alert (used as id).
 * @param {string} [type="info"] - Type of alert (e.g., danger, warning, info, success).
 * @returns {Object} The JML representation of the alert.
 * @memberof ccUtilities
 * @example
 * makeAlert("Something went wrong!", "errorAlert", "danger");
 */
export function makeAlert(alert, alias, type = "info") {
    return {
        n: "div",
        class: `alert alert-${type} alert-dismissible fade show`,
        role: "alert",
        id: alias || "",
        t: alert,
        b: [
            {
                n: "button",
                type: "button",
                class: "btn-close",
                "data-bs-dismiss": "alert",
                "aria-label": "Close"
            }
        ]
    };
}
 /**
 * Creates a Bootstrap 5 alert as a JML object with custom id, text, and class.
 * - Supports additional classes and custom id.
 *
 * @export
 * @param {string} idAdd - Additional ID to add to the alert.
 * @param {string} text - Text to display in the alert.
 * @param {string} [clazz="alert-info"] - Additional class(es) to add to the alert.
 * @returns {Object} The JML representation of the alert.
 * @memberof ccUtilities
 * @example
 * makeAlertJML("myAlert", "Hello World!", "alert-success");
 */
export function makeAlertJML(idAdd, text, clazz = "alert-info") {
    return {
        n: "div",
        id: idAdd || "",
        class: `alert ${clazz} alert-dismissible fade show`,
        role: "alert",
        t: text,
        b: [
            {
                n: "button",
                type: "button",
                class: "btn-close",
                "data-bs-dismiss": "alert",
                "aria-label": "Close"
            }
        ]
    };
}
/**
 * Converts all keys of an object to camelCase.
 * - Handles nested objects and arrays recursively.
 * - Leaves values unchanged.
 *
 * @export
 * @param {Object} obj - The object to convert.
 * @returns {Object} A new object with camelCase keys.
 * @memberof ccUtilities
 * @example
 * objectKeysToCamelCase({ First_Name: "John", LastName: "Doe" });
 * // { firstName: "John", lastName: "Doe" }
 */
export function objectKeysToCamelCase(obj) {
    if (Array.isArray(obj)) {
        return obj.map(objectKeysToCamelCase);
    }
    if (obj === null || typeof obj !== "object") return obj;

    const toCamel = str =>
        str.replace(/[_-](\w)/g, (_, c) => c.toUpperCase())
           .replace(/^\w/, c => c.toLowerCase());

    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[toCamel(key)] = objectKeysToCamelCase(value);
        return acc;
    }, {});
}

/**
 * Converts a number into its English ordinal string (e.g., 1 → "First", 2 → "Second", 21 → "Twenty First").
 * - Handles numbers up to 99 with correct ordinal suffixes.
 * - Returns an empty string for invalid input.
 *
 * @export
 * @param {number} n - The number to stringify.
 * @returns {string} The English ordinal string representation.
 * @memberof ccUtilities
 * @example
 * stringifyNumber(1); // "First"
 * stringifyNumber(2); // "Second"
 * stringifyNumber(21); // "Twenty First"
 * stringifyNumber(100); // "100th"
 */
export function stringifyNumber(n) {
    if (typeof n !== "number" || !isFinite(n) || n < 1) return "";

    const ordinals = [
        "Zeroth", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth",
        "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth"
    ];
    const tens = [
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    if (n < 20) return ordinals[n];
    if (n < 100) {
        const ten = Math.floor(n / 10);
        const unit = n % 10;
        let result = tens[ten];
        if (unit) result += " " + ordinals[unit];
        else result += "ieth"; // e.g., "Twentyieth" for 20, "Thirtyieth" for 30
        return result;
    }
    // For numbers >= 100, just add "th" suffix
    return n + "th";
}

/**
 * Returns the text found between two substrings in a string.
 * - If multiple matches, returns the first occurrence.
 * - Returns an empty string if delimiters are not found or input is invalid.
 *
 * @export
 * @param {string} str - The string to search within.
 * @param {string} start - The starting delimiter.
 * @param {string} end - The ending delimiter.
 * @returns {string} The text found between the delimiters, or "" if not found.
 * @memberof ccUtilities
 * @example
 * textBetween("Hello [World]!", "[", "]"); // "World"
 * textBetween("abc <def> ghi", "<", ">"); // "def"
 * textBetween("no match", "[", "]"); // ""
 */
export function textBetween(str, start, end) {
    if (typeof str !== "string" || typeof start !== "string" || typeof end !== "string") return "";
    const startIdx = str.indexOf(start);
    if (startIdx === -1) return "";
    const endIdx = str.indexOf(end, startIdx + start.length);
    if (endIdx === -1) return "";
    return str.substring(startIdx + start.length, endIdx);
}

/**
 * Converts a string to title case (each word capitalized).
 * - Handles camelCase, PascalCase, snake_case, and hyphen-case.
 * - Returns an empty string for null/undefined/empty input.
 *
 * @export
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 * @memberof ccUtilities
 * @example
 * toTitle("someCoolTitle"); // "Some Cool Title"
 * toTitle("some_cool_title"); // "Some Cool Title"
 * toTitle("some-cool-title"); // "Some Cool Title"
 * toTitle(""); // ""
 */
export function toTitle(str) {
    if (!str || typeof str !== "string") return "";
    // Replace underscores/hyphens with spaces, insert space before uppercase, capitalize each word
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
//     return str
//         .replace(/[_\-]+/g, " ")
//         .replace(/([a-z])([A-Z])/g, "$1 $2")
//         .replace(/\s+/g, " ")
//         .trim()
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
}
// export function toTitle(str) {
//     if(!str) return "";
//     let rtn="";
//     let titleArr=str.split(" ");
//     for(let word of titleArr){
//         rtn+=word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase()+" ";
//     } 
//     return rtn.trim();
// }

//                  ~~~~~~~~~~~~~~~~~~~~ Code Functions END~~~~~~~~~~~~~~~~~                   \\
//                  ~~~~~~~~~~~~~~~~~~~~ Form Functions ~~~~~~~~~~~~~~~~~~~~                   \\

/**
 * Clears all input, select, and textarea values in a web form.
 * - Resets checkboxes and radio buttons to unchecked.
 * - Sets selects to their first option.
 * - Clears text inputs and textareas.
 * - Ignores disabled and hidden fields.
 *
 * @export
 * @param {HTMLFormElement} form - The form element to clear.
 * @memberof ccUtilities
 * @example
 * formClear(document.getElementById("myForm"));
 */
export function formClear(form) {
    if (!(form instanceof HTMLFormElement)) return;
    const elements = form.querySelectorAll("input, select, textarea");
    elements.forEach(el => {
        if (el.disabled || el.type === "hidden") return;
        switch (el.type) {
            case "checkbox":
            case "radio":
                el.checked = false;
                break;
            case "select-one":
            case "select-multiple":
                el.selectedIndex = 0;
                break;
            default:
                el.value = "";
        }
    });
}


/**
 * Enables or disables all input, select, and textarea fields in a web form.
 * - If enabled is true, removes the disabled attribute.
 * - If enabled is false, sets the disabled attribute.
 *
 * @export
 * @param {HTMLFormElement} form - The form element to update.
 * @param {boolean} [enabled=true] - Whether to enable (true) or disable (false) the fields.
 * @memberof ccUtilities
 * @example
 * formEnabled(document.getElementById("myForm"), false); // disables all fields
 * formEnabled(document.getElementById("myForm"), true);  // enables all fields
 */

export function formEnabled(form, enabled = true) {
    if (!(form instanceof HTMLFormElement)) return;
    const elements = form.querySelectorAll("input, select, textarea, button");
    elements.forEach(el => {
        el.disabled = !enabled;
    });0.0
}

/**
 * Fills a web form's fields with values from a data object.
 * - Matches fields by name or id.
 * - Handles input, select, and textarea elements.
 * - Ignores disabled fields.
 *
 * @export
 * @param {HTMLFormElement} form - The form element to fill.
 * @param {Object} data - The data object with key-value pairs.
 * @memberof ccUtilities
 * @example
 * formFill(document.getElementById("myForm"), { firstName: "John", age: 30 });
 */
export function formFill(form, data) {
    if (!(form instanceof HTMLFormElement) || typeof data !== "object" || !data) return;
    const elements = form.querySelectorAll("input, select, textarea");
    elements.forEach(el => {
        if (el.disabled) return;
        const key = el.name || el.id;
        if (key && data.hasOwnProperty(key)) {
            switch (el.type) {
                case "checkbox":
                    el.checked = !!data[key];
                    break;
                case "radio":
                    el.checked = el.value === String(data[key]);
                    break;
                case "select-one":
                case "select-multiple":
                    Array.from(el.options).forEach(option => {
                        option.selected = Array.isArray(data[key])
                            ? data[key].includes(option.value)
                            : option.value === String(data[key]);
                    });
                    break;
                default:
                    el.value = data[key];
            }
        }
    });
}


/**
 * Serializes a web form's fields into a JSON object.
 * - Handles input, select, and textarea elements.
 * - For checkboxes and radios, stores checked state or value.
 * - For multiple selects, stores an array of selected values.
 *
 * @export
 * @param {HTMLFormElement} form - The form element to serialize.
 * @returns {Object} The JSON object representing the form data.
 * @memberof ccUtilities
 * @example
 * const data = formToJson(document.getElementById("myForm"));
 */
export function formToJson(form) {
    if (!(form instanceof HTMLFormElement)) return {};
    const result = {};
    const elements = form.querySelectorAll("input, select, textarea");
    elements.forEach(el => {
        if (!el.name && !el.id) return;
        const key = el.name || el.id;
        switch (el.type) {
            case "checkbox":
                result[key] = el.checked;
                break;
            case "radio":
                if (el.checked) result[key] = el.value;
                break;
            case "select-multiple":
                result[key] = Array.from(el.selectedOptions).map(opt => opt.value);
                break;
            default:
                result[key] = el.value;
        }
    });
    return result;
}

//                  ~~~~~~~~~~~~~~~~~~~~ Form Functions END~~~~~~~~~~~~~~~~~                   \\

//                  ~~~~~~~~~~~~~~~~ Create Files Functions END~~~~~~~~~~~~~                   \\
/**
 * Generates an ICS (iCalendar) file content string from event details.
 * - Supports basic event fields: summary, description, location, start, end.
 * - Returns a string suitable for download as .ics.
 *
 * @export
 * @param {Object} event - The event details.
 * @param {string} event.summary - Event title.
 * @param {string} event.description - Event description.
 * @param {string} event.location - Event location.
 * @param {Date|string} event.start - Event start date/time.
 * @param {Date|string} event.end - Event end date/time.
 * @returns {string} The ICS file content.
 * @memberof ccUtilities
 * @example
 * const ics = makeICS({
 *   summary: "Meeting",
 *   description: "Discuss project",
 *   location: "Conference Room",
 *   start: new Date(),
 *   end: new Date(Date.now() + 3600000)
 * });
 */
export function makeICS(event) {
    function formatDate(date) {
        const d = (date instanceof Date) ? date : new Date(date);
        return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }
    return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        `SUMMARY:${event.summary || ""}`,
        `DESCRIPTION:${event.description || ""}`,
        `LOCATION:${event.location || ""}`,
        `DTSTART:${formatDate(event.start)}`,
        `DTEND:${formatDate(event.end)}`,
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\r\n");
}

/**
 * Triggers a download of an ICS (iCalendar) file from event details.
 * - Uses makeICS to generate the ICS content.
 * - Creates a temporary anchor element to start the download.
 *
 * @export
 * @param {Object} event - The event details (see makeICS for structure).
 * @param {string} [filename="event.ics"] - The filename for the downloaded ICS file.
 * @memberof ccUtilities
 * @example
 * setICSFunc({ summary: "Meeting", start: new Date(), end: new Date(Date.now() + 3600000) }, "meeting.ics");
 */
export function setICSFunc(event, filename = "event.ics") {
    const icsContent = makeICS(event);
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
// }



//                  ~~~~~~~~~~~~~~~~ Create Files Functions END~~~~~~~~~~~~~                   \\

//                  ~~~~~~~~~~~~~ Independent List Functions ~~~~~~~~~~~~~~~                   \\



//                  ~~~~~~~~~~~~~ Independent List Functions END ~~~~~~~~~~~                   \\

//                  ~~~~~~~~~~~~~~~~~~~~ External Functions ~~~~~~~~~~~~~~~~~~~~               \\
/**
 * Displays a non-blocking wait/loading message to the user.
 * - Shows a modal or overlay with the provided message.
 * - Intended for use during async operations.
 *
 * @export
 * @param {string} [message="Please wait..."] - The message to display.
 * @memberof ccUtilities
 * @example
 * unobtrusiveWait("Loading data...");
 */
export function unobtrusiveWait(message = "Please wait...") {
    // Create or update a simple overlay/modal for loading
    let waitDiv = document.getElementById("unobtrusiveWaitOverlay");
    if (!waitDiv) {
        waitDiv = document.createElement("div");
        waitDiv.id = "unobtrusiveWaitOverlay";
        waitDiv.style.position = "fixed";
        waitDiv.style.top = "0";
        waitDiv.style.left = "0";
        waitDiv.style.width = "100vw";
        waitDiv.style.height = "100vh";
        waitDiv.style.background = "rgba(0,0,0,0.3)";
        waitDiv.style.display = "flex";
        waitDiv.style.alignItems = "center";
        waitDiv.style.justifyContent = "center";
        waitDiv.style.zIndex = "9999";
        waitDiv.style.fontSize = "2em";
        waitDiv.style.color = "#fff";
        document.body.appendChild(waitDiv);
    }
    waitDiv.textContent = message;
    waitDiv.role="alert";
    waitDiv["aria-live"]="assertive";
    waitDiv["aria-atomic"]="true";
    waitDiv.style.display = "flex";
}

/**
 * Hides and removes the unobtrusive wait/loading overlay.
 * - Intended to be called after async operations complete.
 *
 * @export
 * @memberof ccUtilities
 * @example
 * unobtrusiveWaitOff();
 */
export function unobtrusiveWaitOff() {
    const waitDiv = document.getElementById("unobtrusiveWaitOverlay");
    if (waitDiv) {
        waitDiv.style.display = "none";
        document.body.removeChild(waitDiv);
    }
}

//                  ~~~~~~~~~~~~~~~~~~~~ External Functions END~~~~~~~~~~~~~~~~~               \\

//                  ~~~~~~~~~~~~~~~~~~~ Comms Functions ~~~~~~~~~~~~~~~~~~~~                   \\
/**
 * Makes an API call to a server endpoint using fetch.
 * - Automatically builds the API URL based on the controller and prefix.
 * - Handles POST and GET methods, serializes data, and parses JSON responses.
 * - Handles access errors and logs server errors.
 *
 * @export
 * @param {string} apiPrefix - The API endpoint prefix (e.g., "/SomeAction").
 * @param {Object|string} dataUp - Data to send (object will be JSON-stringified).
 * @param {string} [messageReceiverDataType="json"] - Expected response type.
 * @param {string} [method="POST"] - HTTP method ("POST" or "GET").
 * @returns {Promise<Object>} The parsed JSON response from the server.
 * @memberof ccUtilities
 * @example
 * const result = await apiPost("/GetData", { id: 123 });
 */
export async function apiPost(apiPrefix, dataUp, messageReceiverDataType = "json", method = "POST") {
    const controller = document.querySelector("cc-container,sml-page").dataset.idPrefix;
    let apiSuffix = "";
    if (typeof dataUp === "string") {
        try {
            const parsed = JSON.parse(dataUp);
            apiSuffix = parsed.requestType || parsed.callAction || "";
        } catch {
            apiSuffix = "";
        }
    } else {
        apiSuffix = dataUp.requestType || dataUp.callAction || "";
        dataUp = JSON.stringify(dataUp);
    }

    const trackId = guid().toString();
    let removeController = apiPrefix.split('/').pop();
    let apiUrl = "/" + controller + "/Api" + removeController + apiSuffix;
    if (removeController === "" && apiSuffix === "") {
        apiUrl += apiPrefix.split('/').filter(p => p !== '').pop();
    }

    let response={};
    let responseObj={};
    let responseC={};

    try {
        if (method === "POST") {
            response = await fetch(location.origin + apiUrl, {
                method: method,
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataUp,
                signal: signal
            })
            responseC = response.clone();
            // Handle successful response
            responseObj=await response.json();

        } else {
            response = await fetch(apiUrl + "?" + dataUp, {
                method,
                cache: "no-cache",
                signal: signal
            })
            responseC = response.clone();
            // Handle successful response
            responseObj=await response.json();
        }
        // resObj = {
        //     ok: res.ok,
        //     url: res.url,
        //     text: res.statusText,
        //     sessionTimeout: false,
        //     redirected: res.redirected,
        //     status: res.status,
        //     bodyUsed: res.bodyUsed
        // };

        if (response?.url?.includes("/Account/AccessError")) {
            ccModalMakeOpen(
                "You do not have access to " + apiUrl + ". Please contact your administrator.",
                "Access Error!!","" 
            );
            document.querySelector("#ccModalGlobalModalHeader").classList.add("bg-danger");
            responseObj.json = { errorObject: "You do not have access to " + apiUrl + ". Please contact your administrator." };
            return responseObj.json;
        }
    } catch (err) {
        let logMsg = "";
        let msg = "";
        console.log(err);
        switch (responseC?.status) {
            case 404:
                logMsg = `Web Server error. Status: ApiPost -> ${responseC.status} (${responseC.statusText}) for location: ${responseC.url} ${responseC.redirected ? "(--redirected--)." : ""} This URL is not on the server. Please send a Customer Service Request to fix this.`;
                msg = logMsg;
                break;
            case 500:
                logMsg = `Web Server error. Status: ApiPost -> ${responseC.status} (${responseC.statusText}) for location: ${responseC.url} ${responseC.redirected ? "(--redirected--)." : ""} This URL is not on the server. Please send a Customer Service Request to fix this.`;
                break;
            default:
                logMsg = `Web Server error. Status: ApiPost -> ${responseC?.status} (${responseC?.statusText}) for location: ${responseC?.url} ${responseC?.redirected ? "(--redirected--)" : ""}`;
                msg = logMsg;
                break;
        }
        if (logMsg.length) console.log(logMsg);

        responseObj = msg.length ? { errorObject: msg } : { error: logMsg };
    }
    responseObj = await commsResponseStatusHandle(responseC, responseObj);
    if (responseC.url && responseC.url.indexOf("Account/AccessError") > -1)
        responseObj = { errorObject: "Access Error Occurred on :" + responseC.url };
    if (typeof responseObj === "string" && isJson(responseObj)) responseObj = JSON.parse(responseObj);
    return responseObj;
}
    
/**
 * Makes a direct API call to a specified URL using fetch.
 * - Sends data as JSON in the request body.
 * - Handles POST method by default, can skip POST if noPost is true.
 * - Parses and returns the JSON response.
 * - Handles access errors and logs server errors.
 *
 * @export
 * @param {string} url - The full API endpoint URL.
 * @param {Object|string} dataUp - Data to send (object will be JSON-stringified).
 * @param {string} [messageReceiverDataType="json"] - Expected response type.
 * @param {boolean} [noPost=false] - If true, skips POST and just returns.
 * @returns {Promise<Object>} The parsed JSON response from the server.
 * @memberof ccUtilities
 * @example
 * const result = await apiPostDirect("/api/SomeAction", { id: 123 });
 */
export async function apiPostDirect(url, dataUp, messageReceiverDataType = "json", noPost = false) {
    if (typeof dataUp === "object") dataUp = JSON.stringify(dataUp);
    const trackId = guid().toString();
    let controller="";
    const pageContainer = document.querySelector("cc-container,sml-page");
    if(pageContainer?.dataset?.idPrefix){
         controller= pageContainer.dataset.idPrefix;
    }else{
        controller = location.pathname.split("/")[1];
    }
    if(url.indexOf("/")===-1){
        //assume action add controller
        url="/" + controller + "/" + url;
    }
    let httpMethod = "POST";
    let response={};
    let responseObj={};
    let responseC={};

    if (!noPost) {
        // POST logic (can be extended for other methods)
    }

    try{
        response = await fetch(url, {
            method: httpMethod,
            headers: {'Content-Type': 'application/json',},
            cache: "no-cache",
            body: dataUp,
            signal: signal
        });
        
        responseC = response.clone();
        // Handle successful response
        responseObj=await response.json();
    } catch (err) {
        let logMsg = "";
        let msg = "";
        switch (response?.status) {
            case 404:
                logMsg = `Web Server error. Status: ${responseC.status} (${responseC.statusText}) for location: ${responseC.url} ${responseC.redirected ? "(--redirected--)." : ""} This URL is not on the server. Please send a Customer Service Request to fix this.`;
                msg = logMsg;
                break;
            case 500:
                logMsg = `Web Server error. Status: ${responseC.status} (${responseC.statusText}) for location: ${responseC.url} ${responseC.redirected ? "(--redirected--)." : ""} This URL is not on the server. Please send a Customer Service Request to fix this.`;
                break;
            default:
                logMsg = `Web Server error. Status: ${responseC?.status} (${responseC?.statusText}) for location: ${responseC?.url} ${responseC?.redirected ? "(--redirected--)" : ""}`;
                msg = logMsg;
                break;
        }
        if (logMsg.length) console.log(logMsg);
        responseObj.json = msg.length ? { errorObject: msg } : { error: logMsg };
    }
    responseObj.json = {};
    responseObj = await commsResponseStatusHandle(responseC, responseObj);
    if (responseC.url && responseC.url.indexOf("Account/AccessError") > -1)
        responseObj = { errorObject: "Access Error Occurred on :" + responseC.url };
    if (typeof responseObj === "string" && isJson(responseObj)) responseObj = JSON.parse(responseObj);
    return responseObj;
}
/**
 * Converts a JSON object into a URL query string.
 * - Handles nested objects and arrays using bracket notation (e.g., foo[bar]=baz).
 * - Skips undefined/null values.
 * - Encodes keys and values for safe URL usage.
 * - Accepts either a plain object or a JSON string.
 *
 * @export
 * @param {Object|string} jsonObj - The object to convert (or a JSON string).
 * @returns {string} The resulting query string (e.g., "foo=bar&baz=qux").
 * @memberof ccUtilities
 * @example
 * jsonToQueryString({ foo: "bar", arr: [1,2] }); // "foo=bar&arr[0]=1&arr[1]=2"
 * jsonToQueryString('{"foo":"bar"}'); // "foo=bar"
 */
export function jsonToQueryString(jsonObj) {
    if (typeof jsonObj === "string") {
        try {
            jsonObj = JSON.parse(jsonObj);
        } catch {
            throw new Error("Invalid JSON string input.");
        }
    }
    if (!jsonObj || typeof jsonObj !== "object") {
        throw new Error("Invalid input: Expected a JSON object.");
    }

    const build = (obj, prefix = "") =>
        Object.entries(obj)
            .flatMap(([key, value]) => {
                if (value === undefined || value === null) return [];
                const k = prefix ? `${prefix}[${key}]` : key;
                if (typeof value === "object" && !Array.isArray(value)) {
                    return build(value, k);
                }
                if (Array.isArray(value)) {
                    return value.map((v, i) =>
                        `${encodeURIComponent(k)}[${i}]=${encodeURIComponent(v)}`
                    );
                }
                return `${encodeURIComponent(k)}=${encodeURIComponent(value)}`;
            });

    return build(jsonObj).join("&");
}


/**
 * Handles the response status of a fetch call, parsing JSON if successful,
 * and providing structured error information otherwise.
 * - For status 200, parses and returns the JSON response.
 * - For other statuses, logs and returns an error object.
 * - Handles access errors and special cases.
 *
 * @export
 * @param {Response} res - The fetch response object.
 * @param {*} resObj - The response object to populate.
 * @returns {Promise<Object>} The updated response object.
 * @memberof ccAutoComplete
 * @example
 * const handled = await commsResponseStatusHandle(response, {});
 */
export async function commsResponseStatusHandle(res, resObj) {
    const resC=res.clone();
    let resJson={};
    try {
        if (resC.status === 200) {
            resJson = resObj;
        } else {
            let msg = "";
            let goMsg = true;
            switch (resC.status) {
                case 401:
                    msg = "Unauthorized access. Please log in.";
                    break;
                case 403:
                    msg = "Forbidden. You do not have permission to access this resource.";
                    break;
                case 404:
                    msg = `Not found: ${resC.url}`;
                    break;
                case 500:
                    msg = `Server error (${resC.statusText}) at ${resC.url}`;
                    break;
                default:
                    msg = `Error ${resC.status}: ${resC.statusText} at ${resC.url}`;
            }
            console.log("FromComms: "+ msg);
            if (goMsg) {
                resJson = { errorObject: msg, status: resC.status, url: resC.url };
            }
        }
    } catch (err) {
        const contentType = resC.headers.get("content-type") || "unknown";
        if (contentType.includes("application/json")) {
            const text = (await resC.text()) || "GARBAGE";
            if (
                resC.url.includes("/Account/AccessError") ||
                resC.url.includes("/Home/ROB")
            ) {
                resJson = { errorObject: "Access error or ROB triggered." };
            } else {
                resJson = { errorObject: err, raw: text };
            }
        } else {
            resJson = { errorObject: err };
        }
        console.log("FromComms: "+err);
    }
    if (!resC.url) resJson.url = window.location.href;
    return resObj;
}

/**
 * Use to communicate to classes/components calling a function
 *
 * @param {*} receiver the window level (if possible) class or component to call
 * @param {*} caller the window level (if possible) class or component calling the function
 * @param {*} job function name
 * @param {*} data any data to be sent to that function
 * @return {*} 
 * @memberof catsCRUDL
 */
  export async function dispatch(receiver, caller, job, data){
    let res = await receiver[job](data);
    return res;
  }


  /**
 * Checks for errors in server responses and handles them appropriately.
 * - Handles error objects, popups, redirects, and validation feedback.
 * - Optionally logs errors to the server.
 * - Optionally calls a callback function on error.
 * - Uses modalBox for user notifications.
 *
 * @export
 * @param {*} data - Data received from the server (object or JSON string).
 * @param {boolean} [toDb=false] - If true, logs the error to the server.
 * @param {Function} [call] - Optional callback to invoke on error.
 * @returns {boolean} True if no error detected, false if error handled.
 * @memberof ccUtilities
 * @example
 * const ok = await receiptCheckGood(response, true, () => { ... });
 */
export async function receiptCheckGood(data, toDb = false, call) {
    // Defensive: Parse string data if needed
    if (typeof data === "string" && isJson(data)) {
        data = JSON.parse(data);
    }

    // Unwrap nested Data property if present
    if (data?.Data) {
        if (data.Data.errorObject || data.Data.isValid || data.Data.form) {
            data = data.Data;
        }
    }

    // Show rules of behavior if fireRob is set
    if (data?.fireRob) {
        navBar.rulesOfBehaviorShow();
    }

    let returnValue = true;

    // Error handling
    if (data?.errorObject) {
        returnValue = false;
        const errorObject = data.errorObject;

        // Special error message or bypass
        if (
            errorObject?.startsWith?.("Message Failed to make it using var") ||
            data.bypassMessage
        ) {
            console.error(`${timeOfDay()}: handleCalls DHO LOAD FAILED/DHOLISTLOAD/ ${errorObject}`);
            if (typeof call === "function") call();
        } else if (data?.isPopUp && data?.popUpUrl) {
            window.open(data.popUpUrl);
            ccModalMakeOpen(
                "A Popup should have occurred. If it did not, please turn off your popup blocker or check your browser's popup cache.",
                "ERROR POPUP","x"
            );
            unobtrusiveWaitOff();
            if (typeof call === "function") call();
        } else if (data?.additionalInfo && data.additionalInfo.length > 2) {
            ccModalMakeOpen(
                `${errorObject}<hr/>Additional Info:<hr/>${data.additionalInfo}`,
                "Ajax Action Failure!","x"
            );
            unobtrusiveWaitOff();
            if (typeof call === "function") call();
        } else if (data?.additionalInfo) {
            ccModalMakeOpen(data.additionalInfo, data.buttonType,"x");
            unobtrusiveWaitOff();
            if (typeof call === "function") call();
        } else {
            console.log(`RCG: ${timeOfDay()}: error :${errorObject}`);
            if (!errorObject.includes("The user aborted a request")) {
                ccModalMakeOpen(errorObject, "!!!ERROR!!!","x");
            }
        }

        // Optional: Log error to server
        if (toDb) {
            await util.logError({
                LogMessage: errorObject,
                LogException: errorObject,
                ClassName: typeof controllerName !== "undefined" ? controllerName : "UNKNOWN",
                MethodName: typeof actionName !== "undefined" ? actionName : "UNKNOWN",
                LogSeverity: 5,
                LogType: "Error",
                LogApp: "ccUtilities.js",
                Server: "",
                TaskDefinitionIdentifier: cso?.CurrentTask?.TaskDefinitionIdentifier ?? -1,
                TaskDefinitionTitle: cso?.CurrentTask?.TaskDefinitionTitle ?? "",
                AddUserIdentifier: typeof currentUserId !== "undefined" ? currentUserId : -1,
            });
        }
    }

    // Show unobtrusive wait message if present
    if (data?.um?.message) {
        await unobtrusiveWait(
            data.um.message,
            "um" + util.guid().utlReplaceAll("-", ""),
            0,
            200,
            true,
            data.um.timeOut || 30000
        );
    }

    // Handle redirects
    if (data?.redirect) {
        const redirect = data.redirect;
        let url = "";
        let delay = 3000;
        if (typeof redirect === "string") {
            url = redirect.startsWith("http") ? redirect : host + redirect;
        } else if (typeof redirect === "object" && redirect.url) {
            url = redirect.url.startsWith("http") ? redirect.url : host + redirect.url;
            delay = redirect.delay || 3000;
        }
        setTimeout(() => { window.location.href = url; }, delay);
    }

    // Handle validation feedback
    if (data?.isValid !== undefined) {
        let frmObj = null;
        if (data?.form) {
            frmObj = typeof data.form === "string" ? JSON.parse(data.form) : data.form;
        }
        if (frmObj) {
            let frm = new utlForm(frmObj.ObjectName, frmObj);
            delete data.form;
            let validationObject = new validateObject(frm, data);
            if (!validationObject.isValid) {
                validationObject.fieldNotesMissing = 1;
                validationObject.validateFailed(validationObject);
                const cardFoot=getEle("#" + frm.alias + "CardFooter");
                elementShow(cardFoot);
            }
        } else if (!data.isValid) {
            ccModalMakeOpen(data.additionalInfo || "Something went wrong!!", data.buttonType || "Error Occurred!","x");
        }
    }

    // Optionally handle message property (commented out in original)
    // if (data.message) {
    //     window.ccModalMakeOpen(data.Message, "Results");
    // }

    return returnValue;
}

//                  ~~~~~~~~~~~~~~~~~~~ Comms Functions END~~~~~~~~~~~~~~~~~                   \\

//                  ~~~~~~~~~~~~~~~~~ Page Function Calls ~~~~~~~~~~~~~~~~~~  

/**
 * Safely calls a global function by name, optionally passing data.
 * - If the function exists on the window object, it is called with or without data.
 * - If the function does not exist, returns the data unchanged.
 * - Useful for optional hooks or callbacks.
 *
 * @export
 * @param {string|Function} func - The function name (string) or function reference.
 * @param {*} [data] - Optional data to pass to the function.
 * @returns {*} The result of the function call, or the data if not called.
 * @memberof ccUtilities
 * @example
 * functionCall("myCallback", { foo: "bar" });
 * functionCall(myCallback, { foo: "bar" });
 */
export function functionCall(func, data) {
    // If a function reference is passed, call it directly
    if (typeof func === "function") {
        return data === undefined ? func() : func(data);
    }
    // If a string is passed, look for a global function
    if (typeof func === "string" && typeof window[func] === "function") {
        return data === undefined ? window[func]() : window[func](data);
    }
    // If no function found, return the data
    return data;
}

/**
 * Safely calls a global async function by name or reference, optionally passing data.
 * - If the function exists (as a reference or on window), calls it with or without data and awaits the result.
 * - If the function does not exist, returns the data unchanged.
 * - Useful for optional async hooks or callbacks.
 *
 * @export
 * @param {string|Function} func - The async function name (string) or function reference.
 * @param {*} [data] - Optional data to pass to the function.
 * @returns {Promise<*>} The awaited result of the function call, or the data if not called.
 * @memberof ccUtilities
 * @example
 * await functionCallAsync("myAsyncCallback", { foo: "bar" });
 * await functionCallAsync(myAsyncCallback, { foo: "bar" });
 */
export async function functionCallAsync(func, data) {
    // If a function reference is passed, call it directly
    if (typeof func === "function") {
        return data === undefined ? await func() : await func(data);
    }
    // If a string is passed, look for a global function
    if (typeof func === "string" && typeof window[func] === "function") {
        return data === undefined ? await window[func]() : await window[func](data);
    }
    // If no function found, return the data
    return data;
}

/**
 * Records what DOM element the user last used
 *
 * @param {*} ele element to restore location later on
 * @memberof ccUtilities
 */
export function setWhereWasI(ele){
    whereWasI=ele;
}

/**
 * Returns the user to the last-used DOM element (recorded by setWhereWasI).
 * - Scrolls the element into view and focuses it if possible.
 * - Does not depend on any custom extensions (no utlGoTo).
 * - Clears the whereWasI reference after use.
 *
 * @export
 * @memberof ccUtilities
 * @example
 * setWhereWasI(someElement);
 * takeMeBack();
 */
export function takeMeBack() {
    if (typeof whereWasI !== "undefined" && whereWasI) {
        // Scroll the element into view
        if (typeof whereWasI.scrollIntoView === "function") {
            whereWasI.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        // Focus the element if possible
        if (typeof whereWasI.focus === "function") {
            whereWasI.focus();
        }
    }
    whereWasI = undefined;
}

/**
 * Positions a popup relative to an activator button based on screen quadrants.
 * - Uses getBoundingClientRect for accurate positioning.
 * - Handles edge cases and ensures popup stays within viewport.
 *
 * @export
 * @param {HTMLElement} activator - The button or element that activates the popup.
 * @param {HTMLElement} popup - The popup element to position.
 * @param {number} [xAdj=15] - Horizontal adjustment in pixels.
 * @param {number} [yAdj=15] - Vertical adjustment in pixels.
 * @memberof ccUtilities
 */
export function adjustPopupToKey(activator, popup, xAdj = 15, yAdj = 15) {
    if (!(activator instanceof HTMLElement) || !(popup instanceof HTMLElement)) {
        console.warn("adjustPopupToKey: activator and popup must be DOM elements.");
        return;
    }

    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    const winHeightThird = winHeight / 3;
    const winWidthThird = winWidth / 3;

    const actRect = activator.getBoundingClientRect();
    const pupRect = popup.getBoundingClientRect();

    // Determine quadrant
    let vert = actRect.top < winHeightThird ? "T" :
               actRect.top < winHeightThird * 2 ? "C" : "B";
    let horiz = actRect.left < winWidthThird ? "L" :
                actRect.left < winWidthThird * 2 ? "C" : "R";
    const quadrant = vert + horiz;

    // Calculate positions
    let left, top;
    switch (quadrant) {
        case "TL":
            left = actRect.right + xAdj;
            top = actRect.bottom + yAdj;
            break;
        case "TC":
            left = actRect.left + actRect.width / 2 + xAdj;
            top = actRect.bottom + yAdj;
            break;
        case "TR":
            left = actRect.left - pupRect.width - xAdj;
            top = actRect.bottom + yAdj;
            break;
        case "BL":
            left = actRect.right + xAdj;
            top = actRect.top - pupRect.height - yAdj;
            break;
        case "BC":
            left = actRect.left + actRect.width / 2 + xAdj;
            top = actRect.top - pupRect.height - yAdj;
            break;
        case "BR":
            left = actRect.left - pupRect.width - xAdj;
            top = actRect.top - pupRect.height - yAdj;
            break;
        case "CL":
            left = actRect.right + xAdj;
            top = actRect.top + yAdj;
            break;
        case "CR":
            left = actRect.left - pupRect.width - xAdj;
            top = actRect.top + yAdj;
            break;
        default:
            left = actRect.left - pupRect.width - xAdj;
            top = actRect.bottom - yAdj;
            break;
    }

    // Ensure popup stays within viewport
    left = Math.max(0, Math.min(left, winWidth - pupRect.width));
    top = Math.max(0, Math.min(top, winHeight - pupRect.height));

    popup.style.position = "absolute";
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
}


/**
 * Opens a new window with given url 
 *
 * @param {*} url url for popup
 * @memberof ccUtilities
 */
export function openUrlClean(url) {
    let newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
}
/**
 * get a property by name 
 *
 * @param {*} theProperty property you wish the value from
 * @returns value of field specified
 * @memberof ccUtilities
 */
export function get(theProperty) {
    return this[theProperty];
}
/**
 * sets the value of a property by name 
 *
 * @param {*} theProperty property you wish to set the value of
 * @param {*} value value to set it to
 * @returns property value given
 * @memberof ccUtilities
 */
export function set(theProperty,value) {
    return this[theProperty]=value;
}
/**
 * Time of day for logging
 *
 * @returns
 * @memberof ccUtilities
 */
export function timeOfDay() {
    let d = new Date();
    return d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
}
/**
 * Returns details of this object 
 *
 * @returns details of this object
 * @memberof ccUtilities
 */
export function toString() {
    let rtn="";
    for(const [key, value] of Object.entries(this)){
        rtn += key + ": " + value + "<br/>";
    }
    return rtn;
}
//                  ~~~~~~~~~~~~~~~~~ Page Function Calls END~~~~~~~~~~~~~~~                   \\
//                  ~~~~~~~~~~~~~~~~~ Globaljavascript Leftovers Functions ~~~~~~~~~~~~~~~~~~                   \\


/**
 * Creates and displays a custom modal box with configurable content and buttons.
 * - Not a Bootstrap modal; uses custom logic and JML.
 * - Restores focus to a specified element after closing, if provided.
 * - All parameters are optional except body.
 *
 * @export
 * @param {string|Object} body - HTML string or JML for modal body.
 * @param {string} [title="Message from CATS System"] - Modal title.
 * @param {string} [buttonLeftText] - Text for left button.
 * @param {Function} [buttonLeftCall] - Callback for left button.
 * @param {string} [buttonCenterText] - Text for center button.
 * @param {Function} [buttonCenterCall] - Callback for center button.
 * @param {string} [buttonRightText] - Text for right button.
 * @param {Function} [buttonRightCall] - Callback for right button.
 * @param {string} [headerBackgroundColor] - Header background color.
 * @param {string} [modalSize] - Modal size ("large" for wide).
 * @param {boolean} [hideClosingX=false] - Hide the closing X button.
 * @param {HTMLElement} [elem] - Element to focus after modal closes.
 * @param {string} [cloneId] - ID to clone modal from (rarely used).
 * @returns {Promise<HTMLElement>} The modal element.
 * @memberof ccUtilities
 */
export async function modalBox(
    body,
    title = "Message from CATS System",
    buttonLeftText,
    buttonLeftCall,
    buttonCenterText,
    buttonCenterCall,
    buttonRightText,
    buttonRightCall,
    headerBackgroundColor,
    modalSize,
    hideClosingX = false,
    elem,
    cloneId
) {
    // Generate unique ID if not provided
    const id = cloneId || `modalBoxCall${guid(true)}`;
    const cfg = { id };

    // Header
    cfg.titleText = title;
    if (headerBackgroundColor) cfg.headerJML = { c: headerBackgroundColor };

    // Dialog size
    if (modalSize === "large") cfg.dialogJML = { c: "modal-lg" };

    // Body
    if (isJson(body)) {
        cfg.bodyJML = body;
    } else if (isHtml(body)) {
        cfg.bodyJML = htmlToJML(body);
    } else {
        cfg.messageText = body;
    }

    // Buttons
    const buttons = [];
    const addButton = (text, call) => {
        if (text && typeof call === "function") {
            buttons.push({
                n: "cc-event-button",
                i: `gen${guid(true)}`,
                c: "cc-event-button btn btn-SaddleBrown text-SandyBrown",
                t: text,
                alab: text,
                e: call
            });
        }
    };
    addButton(buttonLeftText, buttonLeftCall);
    addButton(buttonCenterText, buttonCenterCall);
    addButton(buttonRightText, buttonRightCall);

    cfg.buttons = buttons;
    cfg.addCloseButton = !buttonRightText || !buttonRightCall;
    cfg.hasCloseXButton = !hideClosingX;

    // Create and show modal
    const mdlBx = await ccModalConfigOpen(cfg);

    // Accessibility: restore focus after close
    if (elem instanceof HTMLElement) {
        mdlBx.addEventListener("hidden", () => {
            elem.focus();
        });
    }

    // Special styling for session expired/ROB
    if (title === "Your Session Has Expired!!" || title === robheaderHtml) {
        mdlBx.style += ";z-index: 6065;";
    }

    // Ensure modal is focusable
    mdlBx.setAttribute("tabindex", "-1");
    mdlBx.focus();

    return mdlBx;
}

/**
 * Handles the user's acknowledgment of the Rules of Behavior modal.
 * - Posts acknowledgment to the server.
 * - Redirects or closes modal based on server response.
 * - Provides user feedback on error.
 *
 * @export
 * @param {Object} modal - The modal instance to close (should have closeForConfig method).
 * @returns {Promise<void>}
 * @memberof ccUtilities
 */
export async function robAcknowledge(modal) {
    try {
        const robAckString=JSON.stringify({ robAck: true });
        const ackReturn = await apiPostDirect(`/HOME/ROBApi/`,robAckString,"json");

        if (ackReturn?.isAuthenticated) {
            const viewNoHost = location.href.replace(location.host, "").replace("https://", "");
            const view = viewNoHost.split("/").filter(Boolean).pop();
            if (view === "ROB" || !view || ackReturn?.currentApp?.appName === "Home") {
                location.href = "/Home/Index";
            } else {
                if (modal?.closeForConfig) modal.closeForConfig();
                if (document.querySelector("#robContainer")) {
                    location.href = `/${ackReturn.currentApp.controllerName}/${ackReturn.currentApp.actionName}`;
                }
            }
        } else {
            await modalBox(
                "Cannot log you in! Returned Bad.",
                "Error Occurred!",
                "OK",
                () => { if (modal?.closeForConfig) modal.closeForConfig(); }
            );
        }
    } catch (err) {
        await modalBox(
            `An error occurred while acknowledging Rules of Behavior.<br/>${err?.message || err}`,
            "Error Occurred!",
            "OK",
            () => { if (modal?.closeForConfig) modal.closeForConfig(); }
        );
    }
    // clean up via starts with ROBccModal
    document.querySelectorAll("[id^='ROBccModal']").forEach(modalEl => {
        modalEl.remove();
    });
}


/**
 * Displays the Rules of Behavior modal dialog.
 * - Uses robObject() for modal content.
 * - Handles button click to acknowledge rules.
 * - Ensures accessibility and focus management.
 *
 * @export
 * @returns {Promise<void>}
 * @memberof ccUtilities
 */
export async function rulesOfBehaviorShow() {
    const idmask = guid(true).substring(0, 8);
    const cfg = {
        id: `ROBccModal${idmask}`,
        addCloseButton: false,
        closeOnBackgroundClick: false,
        dialogSize: "m-5",
        contentJML: { i: `ModalContent${idmask}`, c: "modal-content text-start border-3 border-dark shadow shadow-xl rounded-3", b: [] },
        // headerJML: {
        //     c: "card-header text-center p-2",
        //     s: "background-color: #00539b",
        //     i: `DIV${idmask}`,
        //     b: [{
        //         s: "height: 35px; width: 75px;",
        //         src: "/images/cms_logo_header.png",
        //         alt: "Centers for Medicare & Medicaid Logo",
        //         ttl: "Centers for Medicare & Medicaid Logo",
        //         n: "img",
        //         i: `IMG${idmask}`
        //     }]
        // },
        bodyJML: robObject(idmask),
        hasOverlay: true
    };

    // Add footer with button
     //cfg.footerJML = //[{
    //     c: "card-footer text-center small p-2 bg-light border border-1 border-dark",
    //     i: `DIV${guid(true)}`,
    //     b: [{
    //         type: "button",
    //         t: "I Accept The Rules Of Behavior",
    //         c: "btn btn-primary mt-2",
    //         n: "button",
    //         i: `BUTTON${idmask}`
    //     }]
    // }];

    // Show modal
    const robModal = await ccModalConfigOpen(cfg);

    // Accessibility: focus modal
    robModal.setAttribute("tabindex", "-1");
    robModal.focus();

    // Button event
    const robBtn = document.querySelector(`#BUTTON${idmask}`);
    if (robBtn) {
        robBtn.addEventListener("click", () => {
            robAcknowledge(robModal);
        });
    }
}

/**
 * Returns the JML object for the Rules of Behavior modal content.
 * - Accepts a unique idmask for element IDs.
 * - Used by rulesOfBehaviorShow for modal construction.
 *
 * @export
 * @param {string} idmask - Unique identifier for modal elements.
 * @returns {Array<Object>} JML array for modal content.
 * @memberof ccUtilities
 */
// export function robObject(idmask) {
//     if (!idmask) idmask = guid(true).substring(0, 8);
//     return [
//         {
//             c: "card",
//             i: `DIV${idmask}`,
//             b: [
//                 {
//                     c: "card-header text-center p-2",
//                     s: "background-color: #00539b",
//                     i: `DIV${idmask}`,
//                     b: [
//                         {
//                             s: "height: 35px; width: 75px;",
//                             src: "/images/cms_logo_header.png",
//                             alt: "Centers for Medicare & Medicaid Logo",
//                             ttl: "Centers for Medicare & Medicaid Logo",
//                             n: "img",
//                             i: `IMG${idmask}`
//                         }
//                     ]
//                 },
//                 {
//                     c: "card-body bg-lightgrey",
//                     i: "main",
//                     b: [
//                         {
//                             c: "card-title h6 text-center font-weight-bold",
//                             t: "Welcome to CMS Administrative Technology Solutions (CATS)",
//                             n: "h1",
//                             i: `H1${idmask}`
//                         },
//                         {
//                             c: "card-title mb-1 small font-weight-bold",
//                             t: "This system is provided for Government authorized use only:",
//                             n: "h2",
//                             i: `H2${idmask}`
//                         },
//                         {
//                             c: "mb-1 small",
//                             n: "ul",
//                             i: `UL${idmask}`,
//                             b: [
//                                 {
//                                     t: "This warning banner provides privacy and security notices consistent with applicable federal laws, directives, and other federal guidance for accessing this Government system, which includes (1) this computer network, (2) all computers connected to this network, and (3) all devices and storage media attached to this network or to a computer on this network.",
//                                     n: "li",
//                                     i: `LI1${idmask}`
//                                 },
//                                 {
//                                     t: "This system is provided for Government authorized use only.",
//                                     n: "li",
//                                     i: `LI2${idmask}`
//                                 },
//                                 {
//                                     t: "Unauthorized or improper use of this system is prohibited and may result in disciplinary action and/or civil and criminal penalties.",
//                                     n: "li",
//                                     i: `LI3${idmask}`
//                                 },
//                                 {
//                                     t: "Personal use of social media and networking sites on this system is limited as to not interfere with official work duties and is subject to monitoring.",
//                                     n: "li",
//                                     i: `LI4${idmask}`
//                                 },
//                                 {
//                                     t: "By using this system, you understand and consent to the following:",
//                                     n: "li",
//                                     i: `LI5${idmask}`
//                                 },
//                                 {
//                                     t: "The Government may monitor, record, and audit your system usage, including usage of personal devices and email systems for official duties or to conduct HHS business. Therefore, you have no reasonable expectation of privacy regarding any communication or data transiting or stored on this system. At any time, and for any lawful Government purpose, the government may monitor, intercept, and search and seize any communication or data transiting or stored on this system.",
//                                     n: "li",
//                                     i: `LI6${idmask}`
//                                 },
//                                 {
//                                     t: "Any communication or data transiting or stored on this system may be disclosed or used for any lawful Government purpose.",
//                                     n: "li",
//                                     i: `LI7${idmask}`
//                                 }
//                             ]
//                         },
//                         {
//                             c: "card-text mb-1 small font-weight-bold",
//                             t: "CATS Rules of Behavior:",
//                             n: "h2",
//                             i: `H2b${idmask}`
//                         },
//                         {
//                             c: "mb-2 small",
//                             n: "ul",
//                             i: `ULb${idmask}`,
//                             b: [
//                                 {
//                                     t: "Please print documents to your local printer. If using a network printer, retrieve the printed document immediately. Never leave your desk with sensitive information on the computer screen. Never allow unauthorized individuals to view documents with sensitive information. Keep documents with sensitive information under lock and key. Shred documents with sensitive information that are no longer needed.",
//                                     n: "li",
//                                     i: `LIb${idmask}`
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     c: "card-footer text-center small p-2",
//                     i: `DIVfooter${idmask}`,
//                     b: [
//                         {
//                             s: "color: #dc1f1c",
//                             t: "CMS Sensitive Information – Requires Special Handling",
//                             i: `DIVfooter1${idmask}`
//                         },
//                         {
//                             c: "font-italic",
//                             t: "Developed by:",
//                             n: "span",
//                             i: `SPANfooter${idmask}`
//                         },
//                         {
//                             h: "https://cmsintranet.share.cms.gov/OIT/Pages/OIT.aspx",
//                             t: "OIT",
//                             c: "ms-1",
//                             s: "color: #006ce0",
//                             target: "_black",
//                             n: "a",
//                             i: `Afooter1${idmask}`
//                         },
//                         {
//                             c: "ms-1",
//                             t: "|",
//                             n: "span",
//                             i: `SPANfooter2${idmask}`
//                         },
//                         {
//                             h: "https://cmsintranet.share.cms.gov/OIT/Pages/IUSG.aspx",
//                             t: "IUSG",
//                             c: "ms-1",
//                             s: "color: #006ce0",
//                             target: "_blank",
//                             n: "a",
//                             i: `Afooter2${idmask}`
//                         },
//                         {
//                             c: "ms-1",
//                             t: "|",
//                             n: "span",
//                             i: `SPANfooter3${idmask}`
//                         },
//                         {
//                             h: "https://share.cms.gov/Office/OIT/IUSG/DASM/SitePages/LandingPage.aspx",
//                             t: "DASM",
//                             c: "ms-1",
//                             s: "color: #006ce0",
//                             target: "_blank",
//                             n: "a",
//                             i: `Afooter3${idmask}`
//                         },
//                         {
//                             i: "ServerIdentifier",
//                             c: "row justify-content-center d-print-none",
//                             b: [
//                                 {
//                                     c: "col-11 text-center",
//                                     i: `DIVfooter4${idmask}`,
//                                     b: [
//                                         {
//                                             s: "color: #00000008",
//                                             t: "DZ3",
//                                             ahid: "true",
//                                             i: `DIVfooter5${idmask}`
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             c: "text-center",
//             i: `DIVform${idmask}`,
//             b: [
//                 {
//                     action: "/CATS/ROBAccepted/",
//                     i: `FORM${idmask}`,
//                     b: [
//                         {
//                             type: "submit",
//                             t: "I Accept The Rules Of Behavior",
//                             c: "btn btn-primary mt-2",
//                             n: "button",
//                             i: `BUTTON${idmask}`
//                         }
//                     ]
//                 }
//             ]
//         }
//     ];
// }

function documentation() {
            return {
                class: "ccUtilities",
                type: "Module",
                namespace: "CatsCRUDL",
                namespaceUrl: "/js/global/CatsCRUDL/ccUtilities.js",
                source: "ccUtilities.js",
                sourceUrl: "/js/global/CatsCRUDL/ccUtilities.js",
                description: "The `ccUtilities` module provides core utility functions for DOM manipulation, string handling, form helpers, modal dialogs, error handling, API communication, and page logic in CATS applications. All functions are designed for portability, accessibility, and minimal dependencies.",
                language: "JavaScript",
                properties: [
                    { name: "whereWasI", description: "Reference to the last-used DOM element for navigation.", type: "HTMLElement|null" },
                    { name: "quietComms", description: "Flag for quiet communication mode.", type: "boolean" },
                    { name: "trackId", description: "Global tracking ID for API calls.", type: "number" },
                    { name: "signal", description: "AbortController signal for fetch requests.", type: "AbortSignal" }
                ],
                methods: [
                    // DOM Functions
                    { name: "addCSSLink", description: "Adds a CSS file to the page.", params: [{ name: "cssId", type: "string" }, { name: "url", type: "string" }, { name: "opts", type: "object" }], returns: "void" },
                    { name: "addJsScript", description: "Adds a JavaScript file to the page.", params: [{ name: "jsId", type: "string" }, { name: "url", type: "string" }, { name: "type", type: "string" }, { name: "isAsync", type: "boolean" }, { name: "opts", type: "object" }], returns: "void" },
                    { name: "append", description: "Appends HTML or an element to a target element.", params: [{ name: "element", type: "HTMLElement" }, { name: "htmlOrElement", type: "string|HTMLElement" }], returns: "void" },
                    { name: "css", description: "Gets or sets CSS style properties for an element.", params: [{ name: "ele", type: "HTMLElement" }, { name: "attr", type: "string|object" }, { name: "val", type: "string" }], returns: "HTMLElement|CSSStyleDeclaration" },
                    { name: "elementHide", description: "Hides element(s) by adding Bootstrap's `d-none` class.", params: [{ name: "eles", type: "HTMLElement|NodeList|Array" }], returns: "HTMLElement|Array" },
                    { name: "elementRemove", description: "Removes element(s) from the DOM.", params: [{ name: "eles", type: "HTMLElement|NodeList|Array" }], returns: "HTMLElement|Array" },
                    { name: "elementShow", description: "Shows element(s) by removing Bootstrap's `d-none` and `collapse` classes.", params: [{ name: "eles", type: "HTMLElement|NodeList|Array" }], returns: "HTMLElement|Array" },
                    { name: "getEle", description: "Gets the first DOM element matching a query selector.", params: [{ name: "src", type: "Element|string" }, { name: "q", type: "string" }], returns: "Element" },
                    { name: "getEles", description: "Gets all DOM elements matching a query selector.", params: [{ name: "src", type: "Element|string" }, { name: "q", type: "string" }], returns: "NodeList|Element" },
                    { name: "getVal", description: "Gets or sets the value of an input, select, textarea, or other element.", params: [{ name: "ele", type: "HTMLElement" }, { name: "val", type: "any" }], returns: "any|HTMLElement" },
                    { name: "isCheck", description: "Checks the state or type of a DOM element.", params: [{ name: "ele", type: "HTMLElement|NodeList|Array" }, { name: "checkType", type: "string" }], returns: "boolean" },
                    { name: "off", description: "Removes an event listener from element(s).", params: [{ name: "eles", type: "HTMLElement|NodeList|Array" }, { name: "event", type: "string" }, { name: "func", type: "Function" }], returns: "boolean" },
                    { name: "on", description: "Adds an event listener to element(s).", params: [{ name: "eles", type: "HTMLElement|NodeList|Array" }, { name: "event", type: "string" }, { name: "func", type: "Function" }], returns: "boolean" },
                    { name: "prepend", description: "Prepends HTML or an element to the target element.", params: [{ name: "element", type: "HTMLElement" }, { name: "htmlOrElement", type: "string|HTMLElement" }], returns: "void" },
                    { name: "placeAfter", description: "Inserts HTML or an element immediately after the target element.", params: [{ name: "element", type: "HTMLElement" }, { name: "htmlOrElement", type: "string|HTMLElement" }], returns: "void" },
                    { name: "placeBefore", description: "Inserts HTML or an element immediately before the target element.", params: [{ name: "element", type: "HTMLElement" }, { name: "htmlOrElement", type: "string|HTMLElement" }], returns: "void" },
                    { name: "unbind", description: "Removes all event listeners from element(s) by replacing each with a clone.", params: [{ name: "eles", type: "HTMLElement|NodeList|Array" }], returns: "void" },

                    // Code Functions
                    { name: "any", description: "Returns true if any items in the array satisfy the predicate function.", params: [{ name: "fn", type: "Function" }], returns: "boolean" },
                    { name: "alterEncapse", description: "Replaces all occurrences of a specified encapsulation character in a string.", params: [{ name: "str", type: "string" }, { name: "encapseOne", type: "string" }, { name: "encapseOneReplace", type: "string" }], returns: "string" },
                    { name: "unAlterEncapse", description: "Reverses the effect of alterEncapse.", params: [{ name: "str", type: "string" }, { name: "encapseOne", type: "string" }, { name: "encapseOneReplace", type: "string" }], returns: "string" },
                    { name: "asAlphaNumeric", description: "Removes all non-alphanumeric characters from a string.", params: [{ name: "str", type: "string" }], returns: "string" },
                    { name: "asBool", description: "Converts a value to a boolean, supporting common string and numeric representations.", params: [{ name: "value", type: "any" }], returns: "boolean" },
                    { name: "asElementId", description: "Ensures a string is a valid CSS ID selector.", params: [{ name: "id", type: "string" }], returns: "string" },
                    { name: "asFieldNotationString", description: "Converts a string to camel (field) notation for property names.", params: [{ name: "str", type: "string" }], returns: "string" },
                    { name: "asHtml5DateFormat", description: "Converts a JavaScript Date object to an HTML5 date string.", params: [{ name: "date", type: "Date|string|number" }], returns: "string" },
                    { name: "asDateParts", description: "Breaks a date into its component parts.", params: [{ name: "dateIn", type: "Date|string|number" }], returns: "Object" },
                    { name: "asInt", description: "Converts a value to an integer if it is numeric.", params: [{ name: "value", type: "any" }], returns: "number" },
                    { name: "asFloat", description: "Converts a value to a floating-point number if it is numeric.", params: [{ name: "value", type: "any" }], returns: "number" },
                    { name: "asPascalCase", description: "Converts a string to PascalCase.", params: [{ name: "str", type: "string" }], returns: "string" },
                    { name: "asPropertyNotation", description: "Converts a string to Pascal property notation.", params: [{ name: "str", type: "string" }], returns: "string" },
                    { name: "asString", description: "Converts any value to a string, with optional radix for numbers.", params: [{ name: "value", type: "any" }, { name: "size", type: "number" }], returns: "string" },
                    { name: "camelToTitle", description: "Converts a camelCase or PascalCase string to a human-readable title.", params: [{ name: "str", type: "string" }], returns: "string" },
                    { name: "checkSetDefault", description: "Given an object and a default, sets the property after creating it.", params: [{ name: "obj", type: "any" }, { name: "props", type: "any" }, { name: "setTo", type: "any" }], returns: "any" },
                    { name: "chunkString", description: "Splits a string into chunks of a specified length.", params: [{ name: "str", type: "string" }, { name: "length", type: "number" }], returns: "string[]" },
                    { name: "clip", description: "Clips a string to a maximum length.", params: [{ name: "text", type: "string" }, { name: "maxLength", type: "number" }], returns: "string" },
                    { name: "delay", description: "Returns a Promise that resolves after a specified delay in milliseconds.", params: [{ name: "ms", type: "number" }], returns: "Promise<void>" },
                    { name: "disableScroll", description: "Disables page scrolling by locking the current scroll position.", params: [], returns: "void" },
                    { name: "enableScroll", description: "Re-enables page scrolling by restoring the default scroll behavior.", params: [], returns: "void" },
                    { name: "endsWith", description: "Determines if a string ends with the given search string.", params: [{ name: "str", type: "string" }, { name: "check", type: "string" }, { name: "ignore", type: "boolean" }], returns: "boolean" },
                    { name: "fillFrom", description: "Copies properties from the `fill` object to the `base` object.", params: [{ name: "base", type: "Object" }, { name: "fill", type: "Object" }], returns: "Object" },
                    { name: "findAllIndexesOf", description: "Finds all indexes of a substring within a string.", params: [{ name: "text", type: "string" }, { name: "search", type: "string" }], returns: "number[]" },
                    { name: "getIndicesOf", description: "Gets all starting indexes of a substring within a string.", params: [{ name: "searchIn", type: "string" }, { name: "searchFor", type: "string" }, { name: "caseSensitive", type: "boolean" }], returns: "number[]" },
                    { name: "getType", description: "Gets the type name of an object, similar to .NET style.", params: [{ name: "obj", type: "any" }], returns: "string" },
                    { name: "guid", description: "Generates a random GUID (Globally Unique Identifier).", params: [{ name: "nodash", type: "boolean" }], returns: "string" },
                    { name: "htmlDecode", description: "Decodes HTML entities in a string.", params: [{ name: "value", type: "string" }], returns: "string" },
                    { name: "htmlEncode", description: "Encodes a string to HTML entities.", params: [{ name: "value", type: "string" }], returns: "string" },
                    { name: "htmlEncodedStrip", description: "Decodes HTML entities and strips all HTML tags.", params: [{ name: "value", type: "string" }], returns: "string" },
                    { name: "htmlToJML", description: "Converts a DOM element (and its children) to a JSON Markup Language (JML) object.", params: [{ name: "htmlEle", type: "HTMLElement" }], returns: "Object" },
                    { name: "isBool", description: "Determines if a value is strictly a boolean (true or false).", params: [{ name: "obj", type: "any" }], returns: "boolean" },
                    { name: "isElement", description: "Determines if the given object is a DOM Element.", params: [{ name: "obj", type: "any" }], returns: "boolean" },
                    { name: "isEmpty", description: "Determines if an object, array, or string is empty.", params: [{ name: "obj", type: "any" }], returns: "boolean" },
                    { name: "isHtml", description: "Determines if a string contains HTML tags.", params: [{ name: "str", type: "string" }], returns: "boolean" },
                    { name: "isJson", description: "Determines if a value is valid JSON.", params: [{ name: "str", type: "any" }], returns: "boolean" },
                    { name: "isNode", description: "Determines if the given object is a DOM Node.", params: [{ name: "obj", type: "any" }], returns: "boolean" },
                    { name: "isNotEmpty", description: "Determines if an object, array, or string is not empty.", params: [{ name: "obj", type: "any" }], returns: "boolean" },
                    { name: "isNumeric", description: "Determines if a value is numeric.", params: [{ name: "obj", type: "any" }], returns: "boolean" },
                    { name: "jmlToHtml", description: "Converts a DOM element (and its children) to a JSON Markup Language (JML) object. DEPRECATED: use jmlToHtml.", params: [{ name: "jsonIn", type: "any" }, { name: "tabs", type: "any" }], returns: "HTML" },
                    { name: "jmlToHtml", description: "Converts a JML object to HTML.", params: [{ name: "jsonIn", type: "any" }, { name: "tabs", type: "any" }], returns: "HTML" },
                    { name: "objectKeysToCamelCase", description: "Converts all keys of an object to camelCase.", params: [{ name: "obj", type: "Object" }], returns: "Object" },
                    { name: "startsWith", description: "Determines if a string starts with the given search string.", params: [{ name: "str", type: "string" }, { name: "check", type: "string" }, { name: "ignore", type: "boolean" }], returns: "boolean" },
                    { name: "stringifyNumber", description: "Converts a number into its English ordinal string.", params: [{ name: "n", type: "number" }], returns: "string" },
                    { name: "textBetween", description: "Returns the text found between two substrings in a string.", params: [{ name: "str", type: "string" }, { name: "start", type: "string" }, { name: "end", type: "string" }], returns: "string" },
                    { name: "toTitle", description: "Converts a string to title case (each word capitalized).", params: [{ name: "str", type: "string" }], returns: "string" },
                    { name: "trim", description: "Trims whitespace from a string.", params: [{ name: "str", type: "string" }], returns: "string" },

                    // Form Functions
                    { name: "formClear", description: "Clears all input, select, and textarea values in a web form.", params: [{ name: "form", type: "HTMLFormElement" }], returns: "void" },
                    { name: "formEnabled", description: "Enables or disables all input, select, and textarea fields in a web form.", params: [{ name: "form", type: "HTMLFormElement" }, { name: "enabled", type: "boolean" }], returns: "void" },
                    { name: "formFill", description: "Fills a web form's fields with values from a data object.", params: [{ name: "form", type: "HTMLFormElement" }, { name: "data", type: "Object" }], returns: "void" },
                    { name: "formToJson", description: "Serializes a web form's fields into a JSON object.", params: [{ name: "form", type: "HTMLFormElement" }], returns: "Object" },

                    // Create Files Functions
                    { name: "makeICS", description: "Generates an ICS (iCalendar) file content string from event details.", params: [{ name: "event", type: "Object" }], returns: "string" },
                    { name: "setICSFunc", description: "Triggers a download of an ICS (iCalendar) file from event details.", params: [{ name: "event", type: "Object" }, { name: "filename", type: "string" }], returns: "void" },

                    // External Functions
                    { name: "unobtrusiveWait", description: "Displays a non-blocking wait/loading message to the user.", params: [{ name: "message", type: "string" }], returns: "void" },
                    { name: "unobtrusiveWaitOff", description: "Hides and removes the unobtrusive wait/loading overlay.", params: [], returns: "void" },

                    // Comms Functions
                    { name: "apiPost", description: "Makes an API call to a server endpoint using fetch.", params: [{ name: "apiPrefix", type: "string" }, { name: "dataUp", type: "Object|string" }, { name: "messageReceiverDataType", type: "string" }, { name: "method", type: "string" }], returns: "Promise<Object>" },
                    { name: "apiPostDirect", description: "Makes a direct API call to a specified URL using fetch.", params: [{ name: "url", type: "string" }, { name: "dataUp", type: "Object|string" }, { name: "messageReceiverDataType", type: "string" }, { name: "noPost", type: "boolean" }], returns: "Promise<Object>" },
                    { name: "jsonToQueryString", description: "Converts a JSON object into a URL query string.", params: [{ name: "jsonObj", type: "Object|string" }], returns: "string" },
                    { name: "commsResponseStatusHandle", description: "Handles the response status of a fetch call, parsing JSON if successful.", params: [{ name: "res", type: "Response" }, { name: "resObj", type: "any" }], returns: "Promise<Object>" },
                    { name: "dispatch", description: "Use to communicate to classes/components calling a function.", params: [{ name: "receiver", type: "any" }, { name: "caller", type: "any" }, { name: "job", type: "string" }, { name: "data", type: "any" }], returns: "Promise<any>" },
                    { name: "receiptCheckGood", description: "Checks for errors in server responses and handles them appropriately.", params: [{ name: "data", type: "any" }, { name: "toDb", type: "boolean" }, { name: "call", type: "Function" }], returns: "Promise<boolean>" },
                    { name: "reportErrorObject", description: "Checks for errors from the server and logs the errors.", params: [{ name: "data", type: "any" }, { name: "toDb", type: "boolean" }, { name: "call", type: "Function" }], returns: "Promise<void>" },
                    { name: "errorLog", description: "Compiles an error object and sends it to the logError function for server logging.", params: [{ name: "logMessage", type: "string" }, { name: "logException", type: "string" }, { name: "className", type: "string" }, { name: "methodName", type: "string" }, { name: "logSeverity", type: "number" }, { name: "logType", type: "string" }, { name: "logApp", type: "string" }, { name: "server", type: "string" }, { name: "taskDefinitionIdentifier", type: "number" }, { name: "taskDefinitionTitle", type: "string" }], returns: "void" },
                    { name: "logError", description: "Sends a structured error log object to the server asynchronously.", params: [{ name: "error", type: "Object" }], returns: "Promise<void>" },
                    { name: "makeAlert", description: "Creates a Bootstrap 5 alert element as a JML object.", params: [{ name: "alert", type: "string" }, { name: "alias", type: "string" }, { name: "type", type: "string" }], returns: "Object" },
                    { name: "makeAlertJML", description: "Creates a Bootstrap 5 alert as a JML object with custom id, text, and class.", params: [{ name: "idAdd", type: "string" }, { name: "text", type: "string" }, { name: "clazz", type: "string" }], returns: "Object" },
                    { name: "objectKeysToCamelCase", description: "Converts all keys of an object to camelCase.", params: [{ name: "obj", type: "Object" }], returns: "Object" },

                    // Page Function Calls
                    { name: "functionCall", description: "Safely calls a global function by name, optionally passing data.", params: [{ name: "func", type: "string|Function" }, { name: "data", type: "any" }], returns: "any" },
                    { name: "functionCallAsync", description: "Safely calls a global async function by name or reference, optionally passing data.", params: [{ name: "func", type: "string|Function" }, { name: "data", type: "any" }], returns: "Promise<any>" },
                    { name: "setWhereWasI", description: "Records what DOM element the user last used.", params: [{ name: "ele", type: "any" }], returns: "void" },
                    { name: "takeMeBack", description: "Returns the user to the last-used DOM element.", params: [], returns: "void" },
                    { name: "adjustPopupToKey", description: "Positions a popup relative to an activator button based on screen quadrants.", params: [{ name: "activator", type: "HTMLElement" }, { name: "popup", type: "HTMLElement" }, { name: "xAdj", type: "number" }, { name: "yAdj", type: "number" }], returns: "void" },
                    { name: "openUrlClean", description: "Opens a new window with given url.", params: [{ name: "url", type: "string" }], returns: "void" },
                    { name: "get", description: "Gets a property by name.", params: [{ name: "theProperty", type: "any" }], returns: "any" },
                    { name: "set", description: "Sets the value of a property by name.", params: [{ name: "theProperty", type: "any" }, { name: "value", type: "any" }], returns: "any" },
                    { name: "timeOfDay", description: "Time of day for logging.", params: [], returns: "string" },
                    { name: "toString", description: "Returns details of this object.", params: [], returns: "string" },

                    // Modal and Rules of Behavior
                    { name: "modalBox", description: "Creates and displays a custom modal box with configurable content and buttons.", params: [{ name: "body", type: "string|Object" }, { name: "title", type: "string" }, { name: "buttonLeftText", type: "string" }, { name: "buttonLeftCall", type: "Function" }, { name: "buttonCenterText", type: "string" }, { name: "buttonCenterCall", type: "Function" }, { name: "buttonRightText", type: "string" }, { name: "buttonRightCall", type: "Function" }, { name: "headerBackgroundColor", type: "string" }, { name: "modalSize", type: "string" }, { name: "hideClosingX", type: "boolean" }, { name: "elem", type: "HTMLElement" }, { name: "cloneId", type: "string" }], returns: "Promise<HTMLElement>" },
                    { name: "robAcknowledge", description: "Handles the user's acknowledgment of the Rules of Behavior modal.", params: [{ name: "modal", type: "Object" }], returns: "Promise<void>" },
                    { name: "rulesOfBehaviorShow", description: "Displays the Rules of Behavior modal dialog.", params: [], returns: "Promise<void>" },
                    { name: "robObject", description: "Returns the JML object for the Rules of Behavior modal content.", params: [{ name: "idmask", type: "string" }], returns: "Array<Object>" },
                    { name: "robheaderHtml", description: "Returns the HTML for the Rules of Behavior modal header.", params: [], returns: "string" },
                    { name: "robTextHtml", description: "Returns the HTML for the Rules of Behavior modal text.", params: [], returns: "string" }
                ],
                dependencies: [
                    "Standard DOM APIs", "Bootstrap (for alerts/modals)", "Fetch API", "ccModal", "ccDOMUtil"
                ],
                exampleUsage: `
                    // Show an element
                    ccUtilities.elementShow(document.getElementById('myDiv'));
                    // Convert string to Title Case
                    ccUtilities.toTitle('my_string');
                    // Show a modal
                    ccUtilities.modalBox({ title: 'Info', body: 'Hello world!' });
                    // Make an API call
                    await ccUtilities.apiPost('/GetData', { id: 123 });
                `,
                notes: [
                    "All functions are standalone and do not require custom extensions.",
                    "Designed for use across CATS web components and pages.",
                    "Modal and alert helpers use Bootstrap classes for styling.",
                    "Checkbox helpers support single elements and arrays/NodeLists.",
                    "API helpers use fetch and return Promises for async operations.",
                    "Includes Rules of Behavior modal logic and helpers."
                ]
            };
        }



export function robObject(idmask) {
  if(!idmask) idmask = guid(true).substring(0, 8);
  const robObj = [
    {"c": "card","i": "DIV" + idmask,
        "b": [{"c": "card-header text-center p-2","s": "background-color: #00539b","i": "DIV" + idmask,
                "b": [{"s": "height: 35px; width: 75px;","src": "/images/cms_logo_header.png","alt": "Centers for Medicare & Medicaid Logo",
                        "ttl": "Centers for Medicare & Medicaid Logo","n": "img","i": "IMG" + idmask}]},
            {"c": "card-body bg-lightgrey","i": "main",
                "b": [{"c": "card-title h6 text-center font-weight-bold","t": "Welcome to CMS Administrative Technology Solutions (CATS)",
                        "n": "h1","i": "H1" + idmask},
                    {"c": "card-title mb-1 small font-weight-bold ","t": "This system is provided for Government authorized use only:",
                        "n": "h2","i": "H2" + idmask},
                    {"c": "mb-1 small","n": "ul","i": "UL" + idmask,
                        "b": [{"t": "This warning banner provides privacy and security notices consistent with applicable federal laws, directives, and other federal guidance for accessing this Government system, which includes (1) this computer network, (2) all computers connected to this network, and (3) all devices and storage media attached to this network or to a computer on this network.",
                                "n": "li","i": "LI1" + idmask},
                            {"t": "This system is provided for Government authorized use only.","n": "li","i": "LI065324ec39c5dac5f36c843b21bf43e0"},
                            {"t": "Unauthorized or improper use of this system is prohibited and may result in disciplinary action and/or civil and criminal penalties.",
                                "n": "li","i": "LI2" + idmask},
                            {"t": "Personal use of social media and networking sites on this system is limited as to not interfere with official work duties and is subject to monitoring.",
                                "n": "li","i": "LI3" + idmask},
                            {"t": "By using this system, you understand and consent to the following:","n": "li","i": "LI9af71b0679709db367131cce5fc57e81"},
                            {"t": "The Government may monitor, record, and audit your system usage, including usage of personal devices and email systems for official duties or to conduct HHS business. Therefore, you have no reasonable expectation of privacy regarding any communication or data transiting or stored on this system. At any time, and for any lawful Government purpose, the government may monitor, intercept, and search and seize any communication or data transiting or stored on this system.",
                                "n": "li","i": "LI4" + idmask},
                            {"t": "Any communication or data transiting or stored on this system may be disclosed or used for any lawful Government purpose.",
                                "n": "li","i": "LI5" + idmask}
                        ],},
                    {"c": "card-text mb-1 small font-weight-bold","t": "CATS Rules of Behavior:","n": "h2","i": "H27afc2592e7ed572dfc689f13dcb4fb85"},
                    {"c": "mb-2 small","n": "ul","i": "UL6a" + idmask,
                        "b": [{"t": "Please print documents to your local printer. If using a network printer, retrieve the printed document immediately. Never leave your desk with sensitive information on the computer screen. Never allow unauthorized individuals to view documents with sensitive information. Keep documents with sensitive information under lock and key. Shred documents with sensitive information that are no longer needed.",
                                "n": "li","i": "LId706e" + idmask
                            }]
                    }]},
            {"c": "card-footer text-center small p-2","i": "DIV806" + idmask,
                "b": [{"s": "color: #dc1f1c","t": "CMS Sensitive Information – Requires Special Handling","i": "DIVa9" + idmask},
                    {"c": "font-italic","t": "Developed by:","n": "span","i": "SPANb" + idmask},
                    {"h": "https://cmsintranet.share.cms.gov/OIT/Pages/OIT.aspx","t": "OIT","c": "ms-1","s": "color: #006ce0","target": "_black",
                        "n": "a","i": "Af42f0a8363a63c7bd9cd152e867f1637"},
                    {"c": "ms-1","t": "|","n": "span","i": "SPANa33" + idmask},
                    {"h": "https://cmsintranet.share.cms.gov/OIT/Pages/IUSG.aspx","t": "IUSG","c": "ms-1","s": "color: #006ce0","target": "_blank",
                        "n": "a","i": "A090" + idmask},
                    {"c": "ms-1","t": "|","n": "span","i": "SPAN2dd1" + idmask},
                    {"h": "https://share.cms.gov/Office/OIT/IUSG/DASM/SitePages/LandingPage.aspx","t": "DASM","c": "ms-1","s": "color: #006ce0",
                        "target": "_blank","n": "a","i": "Ab509" + idmask},
                    {"i": "ServerIdentifier","c": "row justify-content-center d-print-none",
                        "b": [{"c": "col-11 text-center","i": "DIVec6a0" + idmask,
                                "b": [{"s": "color: #00000008","t": "DZ3","ahid": "true","i": "DIV3d13" + idmask}]}
                            ]
                    }]}]},
    {"c": "text-center","i": "DIVf86133c7" + idmask,
        "b": [{"action": "/CATS/ROBAccepted/","i": "FORMb0b0e37" + idmask,
                "b": [{"type": "submit","t": "I Accept The Rules Of Behavior","c": "btn btn-primary mt-2","n": "button","i": "BUTTON" + idmask}
    ]}]}];
  return robObj;
}


export function robheaderHtml(){
    return `<img style="height: 35px; width: 75px;" src="/Content/images/CMS_logo_header.png" alt="Centers for Medicare & Medicaid Logo" title="Centers for Medicare & Medicaid Logo" />`;
}

export function robTextHtml(){
    return '<h1 class="card-title h6 text-center font-weight-bold">Welcome to CMS Administrative Technology Solutions (CATS)</h1>' +
    '<p class="card-title mb-1 small font-weight-bold ">This system is provided for Government authorized use only:</p>' +
    '<ul class="mb-1 small">' +
    '<li>This warning banner provides privacy and security notices consistent with applicable federal laws, directives, and other federal guidance for accessing this Government system, which includes (1) this computer network, (2) all computers connected to this network, and (3) all devices and storage media attached to this network or to a computer on this network.</li>' +
    '<li>This system is provided for Government authorized use only.</li>' +
    '<li>Unauthorized or improper use of this system is prohibited and may result in disciplinary action and/or civil and criminal penalties.</li>' +
    '<li>Personal use of social media and networking sites on this system is limited as to not interfere with official work duties and is subject to monitoring.</li>' +
    '<li>By using this system, you understand and consent to the following:</li>' +
    '<li>The Government may monitor, record, and audit your system usage, including usage of personal devices and email systems for official duties or to conduct HHS business. Therefore, you have no reasonable expectation of privacy regarding any communication or data transiting or stored on this system. At any time, and for any lawful Government purpose, the government may monitor, intercept, and search and seize any communication or data transiting or stored on this system.</li>' +
    '<li>Any communication or data transiting or stored on this system may be disclosed or used for any lawful Government purpose.</li>' +
    '</ul>' +
    '<p class="card-text mb-1 small font-weight-bold">CATS Rules of Behavior:</p>' +
        '<ul class="mb-2 small">' +
            '<li>' +
                    'Please print documents to your local printer.' +
                    'If using a network printer, retrieve the printed document immediately.' +
                    'Never leave your desk with sensitive information on the computer screen.' +
                    'Never allow unauthorized individuals to view documents with sensitive information.' +
                    'Keep documents with sensitive information under lock and key.' +
                    'Shred documents with sensitive information that are no longer needed.' +
            '</li>' +
        '</ul>';
}

//                  ~~~~~~~~~~~~~~~~~ END Globaljavascript Leftovers Functions ~~~~~~~~~~~~~~~~~~                \\

//Added back for lack in JS
export function replaceLast(str, search, replacement, caseInsensitive = false) {
  if (search === "") return str; // Edge case: empty search text
 
  // Handle case insensitivity
  let modifiedStr = str;
  let modifiedSearch = search;
  if (caseInsensitive) {
    modifiedStr = str.toLowerCase();
    modifiedSearch = search.toLowerCase();
  }
 
  const lastIndex = modifiedStr.lastIndexOf(modifiedSearch);
  if (lastIndex === -1) return str; // No match
 
  // Adjust index for original string (if case-insensitive)
  const originalIndex = caseInsensitive 
    ? str.indexOf(search, lastIndex) // Find exact case match at the lowercased index
    : lastIndex;
 
  return (
    str.substring(0, originalIndex) +
    replacement +
    str.substring(originalIndex + search.length)
  );
}



//------------------------------------------------------Support Functions

// /**
//  * generates a 4 character member of a guid
//  *
//  * @static
//  * @returns 4 character member of a guid
//  * @memberof ccUtilities
//  */
// function guidS4() {
//     return asString(Math.floor((1 + Math.random()) * 0x10000), 16).substring(1);
// }

// function repeatGuidFunc(times, delim) {
//     if (!delim) delim = '';
//     let rtn = "";
//     for (let i = 0; i < times; i++) {
//         rtn += guidS4() + ((i < (times - 1)) ? delim : "");
//     }
//     return rtn;
// }

document.addEventListener("DOMContentLoaded", function () {
    if(!window.util)window.util={};
    util.functionCall=functionCall;
});


window.sessionCountDown = null;

let page=location.href.endsWith("/")?location.href.slice(0,-1).split("/").pop():location.href.split("/").pop()

window.sessionTimer = () => {
    var timeout = 19 * 60 * 1000 + 30000; //20(*60)=20minutes (*1000 for milliseconds which this function expects)
    //var timeout = 1 * 30 * 1000;

    if(page!=="localhost:7038" && page!=="localhost:5032" && page!=="ROB" && page!=="UnAuthorized" && page!=="NewUser"){

        if (window.sessionCountDown === null) {
            window.sessionCountDown = setInterval(window.sessionUp, timeout);
        }

    }
};




window.sessionUp = () => {
  clearInterval(window.sessionCountDown);
  window.sessionCountDown = null;
  //sessionTimer();
  rulesOfBehaviorShow();
};

window.sessionActivity = (updateCSO) => {
  clearInterval(window.sessionCountDown);
  window.sessionCountDown = null;
  window.sessionTimer();
  if (!updateCSO) cts.updateSession(updateCSO);
};

window.sessionTimer();

//Js Storage
  //=================================================================================================================================================
  //                                                               Storage Functions
  //=================================================================================================================================================
      /**
     * Stores client data for user configs
     *
     * @param {*} data
     * @memberof ccTable
     */
    window.saveData = (key,value,bypass=false) => {
        if(!value) modalBox("Local Storage failed! No value provided","Error Saving Data");
        if(!key){
            console.log("Local Storage warning! No key provided. Storing as page specific.");
            key="";            
        }
        let fullKey=key;
        if(cso && !bypass){
            if(cso?.CurrentApp?.Url) fullKey=cso.CurrentApp.Url+"_"+key;
        } else{
            fullKey=location.href+"_"+key;
        }
        const cleanValue=typeof value==="object"?JSON.stringify(value):value;
        localStorage.setItem(fullKey, cleanValue);
    }
    /**
     * Retrieves client data for ccTable configs
     *
     * @return {*} 
     * @memberof ccTable
     */
    window.getData = (key,bypass=false) => {
        if(!key){
            console.log("Local Storage warning! No key provided. Retreiving as page specific.");
            key="";            
        }
        let fullKey=key;
        if(typeof cso === 'undefined' || bypass){
            fullKey=location.href+"_"+key;
        }else{
            if(cso?.CurrentApp?.Url) {
                fullKey=cso.CurrentApp.Url+"_"+key;
            }else{
                fullKey=location.href+"_"+key;
            }
        }
        const data=localStorage.getItem(fullKey);
        if(!data) {
            console.log("Local Storage warning! No data found for key: "+fullKey + "(simple key:" + key + ")");
            return null;  
        }
        if(isJson(data)) return JSON.parse(data);
        if(!data) return {};
        return data;
    }




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

