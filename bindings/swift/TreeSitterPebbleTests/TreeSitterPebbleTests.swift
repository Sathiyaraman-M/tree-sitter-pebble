import XCTest
import SwiftTreeSitter
import TreeSitterPebble

final class TreeSitterPebbleTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_pebble())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Pebble grammar")
    }
}
