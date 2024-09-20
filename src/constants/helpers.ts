import type { MainPageInfo, PageByTypeIndex, PageInfo, ProjectPageInfo } from "../types";
import { PageType } from "../types";
import { STATIC_PAGES } from "./staticConstants";

export function getPages(query: Queries.AllPagesQuery): { [slug: string]: PageInfo } {
  const pages: { [slug: string]: PageInfo } = {};
  for (const { node } of query.main.edges) {
    pages[node.frontmatter!.slug!] =
      {
        ...node.frontmatter,
        type: PageType.MAIN,
        html: node.html,
      } as MainPageInfo;
  }
  for (const { node } of query.projects.edges) {
    pages[node.frontmatter!.slug!] =
      {
        ...node.frontmatter,
        type: PageType.PROJECT,
        html: node.html,
      } as ProjectPageInfo;
  }
  return { ...STATIC_PAGES, ...pages };
}

export function getPagesByType(pages: PageInfo[]): PageByTypeIndex {
  const pagesByType: Partial<PageByTypeIndex> = {};
  for (const page of pages) {
    if (!pagesByType[page.type]) {
      pagesByType[page.type] = [];
    }
    pagesByType[page.type]!.push(page);
  }
  return pagesByType as PageByTypeIndex;
}

export function clamp(x: number, min: number, max: number): number {
  return Math.min(Math.max(x, min), max);
}

export function getReportUrl(query: Queries.DownloadLinksQuery, report?: string): string | null {
  if (!report) {
    return null;
  }
  const allUrlNodes = query.allFile.edges.filter(({ node }) => node.relativePath.replace("downloads/", "") === report);
  return allUrlNodes.length > 0 ? allUrlNodes[0].node.publicURL : null;
}