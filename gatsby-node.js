"use strict";

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /*const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || "page"}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
      },
    });
  });
  */

  const allProjectTypes = await graphql(`
    {
      allContentfulProjectType(limit: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (allProjectTypes.errors) {
    console.error("Error creating contentful pages: ", allProjectTypes.errors);
    return;
  }

  const projectTypeTemplate = path.resolve("src/templates/projectType.tsx");

  if (!allProjectTypes.data || !allProjectTypes.data.allContentfulProjectType || !allProjectTypes.data.allContentfulProjectType.edges) {
    console.error("Couldn't find edges for projectType:" + JSON.stringify(allProjectTypes));
    return;
  }

  allProjectTypes.data.allContentfulProjectType.edges.forEach(edge => {
    console.log("Processing node: " + JSON.stringify(edge));
    const { slug } = edge.node;
    console.log("Slug: " + slug);
    createPage({
      path: "/projecttype/" + slug,
      component: projectTypeTemplate,
      context: {
        // Data Passed to context is available in page queries as GraphQL variables.
        slug,
      },
    });
  });

  const allProjectEntries = await graphql(`
    {
      allContentfulProjectEntry {
        edges {
          node {
            slug
            layout
          }
        }
      }
    }
  `);

  if (allProjectEntries.errors) {
    console.error("Error creating contentful pages: ", allProjectEntries.errors);
    return;
  }

  if (
    !allProjectEntries.data ||
    !allProjectEntries.data.allContentfulProjectEntry ||
    !allProjectEntries.data.allContentfulProjectEntry.edges
  ) {
    console.error("Couldn't find edges for projectEntryType:" + JSON.stringify(allProjectEntries));
    return;
  }

  const projectEntryTemplate = path.resolve("src/templates/projectEntry.tsx");

  allProjectEntries.data.allContentfulProjectEntry.edges.forEach(edge => {
    console.log("Processing Entry node: " + JSON.stringify(edge));
    const { slug, layout } = edge.node;
    console.log("Project Entry Slug: " + slug);
    console.log("ProjectEntry Layout: " + layout);
    if (layout !== "NoPage") {
      createPage({
        path: "/projectentry/" + slug,
        component: projectEntryTemplate,
        context: {
          // Data Passed to context is available in page queries as GraphQL variables.
          slug,
        },
      });
    }
  });
};
