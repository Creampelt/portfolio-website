import * as React from "react";

const ProjectPage: React.FC = () => {
  // console.log("data", data);
  return (
    <div className="project-page">
      Hello this is my project
    </div>
  );
};

export default ProjectPage;

// export const query = graphql`
//   {
//     legal: allFile(
//       filter: {
//         internal: {
//           mediaType: {eq: "text/markdown"}
//         }
//       }
//       edges {
//         node {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `;