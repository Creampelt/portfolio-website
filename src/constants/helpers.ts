import type {PageInfo, ProjectPageInfo} from "../types";
import {STATIC_PAGES} from "./staticConstants";


export function getPages(query: Queries.AllPagesQuery): { [slug: string]: PageInfo | ProjectPageInfo } {
  const pages: { [slug: string]: PageInfo } = {};
  for (const {node} of query.allMarkdownRemark.edges) {
    pages[node.frontmatter!.slug!] =
      {
        ...node.frontmatter,
        html: node.html,
      } as PageInfo | ProjectPageInfo;
  }
  return {...STATIC_PAGES, ...pages};
}

export function clamp(x: number, min: number, max: number): number {
  return Math.min(Math.max(x, min), max);
}

export function getReportUrl(query: Queries.DownloadLinksQuery, report?: string): string | null {
  if (!report) {
    return null;
  }
  const allUrlNodes = query.allFile.edges.filter(({node}) => node.relativePath === report);
  return allUrlNodes.length > 0 ? allUrlNodes[0].node.publicURL : null;
}