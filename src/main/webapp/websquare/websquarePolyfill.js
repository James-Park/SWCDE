(function() {
    /**
    CommonRuntime module
        String이나 Function과 같은 기본 객체에 추가 기능을 수행하는 함수를 첨부한다.



            9.1 String.wq_trim                                  String객체의 앞뒤 여백을 제거하는 함수를 추가로 정의한다
                9.2 String.capitalize                   String객체의 첫단어를 대문자로 변경하는 함수를 추가로 정의한다.
              9.3 String.startsWith                         String객체의 시작부분이 지정한 값과 일치하는지 테스트하는 함수를 추가로 정의한다.
              9.4 String.endsWith                           String객체의 끝부분이 지정한 값과 일치하는지 테스트하는 함수를 추가로 정의한다.
              9.5 String.capitalizeStyle            String객체의 값을 Style 값 변환 방식으로 변환하는 함수를 추가로 정의한다.

    주석 작업 완료 : 2007년 7월 27일 김욱래
 */
    /**
      String.wq_trim
        String객체의 앞뒤 여백을 제거하는 함수를 추가로 정의한다
            @return    trim 된 값이 반환된다.
            사용방법] "  Seoul  ".wq_trim();        // Seoul
     */
    /**
     * @plugin  String
     * @cdate   2009-12-11
     * @version 1.0
     * @author
     * @description
     *
     * @param
     * @see
     * @return
     * @exception
     * @sample
     * @hidden  true
     * 혁(임시)
     */
    window.String.prototype.wq_trim = (function() {
        var leftTrimRegExp = new RegExp("^\\s\\s*");
        var rightTrimRegExp = new RegExp("\\s\\s*$");
        return function() {
            return this.replace(leftTrimRegExp, '').replace(rightTrimRegExp, '');
        };
    })();
    if (typeof window.String.prototype.trim == "undefined") {
        window.String.prototype.trim = window.String.prototype.wq_trim;
    }
    /**
     * @method  String
     * @name    capitalize
     * @cdate   2009-12-11
     * @version 2.0
     * @author
     * @description String객체의 첫단어를 대문자로 변경하는 함수를 추가로 정의한다.
     * @param
     * @see
     * @return  <String> capitalize 된 값이 반환된다.
     * @exception
     * @sample
     * |"seoul".capitalize();       // Seoul
     * @hidden  true
     * @deprecated
     */
    window.String.prototype.capitalize = function() {
        ["String.capitalize"];
        return this.charAt(0).toUpperCase() + this.substr(1);
    };
    /**
     * @method  String
     * @name    wq_replaceAll
     * @cdate   2009-12-11
     * @version 2.0
     * @author
     * @description replace all
     * @param   <String:Y>  source  문자열 또는 RegExp
     * @param   <String:Y>  target  Target
     * @see
     * @return  <String> replaced String
     * @exception
     * @sample
     * |(string)
     * |str.wq_replaceAll("ab(c)", "def");
     * |
     * |(정규 표현식)
     * |str.replaceAll(/[\D]/g, "");
     * @hidden  true
     * @deprecated
     */
    window.String.prototype.wq_replaceAll = function(source, target) {
        try {
            var ret = "";
            if (source instanceof RegExp) {
                if (source.global) {
                    ret = this.replace(source, target);
                } else {
                    throw new TypeError("replaceAll's first parameter must be a string or a regular expression with the global flag enabled.");
                }
            } else {
                source = source.replace(/(\W)/g, "\\$1");
                ret = this.replace(new RegExp(source, "gi"), target);
            }
            return ret;
        } catch (e) {
            WebSquare.exception.printStackTrace(e);
        }
    };
    if (typeof window.String.prototype.replaceAll == "undefined") {
        window.String.prototype.replaceAll = window.String.prototype.wq_replaceAll;
    }
    /**
     * @method  String
     * @name    startsWith
     * @cdate   2009-12-11
     * @version 2.0
     * @author
     * @description String객체의 시작부분이 지정한 값과 일치하는지 테스트하는 함수를 추가로 정의한다.
     * @param   <String:Y>  s   문자열
     * @see
     * @return  <Boolean> 일치 여부
     * @exception
     * @sample
     * |"Seoul".startsWith("Se");
     * @hidden  true
     * @deprecated
     */
    window.String.prototype.startsWith = function(s) {
        ["String.startsWith"];
        return this.substring(0, s.length) == s;
    };
    /**
     * @method  String
     * @name    endsWith
     * @cdate   2009-12-11
     * @version 2.0
     * @author
     * @description String객체의 끝부분이 지정한 값과 일치하는지 테스트하는 함수를 추가로 정의한다.
     * @param   <String:Y>  s   문자열
     * @see
     * @return  <Boolean> 일치 여부
     * @exception
     * @sample
     * |"Seoul".endsWith("ul");
     * @hidden  true
     * @deprecated
     */
    window.String.prototype.endsWith = function(s) {
        ["String.endsWith"];
        return this.substring(this.length - s.length, this.length) == s;
    };
    /**
     * @method  String
     * @name    capitalizeStyle
     * @cdate   2009-12-11
     * @version 2.0
     * @author
     * @description
     *  String객체의 값을 Style 값 변환 방식으로 변환하는 함수를 추가로 정의한다.
     *  (background-color을 backgroundColor 로 변환하여 반환)
     * @param
     * @see
     * @return
     * @exception
     * @sample
     * @hidden  true
     * @deprecated
     */
    window.String.prototype.capitalizeStyle = (function() {
        var capitalizeStyleHash = {};
        return function() {
            ["String.capitalizeStyle"];
            var hashedStr = capitalizeStyleHash[this];
            if (hashedStr) return hashedStr;
            if (this.indexOf("-") < 0) {
                return this;
            }
            var style = this.split("-");
            while (style[0] == "") {
                style.shift();
            }
            var retStr = style[0].toLowerCase();
            for (var i = 1, len = style.length; i < len; i++) {
                retStr += style[i].toLowerCase().capitalize();
            }
            capitalizeStyleHash[this] = retStr;
            return retStr;
        };
    })();
    /* istanbul ignore next */
    window.wq_reload = function(href) {
        try {
            if (window.locationTimerCount == undefined) {
                window.locationTimerCount = 0;
            }
            window.locationTimerCount++;
            if (href == undefined || location.href === href || window.locationTimerCount > 700) {
                window.locationTimerCount = 0;
                location.reload();
            } else {
                if (console && console.log) {
                    console.log("renewing location href...");
                }
                location.replace(href);
                setTimeout(function() {
                    wq_reload(href);
                }, 5);
            }
        } catch (e) {
            if (console && console.log) {
                console.log("wq_reload error : " + e.message);
            }
        }
    };
})();
var wq_polyfill = {};
wq_polyfill.init = function(global) {
    // =================== json2.js polyfill ===================
    (function() {
        /*
        json2.js
        2014-02-04

        Public Domain.

        NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

        See http://www.JSON.org/js.html


        This code should be minified before deployment.
        See http://javascript.crockford.com/jsmin.html

        USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
        NOT CONTROL.


        This file creates a global JSON object containing two methods: stringify
        and parse.

            JSON.stringify(value, replacer, space)
                value       any JavaScript value, usually an object or array.

                replacer    an optional parameter that determines how object
                            values are stringified for objects. It can be a
                            function or an array of strings.

                space       an optional parameter that specifies the indentation
                            of nested structures. If it is omitted, the text will
                            be packed without extra whitespace. If it is a number,
                            it will specify the number of spaces to indent at each
                            level. If it is a string (such as '\t' or '&nbsp;'),
                            it contains the characters used to indent at each level.

                This method produces a JSON text from a JavaScript value.

                When an object value is found, if the object contains a toJSON
                method, its toJSON method will be called and the result will be
                stringified. A toJSON method does not serialize: it returns the
                value represented by the name/value pair that should be serialized,
                or undefined if nothing should be serialized. The toJSON method
                will be passed the key associated with the value, and this will be
                bound to the value

                For example, this would serialize Dates as ISO strings.

                    Date.prototype.toJSON = function (key) {
                        function f(n) {
                            // Format integers to have at least two digits.
                            return n < 10 ? '0' + n : n;
                        }

                        return this.getUTCFullYear()   + '-' +
                             f(this.getUTCMonth() + 1) + '-' +
                             f(this.getUTCDate())      + 'T' +
                             f(this.getUTCHours())     + ':' +
                             f(this.getUTCMinutes())   + ':' +
                             f(this.getUTCSeconds())   + 'Z';
                    };

                You can provide an optional replacer method. It will be passed the
                key and value of each member, with this bound to the containing
                object. The value that is returned from your method will be
                serialized. If your method returns undefined, then the member will
                be excluded from the serialization.

                If the replacer parameter is an array of strings, then it will be
                used to select the members to be serialized. It filters the results
                such that only members with keys listed in the replacer array are
                stringified.

                Values that do not have JSON representations, such as undefined or
                functions, will not be serialized. Such values in objects will be
                dropped; in arrays they will be replaced with null. You can use
                a replacer function to replace those with JSON values.
                JSON.stringify(undefined) returns undefined.

                The optional space parameter produces a stringification of the
                value that is filled with line breaks and indentation to make it
                easier to read.

                If the space parameter is a non-empty string, then that string will
                be used for indentation. If the space parameter is a number, then
                the indentation will be that many spaces.

                Example:

                text = JSON.stringify(['e', {pluribus: 'unum'}]);
                // text is '["e",{"pluribus":"unum"}]'


                text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
                // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

                text = JSON.stringify([new Date()], function (key, value) {
                    return this[key] instanceof Date ?
                        'Date(' + this[key] + ')' : value;
                });
                // text is '["Date(---current time---)"]'


            JSON.parse(text, reviver)
                This method parses a JSON text to produce an object or array.
                It can throw a SyntaxError exception.

                The optional reviver parameter is a function that can filter and
                transform the results. It receives each of the keys and values,
                and its return value is used instead of the original value.
                If it returns what it received, then the structure is not modified.
                If it returns undefined then the member is deleted.

                Example:

                // Parse the text. Values that look like ISO date strings will
                // be converted to Date objects.

                myData = JSON.parse(text, function (key, value) {
                    var a;
                    if (typeof value === 'string') {
                        a =
        /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                        if (a) {
                            return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                                +a[5], +a[6]));
                        }
                    }
                    return value;
                });

                myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                    var d;
                    if (typeof value === 'string' &&
                            value.slice(0, 5) === 'Date(' &&
                            value.slice(-1) === ')') {
                        d = new Date(value.slice(5, -1));
                        if (d) {
                            return d;
                        }
                    }
                    return value;
                });


        This is a reference implementation. You are free to copy, modify, or
        redistribute.
        */
        /*jslint evil: true, regexp: true */
        /*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
        call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
        getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
        lastIndex, length, parse, prototype, push, replace, slice, stringify,
        test, toJSON, toString, valueOf
        */
        //Create a JSON object only if one does not already exist. We create the
        //methods in a closure to avoid creating global variables.
        if (typeof window.JSON !== 'object') {
            window.JSON = {};
        }
        'use strict';

        function f(n) {
            // Format integers to have at least two digits.
            return n < 10 ? '0' + n : n;
        }
        if (typeof Date.prototype.toJSON !== 'function') {
            Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf();
            };
        }
        var cx,
            escapable,
            gap,
            indent,
            meta,
            rep;

        function quote(string) {
            //If the string contains no control characters, no quote characters, and no
            //backslash characters, then we can safely slap some quotes around it.
            //Otherwise we must also replace the offending characters with safe escape
            //sequences.
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        }

        function str(key, holder) {
            //Produce a string from holder[key].
            var i, // The loop counter.
                k, // The member key.
                v, // The member value.
                length,
                mind = gap,
                partial,
                value = holder[key];
            //If the value has a toJSON method, call it to obtain a replacement value.
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }
            //If we were called with a replacer function, then call the replacer to
            //obtain a replacement value.
            if (typeof rep === 'function') {
                value = rep.call(holder, key, value);
            }
            //What happens next depends on the value's type.
            switch (typeof value) {
                case 'string':
                    return quote(value);
                case 'number':
                    //JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : 'null';
                case 'boolean':
                case 'null':
                    //If the value is a boolean or null, convert it to a string. Note:
                    //typeof null does not produce 'null'. The case is included here in
                    //the remote chance that this gets fixed someday.
                    return String(value);
                    //If the type is 'object', we might be dealing with an object or an array or
                    //null.
                case 'object':
                    //Due to a specification blunder in ECMAScript, typeof null is 'object',
                    //so watch out for that case.
                    if (!value) {
                        return 'null';
                    }
                    //Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];
                    //Is the value an array?
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        //The value is an array. Stringify every element. Use null as a placeholder
                        //for non-JSON values.
                        length = value.length;
                        for (var i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }
                        //Join all of the elements together, separated with commas, and wrap them in
                        //brackets.
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }
                    //If the replacer is an array, use it to select the members to be stringified.
                    if (rep && typeof rep === 'object') {
                        length = rep.length;
                        for (var i = 0; i < length; i += 1) {
                            if (typeof rep[i] === 'string') {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    } else {
                        //Otherwise, iterate through all of the keys in the object.
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    }
                    //Join all of the member texts together, separated with commas,
                    //and wrap them in braces.
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        }
        //If the JSON object does not yet have a stringify method, give it one.
        //IE8 JSON.stringify 사용시 한글깨짐 현상 때문에 수정
        var isIE = navigator.appName.match(/Explorer/i) != null;
        if ((typeof JSON.stringify !== 'function') || isIE) {
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            meta = { // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            };
            JSON.stringify = function(value, replacer, space) {
                //The stringify method takes a value and an optional replacer, and an optional
                //space parameter, and returns a JSON text. The replacer can be a function
                //that can replace values, or an array of strings that will select the keys.
                //A default replacer method can be provided. Use of the space parameter can
                //produce text that is more easily readable.
                var i;
                gap = '';
                indent = '';
                //If the space parameter is a number, make an indent string containing that
                //many spaces.
                if (typeof space === 'number') {
                    for (var i = 0; i < space; i += 1) {
                        indent += ' ';
                    }
                    //If the space parameter is a string, it will be used as the indent string.
                } else if (typeof space === 'string') {
                    indent = space;
                }
                //If there is a replacer, it must be a function or an array.
                //Otherwise, throw an error.
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                    throw new Error('JSON.stringify');
                }
                //Make a fake root object containing our value under the key of ''.
                //Return the result of stringifying the value.
                return str('', {
                    '': value
                });
            };
        }
        //If the JSON object does not yet have a parse method, give it one.
        if (typeof JSON.parse !== 'function' || isIE) {
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            JSON.parse = function(text, reviver) {
                //The parse method takes a text and an optional reviver function, and returns
                //a JavaScript value if the text is a valid JSON text.
                var j;

                function walk(holder, key) {
                    //The walk method is used to recursively walk the resulting structure so
                    //that modifications can be made.
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }
                //Parsing happens in four stages. In the first stage, we replace certain
                //Unicode characters with escape sequences. JavaScript handles many characters
                //incorrectly, either silently deleting them, or treating them as line endings.
                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function(a) {
                        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                }
                //In the second stage, we run the text against regular expressions that look
                //for non-JSON patterns. We are especially concerned with '()' and 'new'
                //because they can cause invocation, and '=' because it can cause mutation.
                //But just to be safe, we want to reject all unexpected forms.
                //We split the second stage into 4 regexp operations in order to work around
                //crippling inefficiencies in IE's and Safari's regexp engines. First we
                //replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
                //replace all simple value tokens with ']' characters. Third, we delete all
                //open brackets that follow a colon or comma or that begin the text. Finally,
                //we look to see that the remaining characters are only whitespace or ']' or
                //',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
                if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                    //In the third stage we use the eval function to compile the text into a
                    //JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                    //in JavaScript: it can begin a block or an object literal. We wrap the text
                    //in parens to eliminate the ambiguity.
                    j = eval('(' + text + ')');
                    //In the optional fourth stage, we recursively walk the new structure, passing
                    //each name/value pair to a reviver function for possible transformation.
                    return typeof reviver === 'function' ? walk({
                        '': j
                    }, '') : j;
                }
                //If the text is not JSON parseable, then a SyntaxError is thrown.
                throw new SyntaxError('JSON.parse');
            };
        }
    })();
    // =================== Promise.js polyfill ===================
    (function() {
        var isIEAllVersion = navigator.appName.match(/Explorer/i) != null || navigator.userAgent.match(/Trident/i) != null || navigator.userAgent.match(/MSIE/i) != null;
        var setImmediate = null;
        //if (isIEAllVersion && window.requestAnimationFrame) {
        //    setImmediate = window.requestAnimationFrame;
        //}
        function finallyConstructor(callback) {
            var constructor = this.constructor;
            return this.then(
                function(value) {
                    return constructor.resolve(callback()).then(function() {
                        return value;
                    });
                },
                function(reason) {
                    return constructor.resolve(callback()).then(function() {
                        return constructor.reject(reason);
                    });
                }
            );
        }

        function allSettled(arr) {
            var P = this;
            return new P(function(resolve, reject) {
                if (!(arr && typeof arr.length !== 'undefined')) {
                    return reject(
                        new TypeError(
                            typeof arr +
                            ' ' +
                            arr +
                            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
                        )
                    );
                }
                var args = Array.prototype.slice.call(arr);
                if (args.length === 0) return resolve([]);
                var remaining = args.length;

                function res(i, val) {
                    if (val && (typeof val === 'object' || typeof val === 'function')) {
                        var then = val.then;
                        if (typeof then === 'function') {
                            then.call(
                                val,
                                function(val) {
                                    res(i, val);
                                },
                                function(e) {
                                    args[i] = {
                                        status: 'rejected',
                                        reason: e
                                    };
                                    if (--remaining === 0) {
                                        resolve(args);
                                    }
                                }
                            );
                            return;
                        }
                    }
                    args[i] = {
                        status: 'fulfilled',
                        value: val
                    };
                    if (--remaining === 0) {
                        resolve(args);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        }

        function AggregateError(errors, message) {
            this.name = 'AggregateError', this.errors = errors;
            this.message = message || '';
        }
        AggregateError.prototype = Error.prototype;

        function any(arr) {
            var P = this;
            return new P(function(resolve, reject) {
                if (!(arr && typeof arr.length !== 'undefined')) {
                    return reject(new TypeError('Promise.any accepts an array'));
                }
                var args = Array.prototype.slice.call(arr);
                if (args.length === 0) return reject();
                var rejectionReasons = [];
                for (var i = 0; i < args.length; i++) {
                    try {
                        P.resolve(args[i])
                            .then(resolve)
                            .catch(function(error) {
                                rejectionReasons.push(error);
                                if (rejectionReasons.length === args.length) {
                                    reject(
                                        new AggregateError(
                                            rejectionReasons,
                                            'All promises were rejected'
                                        )
                                    );
                                }
                            });
                    } catch (ex) {
                        reject(ex);
                    }
                }
            });
        }
        var setTimeoutFunc = setTimeout;

        function isArray(x) {
            return Boolean(x && typeof x.length !== 'undefined');
        }

        function noop() {}

        function bind(fn, thisArg) {
            return function() {
                fn.apply(thisArg, arguments);
            };
        }

        function Promise(fn) {
            if (!(this instanceof Promise))
                throw new TypeError('Promises must be constructed via new');
            if (typeof fn !== 'function') throw new TypeError('not a function');
            this._state = 0;
            this._handled = false;
            this._value = undefined;
            this._deferreds = [];
            doResolve(fn, this);
        }

        function handle(self, deferred) {
            while (self._state === 3) {
                self = self._value;
            }
            if (self._state === 0) {
                self._deferreds.push(deferred);
                return;
            }
            self._handled = true;
            Promise._immediateFn(function() {
                var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
                if (cb === null) {
                    (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
                    return;
                }
                var ret;
                try {
                    ret = cb(self._value);
                } catch (e) {
                    reject(deferred.promise, e);
                    return;
                }
                resolve(deferred.promise, ret);
            });
        }

        function resolve(self, newValue) {
            try {
                if (newValue === self)
                    throw new TypeError('A promise cannot be resolved with itself.');
                if (
                    newValue &&
                    (typeof newValue === 'object' || typeof newValue === 'function')
                ) {
                    var then = newValue.then;
                    if (newValue instanceof Promise) {
                        self._state = 3;
                        self._value = newValue;
                        finale(self);
                        return;
                    } else if (typeof then === 'function') {
                        doResolve(bind(then, newValue), self);
                        return;
                    }
                }
                self._state = 1;
                self._value = newValue;
                finale(self);
            } catch (e) {
                reject(self, e);
            }
        }

        function reject(self, newValue) {
            self._state = 2;
            self._value = newValue;
            finale(self);
        }

        function finale(self) {
            if (self._state === 2 && self._deferreds.length === 0) {
                Promise._immediateFn(function() {
                    if (!self._handled) {
                        Promise._unhandledRejectionFn(self._value);
                    }
                });
            }
            for (var i = 0, len = self._deferreds.length; i < len; i++) {
                handle(self, self._deferreds[i]);
            }
            self._deferreds = null;
        }

        function Handler(onFulfilled, onRejected, promise) {
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.promise = promise;
        }

        function doResolve(fn, self) {
            var done = false;
            try {
                fn(
                    function(value) {
                        if (done) return;
                        done = true;
                        resolve(self, value);
                    },
                    function(reason) {
                        if (done) return;
                        done = true;
                        reject(self, reason);
                    }
                );
            } catch (ex) {
                if (done) return;
                done = true;
                reject(self, ex);
            }
        }
        Promise.prototype['catch'] = function(onRejected) {
            return this.then(null, onRejected);
        };
        Promise.prototype.then = function(onFulfilled, onRejected) {
            var prom = new this.constructor(noop);
            handle(this, new Handler(onFulfilled, onRejected, prom));
            return prom;
        };
        Promise.prototype['finally'] = finallyConstructor;
        Promise.all = function(arr) {
            return new Promise(function(resolve, reject) {
                if (!isArray(arr)) {
                    return reject(new TypeError('Promise.all accepts an array'));
                }
                var args = Array.prototype.slice.call(arr);
                if (args.length === 0) return resolve([]);
                var remaining = args.length;

                function res(i, val) {
                    try {
                        if (val && (typeof val === 'object' || typeof val === 'function')) {
                            var then = val.then;
                            if (typeof then === 'function') {
                                then.call(
                                    val,
                                    function(val) {
                                        res(i, val);
                                    },
                                    reject
                                );
                                return;
                            }
                        }
                        args[i] = val;
                        if (--remaining === 0) {
                            resolve(args);
                        }
                    } catch (ex) {
                        reject(ex);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };
        Promise.any = any;
        Promise.allSettled = allSettled;
        Promise.resolve = function(value) {
            if (value && typeof value === 'object' && value.constructor === Promise) {
                return value;
            }
            return new Promise(function(resolve) {
                resolve(value);
            });
        };
        Promise.reject = function(value) {
            return new Promise(function(resolve, reject) {
                reject(value);
            });
        };
        Promise.race = function(arr) {
            return new Promise(function(resolve, reject) {
                if (!isArray(arr)) {
                    return reject(new TypeError('Promise.race accepts an array'));
                }
                for (var i = 0, len = arr.length; i < len; i++) {
                    Promise.resolve(arr[i]).then(resolve, reject);
                }
            });
        };
        Promise._immediateFn =
            (typeof setImmediate === 'function' &&
                function(fn) {
                    setImmediate(fn);
                }) ||
            function(fn) {
                setTimeoutFunc(fn, 0);
            };
        Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
            if (typeof console !== 'undefined' && console) {
                console.warn('Possible Unhandled Promise Rejection:', err);
            }
        };
        var globalNS = (function() {
            if (typeof self !== 'undefined') {
                return self;
            }
            if (typeof window !== 'undefined') {
                return window;
            }
            if (typeof global !== 'undefined') {
                return global;
            }
            throw new Error('unable to locate global object');
        })();
        if (typeof globalNS['Promise'] !== 'function' || isIEAllVersion) {
            globalNS['Promise'] = Promise;
        } else {
            if (!globalNS.Promise.prototype['finally']) {
                globalNS.Promise.prototype['finally'] = finallyConstructor;
            }
            if (!globalNS.Promise.allSettled) {
                globalNS.Promise.allSettled = allSettled;
            }
            if (!globalNS.Promise.any) {
                globalNS.Promise.any = any;
            }
        }
    })();
    // =================== ie11CustomProperties.js polyfill ===================
    (function() {
        'use strict';
        var testEl = document.createElement('i');
        testEl.style.setProperty('--x', 'y');
        if (testEl.style.getPropertyValue('--x') === 'y' || !testEl.msMatchesSelector) return;
        if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
        var listeners = [],
            root = document,
            Observer;

        function qsa(el, selector) {
            try {
                return el.querySelectorAll(selector);
            } catch (e) {
                return [];
            }
        }

        function onElement(selector, callback) {
            var listener = {
                selector: selector,
                callback: callback,
                elements: new WeakMap(),
            };
            var els = qsa(root, listener.selector),
                i = 0,
                el;
            while (el = els[i++]) {
                listener.elements.set(el, true);
                listener.callback.call(el, el);
            }
            listeners.push(listener);
            if (!Observer) {
                Observer = new MutationObserver(checkMutations);
                Observer.observe(root, {
                    childList: true,
                    subtree: true
                });
            }
            checkListener(listener);
        };

        function checkListener(listener, target) {
            var i = 0,
                el, els = [];
            try {
                target && target.matches(listener.selector) && els.push(target);
            } catch (e) {}
            if (loaded) {
                Array.prototype.push.apply(els, qsa(target || root, listener.selector));
            }
            while (el = els[i++]) {
                if (listener.elements.has(el)) continue;
                listener.elements.set(el, true);
                listener.callback.call(el, el);
            }
        }

        function checkListeners(inside) {
            var i = 0,
                listener;
            while (listener = listeners[i++]) checkListener(listener, inside);
        }

        function checkMutations(mutations) {
            var j = 0,
                i, mutation, nodes, target;
            while (mutation = mutations[j++]) {
                nodes = mutation.addedNodes, i = 0;
                while (target = nodes[i++]) target.nodeType === 1 && checkListeners(target);
            }
        }
        var loaded = false;
        document.addEventListener('DOMContentLoaded', function() {
            loaded = true;
        });

        function copyProperty(prop, from, to) {
            var desc = Object.getOwnPropertyDescriptor(from, prop);
            Object.defineProperty(to, prop, desc);
        }
        if (!('classList' in Element.prototype)) {
            copyProperty('classList', HTMLElement.prototype, Element.prototype);
        }
        if (!('innerHTML' in Element.prototype)) {
            copyProperty('innerHTML', HTMLElement.prototype, Element.prototype);
        }
        if (!('runtimeStyle' in Element.prototype)) {
            copyProperty('runtimeStyle', HTMLElement.prototype, Element.prototype);
        }
        if (!('sheet' in SVGStyleElement.prototype)) {
            Object.defineProperty(SVGStyleElement.prototype, 'sheet', {
                get: function() {
                    var all = document.styleSheets,
                        i = 0,
                        sheet;
                    while (sheet = all[i++]) {
                        if (sheet.ownerNode === this) return sheet;
                    }
                }
            });
        }
        var styles_of_getter_properties = {};
        var drawQueue = new Set();
        var collecting = false;
        var drawing = false;
        var regFindSetters = /([\s{;])(--([A-Za-z0-9-_]*)\s*:([^;!}{]+)(!important)?)(?=\s*([;}]|$))/g;
        var regFindGetters = /([{;]\s*)([A-Za-z0-9-_]+\s*:[^;}{]*var\([^!;}{]+)(!important)?(?=\s*([;}$]|$))/g;
        var regRuleIEGetters = /-ieVar-([^:]+):/g
        var regRuleIESetters = /-ie-([^};]+)/g
        var regPseudos = /:(hover|active|focus|target|visited|link|:before|:after|:first-letter|:first-line)/;

        function foundStyle(el) {
            if (el.ieCP_polyfilled) return;
            if (el.ieCP_elementSheet) return;
            if (!el.sheet) return;
            if (el.href) {
                return fetchCss(el.href, function(css) {
                    var newCss = rewriteCss(css);
                    if (css === newCss) return;
                    activateStyleElement(el, newCss);
                });
            }
            var css = el.innerHTML;
            var newCss = rewriteCss(css);
            if (css === newCss) return;
            activateStyleElement(el, newCss);
        }
        onElement('style:not([iecp-ignore])', foundStyle);
        onElement('link[rel=stylesheet]:not([iecp-ignore])', foundStyle);
        onElement('[ie-style]', function(el) {
            var newCss = rewriteCss('{' + el.getAttribute('ie-style')).substr(1);
            el.style.cssText += ';' + newCss;
            var found = parseRewrittenStyle(el.style);
            if (found.getters) addGetterElement(el, found.getters, '%styleAttr');
            if (found.setters) addSetterElement(el, found.setters);
        });

        function rewriteCss(css) {
            return css.replace(regFindSetters, function($0, $1, $2, $3, $4, important) {
                return $1 + '-ie-' + (important ? '❗' : '') + $3 + ':' + encodeValue($4);
            }).replace(regFindGetters, function($0, $1, $2, important) {
                return $1 + '-ieVar-' + (important ? '❗' : '') + $2 + '; ' + $2;
            });
        }

        function encodeValue(value) {
            return value;
            return value.replace(/ /g, '␣');
        }
        var keywords = {
            initial: 1,
            inherit: 1,
            revert: 1,
            unset: 1
        };

        function decodeValue(value) {
            return value;
            if (value === undefined) return;
            value = value.replace(/␣/g, ' ');
            const trimmed = value.trim();
            if (keywords[trimmed]) return trimmed;
            return value;
        }

        function parseRewrittenStyle(style) {
            style['z-index'] === style && x();
            const cssText = style.cssText;
            var matchesGetters = cssText.match(regRuleIEGetters),
                j, match;
            if (matchesGetters) {
                var getters = [];
                for (j = 0; match = matchesGetters[j++];) {
                    let propName = match.slice(7, -1);
                    if (propName[0] === '❗') propName = propName.substr(1);
                    getters.push(propName);
                    if (!styles_of_getter_properties[propName]) styles_of_getter_properties[propName] = [];
                    styles_of_getter_properties[propName].push(style);
                }
            }
            var matchesSetters = cssText.match(regRuleIESetters);
            if (matchesSetters) {
                var setters = {};
                for (j = 0; match = matchesSetters[j++];) {
                    let x = match.substr(4).split(':');
                    let propName = x[0];
                    let propValue = x[1];
                    if (propName[0] === '❗') propName = propName.substr(1);
                    setters[propName] = propValue;
                }
            }
            return {
                getters: getters,
                setters: setters
            };
        }

        function activateStyleElement(style, css) {
            style.sheet.cssText = css;
            style.ieCP_polyfilled = true;
            var rules = style.sheet.rules,
                i = 0,
                rule;
            while (rule = rules[i++]) {
                const found = parseRewrittenStyle(rule.style);
                if (found.getters) addGettersSelector(rule.selectorText, found.getters);
                if (found.setters) addSettersSelector(rule.selectorText, found.setters);
                const media = rule.parentRule && rule.parentRule.media && rule.parentRule.media.mediaText;
                if (media && (found.getters || found.setters)) {
                    matchMedia(media).addListener(function() {
                        drawTree(document.documentElement)
                    })
                }
            }
            redrawStyleSheets();
        }

        function addGettersSelector(selector, properties) {
            selectorAddPseudoListeners(selector);
            onElement(unPseudo(selector), function(el) {
                addGetterElement(el, properties, selector);
                drawElement(el);
            });
        }

        function addGetterElement(el, properties, selector) {
            var i = 0,
                prop, j;
            const selectors = selector.split(',');
            el.setAttribute('iecp-needed', true);
            if (!el.ieCPSelectors) el.ieCPSelectors = {};
            while (prop = properties[i++]) {
                for (j = 0; selector = selectors[j++];) {
                    const parts = selector.trim().split('::');
                    if (!el.ieCPSelectors[prop]) el.ieCPSelectors[prop] = [];
                    el.ieCPSelectors[prop].push({
                        selector: parts[0],
                        pseudo: parts[1] ? '::' + parts[1] : ''
                    });
                }
            }
        }

        function addSettersSelector(selector, propVals) {
            selectorAddPseudoListeners(selector);
            onElement(unPseudo(selector), function(el) {
                addSetterElement(el, propVals);
            });
        }

        function addSetterElement(el, propVals) {
            if (!el.ieCP_setters) el.ieCP_setters = {};
            for (var prop in propVals) {
                el.ieCP_setters['--' + prop] = 1;
            }
            drawTree(el);
        }

        function redrawStyleSheets() {
            for (var prop in styles_of_getter_properties) {
                let styles = styles_of_getter_properties[prop];
                for (var i = 0, style; style = styles[i++];) {
                    if (style.owningElement) continue;
                    var value = style['-ieVar-' + prop];
                    if (!value) continue;
                    value = styleComputeValueWidthVars(getComputedStyle(document.documentElement), value);
                    if (value === '') continue;
                    try {
                        style[prop] = value;
                    } catch (e) {}
                }
            }
        }
        var pseudos = {
            hover: {
                on: 'mouseenter',
                off: 'mouseleave'
            },
            focus: {
                on: 'focusin',
                off: 'focusout'
            },
            active: {
                on: 'CSSActivate',
                off: 'CSSDeactivate'
            },
        };

        function selectorAddPseudoListeners(selector) {
            selector = selector.split(',')[0];
            for (var pseudo in pseudos) {
                var parts = selector.split(':' + pseudo);
                if (parts.length > 1) {
                    var ending = parts[1].match(/^[^\s]*/);
                    let sel = unPseudo(parts[0] + ending);
                    const listeners = pseudos[pseudo];
                    onElement(sel, function(el) {
                        el.addEventListener(listeners.on, drawTreeEvent);
                        el.addEventListener(listeners.off, drawTreeEvent);
                    });
                }
            }
        }
        var CSSActive = null;
        document.addEventListener('mousedown', function(e) {
            setTimeout(function() {
                if (e.target === document.activeElement) {
                    var evt = document.createEvent('Event');
                    evt.initEvent('CSSActivate', true, true);
                    CSSActive = e.target;
                    CSSActive.dispatchEvent(evt);
                }
            })
        });
        document.addEventListener('mouseup', function() {
            if (CSSActive) {
                var evt = document.createEvent('Event');
                evt.initEvent('CSSDeactivate', true, true);
                CSSActive.dispatchEvent(evt);
                CSSActive = null;
            }
        });

        function unPseudo(selector) {
            return selector.replace(regPseudos, '').replace(':not()', '');
        }

        function drawElement(el) {
            drawQueue.add(el);
            if (collecting) return;
            collecting = true;
            requestAnimationFrame(function() {
                collecting = false;
                drawing = true;
                drawQueue.forEach(_drawElement);
                drawQueue.clear();
                setTimeout(function() {
                    drawing = false;
                })
            })
        }
        var uniqueCounter = 0;

        function _drawElement(el) {
            if (!el.ieCP_unique) {
                el.ieCP_unique = ++uniqueCounter;
                el.classList.add('iecp-u' + el.ieCP_unique);
            }
            var style = getComputedStyle(el);
            let css = '';
            el.runtimeStyle.cssText = '';
            for (var prop in el.ieCPSelectors) {
                var important = style['-ieVar-❗' + prop];
                let valueWithVar = important || style['-ieVar-' + prop];
                if (!valueWithVar) continue;
                var details = {};
                var value = styleComputeValueWidthVars(style, valueWithVar, details);
                if (important) value += ' !important';
                for (var i = 0, item; item = el.ieCPSelectors[prop][i++];) {
                    if (item.selector === '%styleAttr') el.style[prop] = value;
                    if (!important && details.allByRoot !== false) continue;
                    if (item.pseudo) {
                        css += item.selector + '.iecp-u' + el.ieCP_unique + item.pseudo + '{' + prop + ':' + value + '}\n';
                    } else {
                        el.runtimeStyle[prop] = value;
                    }
                }
            }
            elementSetCss(el, css);
        }

        function elementSetCss(el, css) {
            if (!el.ieCP_styleEl && css) {
                const styleEl = document.createElement('style');
                styleEl.ieCP_elementSheet = 1;
                document.head.appendChild(styleEl);
                el.ieCP_styleEl = styleEl;
            }
            if (el.ieCP_styleEl) el.ieCP_styleEl.textContent = css;
        }

        function drawTree(target) {
            if (!target) return;
            target === document.documentElement && redrawStyleSheets();
            var els = target.querySelectorAll('[iecp-needed]');
            if (target.hasAttribute && target.hasAttribute('iecp-needed')) drawElement(target);
            for (var i = 0, el; el = els[i++];) drawElement(el);
        }

        function drawTreeEvent(e) {
            drawTree(e.target)
        }

        function findVars(str, cb) {
            let level = 0,
                openedLevel = null,
                lastPoint = 0,
                newStr = '',
                i = 0,
                char, insideCalc;
            while (char = str[i++]) {
                if (char === '(') {
                    ++level;
                    if (openedLevel === null && str[i - 4] + str[i - 3] + str[i - 2] === 'var') {
                        openedLevel = level;
                        newStr += str.substring(lastPoint, i - 4);
                        lastPoint = i;
                    }
                    if (str[i - 5] + str[i - 4] + str[i - 3] + str[i - 2] === 'calc') {
                        insideCalc = level;
                    }
                }
                if (char === ')' && openedLevel === level) {
                    let variable = str.substring(lastPoint, i - 1).trim(),
                        fallback;
                    let x = variable.indexOf(',');
                    if (x !== -1) {
                        fallback = variable.slice(x + 1);
                        variable = variable.slice(0, x);
                    }
                    newStr += cb(variable, fallback, insideCalc);
                    lastPoint = i;
                    openedLevel = null;
                }
                if (char === ')') {
                    --level;
                    if (insideCalc === level) insideCalc = null;
                }
            }
            newStr += str.substring(lastPoint);
            return newStr;
        }

        function styleComputeValueWidthVars(style, valueWithVars, details) {
            return findVars(valueWithVars, function(variable, fallback, insideCalc) {
                var value = style.getPropertyValue(variable);
                if (insideCalc) value = value.replace(/^calc\(/, '(');
                if (details && style.lastPropertyServedBy !== document.documentElement) details.allByRoot = false;
                if (value === '' && fallback) value = styleComputeValueWidthVars(style, fallback, details);
                return value;
            });
        }
        var observer = new MutationObserver(function(mutations) {
            if (drawing) return;
            for (var i = 0, mutation; mutation = mutations[i++];) {
                if (mutation.attributeName === 'iecp-needed') continue;
                drawTree(mutation.target);
            }
        });
        setTimeout(function() {
            observer.observe(document, {
                attributes: true,
                subtree: true
            });
        })
        var oldHash = location.hash
        addEventListener('hashchange', function(e) {
            var newEl = document.getElementById(location.hash.substr(1));
            if (newEl) {
                var oldEl = document.getElementById(oldHash.substr(1));
                drawTree(newEl);
                drawTree(oldEl);
            } else {
                drawTree(document);
            }
            oldHash = location.hash;
        });
        var descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style');
        var styleGetter = descriptor.get;
        descriptor.get = function() {
            const style = styleGetter.call(this);
            style.owningElement = this;
            return style;
        }
        Object.defineProperty(HTMLElement.prototype, 'style', descriptor);
        var originalGetComputed = getComputedStyle;
        window.getComputedStyle = function(el) {
            var style = originalGetComputed.apply(this, arguments);
            style.computedFor = el;
            return style;
        }
        var StyleProto = CSSStyleDeclaration.prototype;
        var oldGetP = StyleProto.getPropertyValue;
        StyleProto.getPropertyValue = function(property) {
            this.lastPropertyServedBy = false;
            property = property.trim();
            if (property[0] !== '-' || property[1] !== '-') return oldGetP.apply(this, arguments);
            const undashed = property.substr(2);
            const ieProperty = '-ie-' + undashed;
            const iePropertyImportant = '-ie-❗' + undashed;
            let value = decodeValue(this[iePropertyImportant] || this[ieProperty]);
            if (this.computedFor) {
                if (value !== undefined && !inheritingKeywords[value]) {
                    value = styleComputeValueWidthVars(this, value);
                    this.lastPropertyServedBy = this.computedFor;
                } else {
                    if (inheritingKeywords[value] || !register[property] || register[property].inherits) {
                        let el = this.computedFor.parentNode;
                        while (el && el.nodeType === 1) {
                            var style = getComputedStyle(el);
                            var tmpVal = decodeValue(style[iePropertyImportant] || style[ieProperty]);
                            if (tmpVal !== undefined) {
                                value = styleComputeValueWidthVars(this, tmpVal);
                                this.lastPropertyServedBy = el;
                                break;
                            }
                            el = el.parentNode;
                        }
                    }
                }
                if (value === 'initial') return '';
            }
            if (value === undefined && register[property]) value = register[property].initialValue;
            if (value === undefined) return '';
            return value;
        };
        var inheritingKeywords = {
            inherit: 1,
            revert: 1,
            unset: 1
        };
        var oldSetP = StyleProto.setProperty;
        StyleProto.setProperty = function(property, value, prio) {
            if (property[0] !== '-' || property[1] !== '-') return oldSetP.apply(this, arguments);
            const el = this.owningElement;
            if (el) {
                if (!el.ieCP_setters) el.ieCP_setters = {};
                el.ieCP_setters[property] = 1;
            }
            property = '-ie-' + (prio === 'important' ? '❗' : '') + property.substr(2);
            this.cssText += '; ' + property + ':' + encodeValue(value) + ';';
            el && drawTree(el);
        };
        if (!window.CSS) window.CSS = {};
        var register = {}
        CSS.registerProperty = function(options) {
            register[options.name] = options;
        }

        function fetchCss(url, callback) {
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.overrideMimeType('text/css');
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    callback(request.responseText);
                }
            };
            request.send();
        }
    })();
}
export {
    wq_polyfill
};