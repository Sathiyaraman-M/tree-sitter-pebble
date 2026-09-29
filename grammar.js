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
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
