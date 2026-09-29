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
    plan: $ => seq("plan", field("title", $.text), "{", repeat(choice($.do, $.repeat)), "}"),
    do: $ => seq("do", field("title", $.quoted_text)),
    repeat: $ => seq("repeat", field("count", $.count), "{", repeat1(choice($.do, $.repeat)), "}"),
    quoted_text: $ => seq('"', /[A-Za-z_][\sA-Za-z0-9_]*/, '"'),
    text: _ => /[A-Za-z_][\sA-Za-z0-9_]*/,
    count: _ => /[0-9]+/
  }
});
