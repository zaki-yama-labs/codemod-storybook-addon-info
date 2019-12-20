module.exports = function (fileInfo, { jscodeshift }, options) {
  const j = jscodeshift;
  const root = j(fileInfo.source);

  // remove - import { withInfo } from "@storybook/addon-info";
  root
    .find(j.ImportDeclaration, {
      source: {
        value: '@storybook/addon-info'
      }
    })
    .forEach(path => {
      j(path).replaceWith();
    });

  // replace `withInfo(...)` with `{ info: ... }`
  root
    .find(j.CallExpression, {
      callee: {
        name: 'withInfo'
      }
    })
    .forEach(path => {
      const infoLiteral = path.value.arguments[0];
      j(path.parentPath).replaceWith(
        path.parentPath.value.arguments,
      );

      const infoObjectExpression = j.objectExpression([
          j.property('init', j.identifier('info'), infoLiteral)
        ]);
      path.parentPath.parentPath.value.push(infoObjectExpression);
    });

  return root.toSource();
}
