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
    plan: $ => seq("plan", field("title", $.text), "{", repeat(choice($.do)), "}"),
    do: $ => seq("do", field("title", $.text), ";"),
    text: $ => seq('"', /[A-Za-z_][\sA-Za-z0-9_]*/, '"'),
  }
});
