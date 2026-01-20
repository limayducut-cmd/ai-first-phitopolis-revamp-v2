import { gql } from '@apollo/client';

// Career Queries
export const GET_CAREERS = gql`
  query GetCareers {
    careers(filter: { status: { _eq: "published" } }) {
      id
      job_title
      slug
      department
      location
      job_type
      short_description
    }
  }
`;

export const GET_CAREER_BY_SLUG = gql`
  query GetCareerBySlug($slug: String!) {
    careers(filter: { slug: { _eq: $slug }, status: { _eq: "published" } }) {
      id
      job_title
      slug
      department
      location
      job_type
      experience_level
      short_description
      description
      responsibilities
      requirements
      nice_to_have
      skills
      salary_range
      benefits
    }
  }
`;

export const GET_CAREER_BY_ID = gql`
  query GetCareerById($id: ID!) {
    careers_by_id(id: $id) {
      id
      job_title
      slug
      department
      location
      job_type
      experience_level
      short_description
      description
      responsibilities
      requirements
      nice_to_have
      skills
      salary_range
      benefits
    }
  }
`;

// Blog Queries
export const GET_BLOGS = gql`
  query GetBlogs {
    blog(filter: { status: { _eq: "published" } }, sort: ["-date_created"]) {
      id
      title
      slug
      excerpt
      thumbnail {
        id
      }
      tags
      date_created
      user_created {
        first_name
        last_name
      }
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    blog(filter: { slug: { _eq: $slug }, status: { _eq: "published" } }) {
      id
      title
      slug
      excerpt
      content
      thumbnail {
        id
      }
      tags
      date_created
      date_updated
      user_created {
        first_name
        last_name
      }
    }
  }
`;

export const GET_BLOG_BY_ID = gql`
  query GetBlogById($id: ID!) {
    blog_by_id(id: $id) {
      id
      title
      slug
      excerpt
      content
      thumbnail {
        id
      }
      tags
      date_created
      date_updated
      user_created {
        first_name
        last_name
      }
    }
  }
`;
