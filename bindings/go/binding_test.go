package tree_sitter_pebble_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_pebble "github.com/tree-sitter/tree-sitter-pebble/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_pebble.Language())
	if language == nil {
		t.Errorf("Error loading Pebble grammar")
	}
}
