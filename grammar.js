/**
 * @file Pebble is a simple made-up language for writing plans
 * @author bruce <bruce@sathiyaraman-m.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "pebble",

  rules: {
    source_file: $ => seq($.plan),
    plan: $ => seq("plan", field("name", $.identifier), "{", repeat(choice($.do, $.repeat)), "}"),
    do: $ => seq("do", field("title", $.string)),
    repeat: $ => seq("repeat", field("count", $.count), "{", repeat1(choice($.do, $.repeat)), "}"),
    identifier: _ => /[A-Za-z_][A-Za-z0-9_]*/,
    string: _ => token(/"([^"\\\n]|\\["\\])*"/),
    count: _ => /[0-9]+/
  }
});
