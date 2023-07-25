module.exports = {
  // Always include parentheses around a sole arrow function parameter
  arrowParens: 'always',
  // Put the opening bracket of a block on a new line
  bracketSameLine: false,
  // Add spaces inside object literals
  bracketSpacing: true,
  // Automatically format embedded code blocks
  embeddedLanguageFormatting: 'auto',
  // Use LF (Unix) line endings
  endOfLine: 'lf',
  // Define the import order for modules
  //   importOrder: [
  //     // External libraries or third-party modules
  //     '<THIRD_PARTY_MODULES>',
  //
  //     // Internal modules
  //     // Modules starting with "@core/"
  //     '^@core/(.*)$',
  //     // Modules starting with "@server/"
  //     '^@server/(.*)$',
  //     // Modules starting with "@ui/"
  //     '^@ui/(.*)$',
  //     // Modules starting with "@/components/"
  //     '^@/components/(.*)$',
  //     // Modules starting with "@/pages/"
  //     '^@/pages/(.*)$',
  //     // Modules starting with "@/utils/"
  //     '^@/utils/(.*)$',
  //     // Modules starting with "@/schema/"
  //     '^@/schema/(.*)$',
  //     // Modules starting with "@supabase/"
  //     '^@supabase/(.*)$',
  //     // All other internal modules
  //     '^@/(.*)$',
  //   ],
  // Add an empty line between import groups
  importOrderSeparation: true,
  // Sort the import specifiers within a group
  importOrderSortSpecifiers: true,
  // Use double quotes instead of single quotes in JSX
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  // Use the "prettier-plugin-import-sort" plugin
  // plugins: [require.resolve('prettier-plugin-import-sort')],
  // Specify the maximum line width before wrapping code
  printWidth: 1000,
  // Only add quotes around object properties when necessary
  quoteProps: 'consistent',
  // Add semicolons at the end of statements
  semi: true,
  singleQuote: false,
  // Specify the number of spaces per indentation level
  tabWidth: 2,
  // Add a trailing comma after the last object property or array element
  trailingComma: 'all',
  // Add spaces inside curly braces in object literals
  objectCurlySpacing: true,
  // Add spaces around arrow function parameters
  arrowSpacing: true,
  // Use block braces around arrow function bodies
  arrowBodyStyle: 'block',
  // Configure import sorting
  // importSort: {
  //   '.js, .jsx, .ts, .tsx': {
  //     style: 'module',
  //     options: {
  //       // Groups within import sorting
  //       groups: [
  //         // External libraries or third-party modules
  //         { name: 'external', type: 'import', match: '^\\w' },
  //         // Internal modules
  //         { name: 'internal', type: 'import', match: '^@' },
  //         // All other imports
  //         { name: 'parent', type: 'parent' },
  //       ],
  //     },
  //   },
  // },
};
