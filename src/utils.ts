import path from 'path'
import * as core from '@actions/core'

/**
 * Adjusts an absolute path to a relative one to the GITHUB_WORKSPACE
 */
export function convertToRelativePath(providedPath: string): string {
  let githubWorkspacePath = process.env['GITHUB_WORKSPACE']
  if (!githubWorkspacePath) {
    throw new Error('GITHUB_WORKSPACE not defined')
  }
  githubWorkspacePath = path.resolve(githubWorkspacePath)
  core.debug(`GITHUB_WORKSPACE = '${githubWorkspacePath}'`)

  const relativePath = path.relative(githubWorkspacePath, providedPath)
  core.debug(`relativePath = '${relativePath}'`)
  return relativePath
}
