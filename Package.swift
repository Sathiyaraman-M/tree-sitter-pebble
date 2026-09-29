// swift-tools-version:5.3

import Foundation
import PackageDescription

var sources = ["src/parser.c"]
if FileManager.default.fileExists(atPath: "src/scanner.c") {
    sources.append("src/scanner.c")
}

let package = Package(
    name: "TreeSitterPebble",
    products: [
        .library(name: "TreeSitterPebble", targets: ["TreeSitterPebble"]),
    ],
    dependencies: [
        .package(name: "SwiftTreeSitter", url: "https://github.com/tree-sitter/swift-tree-sitter", from: "0.9.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterPebble",
            dependencies: [],
            path: ".",
            sources: sources,
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterPebbleTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterPebble",
            ],
            path: "bindings/swift/TreeSitterPebbleTests"
        )
    ],
    cLanguageStandard: .c11
)
