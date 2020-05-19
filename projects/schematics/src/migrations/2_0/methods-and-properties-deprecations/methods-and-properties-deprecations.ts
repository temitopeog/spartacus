import { Rule, Tree } from '@angular-devkit/schematics';
import { isImported } from '@schematics/angular/utility/ast-utils';
import { TODO_SPARTACUS } from '../../../shared/constants';
import {
  commitChanges,
  getAllTsSourceFiles,
  getTsSourceFile,
  insertCommentAboveIdentifier,
  InsertDirection,
} from '../../../shared/utils/file-utils';
import { getSourceRoot } from '../../../shared/utils/workspace-utils';
import { METHOD_PROPERTY_DATA } from './methods-and-properties-deprecations-data';

export function migrate(): Rule {
  return (tree: Tree) => {
    const project = getSourceRoot(tree, {});
    const sourceFiles = getAllTsSourceFiles(tree, project);
    for (const originalSource of sourceFiles) {
      const sourcePath = originalSource.fileName;

      for (const data of METHOD_PROPERTY_DATA) {
        // 'source' has to be reloaded after each committed change
        const source = getTsSourceFile(tree, sourcePath);
        if (isImported(source, data.class, data.importPath)) {
          const changes = insertCommentAboveIdentifier(
            sourcePath,
            source,
            data.deprecatedNode,
            data.comment
              ? `${data.comment}\n`
              : `${buildMethodComment(data.deprecatedNode, data.newNode)}\n`
          );
          commitChanges(tree, sourcePath, changes, InsertDirection.RIGHT);
        }
      }
    }

    return tree;
  };
}

export function buildMethodComment(
  oldApiMethod: string,
  newApiMethod?: string
): string {
  const comment = `// ${TODO_SPARTACUS} '${oldApiMethod}' has been removed.`;
  return newApiMethod
    ? `${comment} Please try using '${newApiMethod}' instead.`
    : comment;
}