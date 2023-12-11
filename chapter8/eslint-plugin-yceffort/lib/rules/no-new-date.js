/**
 * @fileoverview yceffort
 * @author yceffort
 */
"use strict";

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

/**
 *
 * @type {import('eslint').Rule.RuleModule}
 */
 module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow use of the new Date()',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
    messages: {
      message: 'new Date()는 클라이언트에서 실행시 해당 기기의 시간에 의존적이라 정확하지 않습니다. 현재 시간이 필요하다면 ServerDate()를 사용해주세요.'
    },
  },
  create: function (context) {
    return {
      NewExpression: function (node) {
        if (node.callee.name === 'Date' && node.arguments.length === 0) {
          context.report({
            node,
            messageId: 'message',
            fix: function (fixer) {
              return fixer.replaceText(node, 'ServerDate()')
            },
          })
        }
      },
    }
  },
}
