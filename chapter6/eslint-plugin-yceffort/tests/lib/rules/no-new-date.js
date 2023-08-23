/**
 * @fileoverview yceffort
 * @author yceffort
 */
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester;

const rule = require("../../../lib/rules/no-new-date");

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
const ruleTester = new RuleTester();
ruleTester.run("no-new-date", rule, {
  valid: [
    {
      code: 'new Date(2021, 1, 1)',      
    },
    {
      code: 'new Date("2022-01-01")',      
    },    
  ],

  invalid: [
    {
      code: "new Date()",
      errors: [{ message: rule.meta.messages.message }],
      output: "ServerDate()"
    },
  ],
});
